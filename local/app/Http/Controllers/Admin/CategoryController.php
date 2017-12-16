<?php namespace App\Http\Controllers\Admin;
use App\User; 
use App\Category; 
use DB;
use Illuminate\Support\Facades\Input;
use Auth;
use App\Http\Controllers\Controller;
use Validator;
use Session;
use Request;
class CategoryController extends Controller
{      
            public function __construct()
        {
            $this->middleware('auth');
            

        }
	public function index(){ 
              
             return view('admin/category')->with('title','Category')->with('subtitle','List');
		
	}
        public function all(){ 

             $category = DB::table('categorys')->where('is_delete', '=','0')->get();
	     $all_category = app('App\Http\Controllers\Admin\ProductController')->getcataegorywithSub();
	     $return['category']=$category;
	     $return['all_category']=$all_category;
             return  $return;

		
	}
	
	public function changeStatus()
	{
		$id = Request::input('id');
		$action = Request::input('status');
		if($action=='Active'){
			$status ='Inactive';
		}
		else if($action=='Inactive')
		{
			$status = 'Active';
		}
		else if($action=='Block')
		{
			$status = 'Block';
		}
		
	    $cat = Category::find($id);
	    $cat->status = $status;
	    $cat->save(); 	   		 
	    $list[]='success';
	    $list[]='Category status has been changed successfully.';	 
	    return $list;
	}
       
        public function store(){
	
	   $validator = Validator::make(Request::all(), [
            'category_name' => 'required|soft_unique_single:categorys,category_name',	       
            'description'=>'required',            
            'meta_title'=>'required',
            'meta_description'=>'required',
            'meta_keyword'=>'required',
            //'image'=>'required'
        ]);
         
        if ($validator->fails()) {
                              $list[]='error';
                              $msg=$validator->errors()->all();
			      $list[]=$msg;
			      return $list;
        }
	
	$cat= Category::create(['image' => Request::input('image'),'meta_title' =>Request::input('meta_title'),'meta_description' =>Request::input('meta_description'),'meta_keyword' =>Request::input('meta_keyword'),'category_name' =>Request::input('category_name'),'description' =>Request::input('description'),'status' =>Request::input('status'),'parent_id'=>Request::input('parent_id'),'is_delete'=>'0','user_id'=>Auth::user()->id]);  
	  
            $list[]='success';
            $list[]='Record is added successfully.';	 
	    return $list;
	   
	}
        public function delete(Request $request){
	
	   $chk_id=Request::input('del_id');	
           $cat = Category::find($chk_id);
           $cat->is_delete = '1';
           $cat->save(); 	   		 
           $list[]='success';
           $list[]='Record is deleted successfully.';	 
	   return $list;
	    
	}
        
	 public function edit($id){
	
	 $cate= DB::table('categorys')->where('id', '=',$id)->first();  
         $category = DB::table('categorys')->where('is_delete', '=','0')->get();  
         $return['category']=$cate;
         $return['all_cat']=$category;
	 return $return;
	     
	}
         public function update(){
	
	  $validator = Validator::make(Request::all(), [
            'category_name' => 'required|soft_unique_single:categorys,category_name,'.Request::input('id'),	    
            'description'=>'required',        
            'meta_title'=>'required',
            'meta_description'=>'required',
            'meta_keyword'=>'required',
        ]);
         
        if ($validator->fails()) {
                              $list[]='error';
                              $msg=$validator->errors()->all();
			      $list[]=$msg;
			      return $list;
        }
//	 if(Input::file('image')!=''){	 
//         $destinationPath = 'uploads'; // upload path
//         $extension = Input::file('image')->getClientOriginalExtension(); // getting image extension
//         $fileName = rand(11111,99999).'.'.$extension; // renameing image
//         Input::file('image')->move($destinationPath, $fileName); // uploading file to given path
//         }
//         echo Input::file('image');echo'hello';
         $cat = Category::find(Request::input('id'));
         $cat->category_name = Request::input('category_name');
         if((Request::input('image'))){
	 $cat->image = Request::input('image');
         }
	 $cat->description =Request::input('description');
	 $cat->parent_id=Request::input('parent_id');
         $cat->status=Request::input('status');
         $cat->meta_title=Request::input('meta_title');
         $cat->meta_description=Request::input('meta_description');
         $cat->meta_keyword=Request::input('meta_keyword');
         $cat->save(); 
		  
        $list[]='success';
        $list[]='Record is updated successfully.';	 
	return $list;
	     
	}
	
	public function getcataegorywithSub($pid=0)
	{
		$categories = array();
		$result = DB::table('categorys')->where('is_delete', '=','0')->where('parent_id','=',$pid)->get();
		foreach((array)$result as $key=>$mainCategory)
		{
			$category = array();
			 $category['id'] = $mainCategory->id;
			$category['name'] = $mainCategory->category_name;
			$category['parent_id'] = $mainCategory->parent_id;
			$mainCategory->all_category = self::getcataegorywithSub($category['id']);
			$categories[$mainCategory->id] = $category;
			
			
		}
		
		return $result;
	}
	
       
 }
 
?>