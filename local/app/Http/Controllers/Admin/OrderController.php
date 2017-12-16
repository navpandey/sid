<?php namespace App\Http\Controllers\Admin;
use App\User; 
use App\Promotion;
use App\PromotionAdtext;
use App\PromotionAdd;
use App\Category;
use App\Product;
use App\Order;
use Carbon\Carbon;
use DB;
use Illuminate\Support\Facades\Input;
use Auth;
use App\Http\Controllers\Controller;
use Validator;
use Session;
use Request;
use File;
use Response;
class OrderController extends Controller
{      
        public function __construct()
        {
            $this->middleware('auth');
        }
        public function index(){
            return view('admin/order')->with('title','Order');
        }
        public function getallorder(){
		   $orders_all= DB::table('order_details')->get(); 
		}
}