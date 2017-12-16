
    <!-- Main content -->
    <section class="content">
       
	 <div class="alert alert-success" ng-if="success_flash">
            <p >
            <% success_flash %>
            </p>
        </div>
        <div class="alert alert-danger"  ng-if="errors">
            <ul>
                <li ng-repeat ="er in errors"><% er %></li>
         
            </ul>
        </div> 
          <!-- /.box -->
         
          <div class="box" ng-if="page=='index'">
            <div class="box-header">
              <h3 class="box-title"><i class="fa fa-list"></i> Product List</h3>
              <div class="pull-right"> <a href="javascript:void(0)" ng-click="add();"class="btn btn-primary"><i class="fa fa-plus"></i> Add Product</a></div>
            </div>
            <!-- /.box-header -->
            
            <div class="box-body">  
		    <div class="row">
			<div class="col-md-12 ">
			<ul class="subsubsub" ng-if="group_pros" >
			    <li ng-repeat="(key, value) in group_pros"  ng-click ="set_group_pros( value.status )" ng-class="{ active: value.status==select_group_pros}">
				<a href="javascript:void(0);"> <% value.status %>(<% value.items.length %>)</a>
				<span ng-if="$index!=(group_pros.length-1)"> | </span>
			    </li>
			</ul>
			</div>
		    </div>
		    <div class="row">
		    <div class="form-group col-md-2 ">		  
			<button class="btn btn-default" data-toggle="modal" data-target="#screen_opt_modal">Screen Options</button>
			</div>
		    <div class="form-group col-md-10 ">		  
			<span class="pull-right"><a href="{{ URL('admins/product/export') }}" class="btn btn-primary"><i class="fa fa-file-excel-o"></i> Export To Excel</a></span>
			</div>
			  <!-- Modal -->
		    <div class="modal fade" id="screen_opt_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			  <div class="modal-dialog" role="document">
			    <div class="modal-content">
			      <div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title" id="myModalLabel">Screen Options</h4>                            
			      </div>
			      <div class="modal-body">
				  <div class="row" ng-init='screen_opt={"pro_name":true,"category_name":true,"status":true}'>
				      
				    <div class="col-md-4">
				       <div class="form-group">
					    <input type="checkbox" ng-model="screen_opt.pro_name"> Product Name
				       </div>
				    </div>
				     <div class="col-md-4">
				       <div class="form-group">
					    <input type="checkbox" ng-model="screen_opt.category_name"> Category Name
				       </div>
				    </div>
				     <div class="col-md-4">
				       <div class="form-group">
					    <input type="checkbox"  ng-model="screen_opt.status"> Status
				       </div>
				     </div>
				     <div class="col-md-4">
				       <div class="form-group">
					    <input type="checkbox" ng-model="screen_opt.pro_des"> Product Description
				       </div>
				    </div>
				     <div class="col-md-4">
				       <div class="form-group">
					    <input type="checkbox" ng-model="screen_opt.pro_short_des"> Product Short Description
				       </div>
				    </div>
				     <div class="col-md-4">
				       <div class="form-group">
					    <input type="checkbox"  ng-model="screen_opt.pro_feature_des"> Product Feature Description
				       </div>
				     </div>
					<div class="col-md-4">
				       <div class="form-group">
					    <input type="checkbox" ng-model="screen_opt.meta_title"> Meta Title
				       </div>
				    </div>
				     <div class="col-md-4">
				       <div class="form-group">
					    <input type="checkbox" ng-model="screen_opt.meta_description"> Meta Description
				       </div>
				    </div>
				     <div class="col-md-4">
				       <div class="form-group">
					    <input type="checkbox"  ng-model="screen_opt.meta_keywords"> Meta Keyword
				       </div>
				     </div>
				     <div class="col-md-4">
				       <div class="form-group">
					    <input type="checkbox" ng-model="screen_opt.length"> Length
				       </div>
				    </div>
				     <div class="col-md-4">
				       <div class="form-group">
					    <input type="checkbox" ng-model="screen_opt.width"> Width
				       </div>
				    </div>
				     <div class="col-md-4">
				       <div class="form-group">
					    <input type="checkbox"  ng-model="screen_opt.height"> Height
				       </div>
				     </div>
				       <div class="col-md-4">
				       <div class="form-group">
					    <input type="checkbox" ng-model="screen_opt.stock_status"> Stock Status
				       </div>
				    </div>
				     <div class="col-md-4">
				       <div class="form-group">
					    <input type="checkbox"  ng-model="screen_opt.no_stock"> Number of Stock
				       </div>
				     </div>
				     <div class="col-md-4">
				       <div class="form-group">
					    <input type="checkbox"  ng-model="screen_opt.sku"> SKU
				       </div>
				     </div>
				     <div class="col-md-4">
				       <div class="form-group">
					    <input type="checkbox"  ng-model="screen_opt.price"> Price
				       </div>
				     </div>
				     <div class="col-md-4">
				       <div class="form-group">
					    <input type="checkbox"  ng-model="screen_opt.date_to"> Expiry Date
				       </div>
				     </div>
				  </div>
				  <div class="row col-xs-12">
				   <div class="form-group  col-md-12">
					<div class="col-md-5">
				   Number of items per page: 
					</div>
					<div class="col-md-3">
				   <select ng-init="tb_pag=5" class="form-control" ng-model="tb_pag">
				       <option value="5" ng-selected="tb_pag==5">5</option>
				       <option value="10" ng-selected="tb_pag==10">10</option>
				       <option value="100" ng-selected="tb_pag==100">100</option>
				       <option value="1000" ng-selected="tb_pag==1000">1000</option>
				   </select>
					</div>
				   </div>
				   </div>
			      </div>
				   <div class="modal-footer">
				<button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>                         
				   </div>
			      </div>
			      </div>
			 </div>
		    
		    <div class="modal fade" id="edit_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" >
			  <div class="modal-dialog" role="document">
			    <div class="modal-content">
			      <div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" ng-click="init();" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title" id="myModalLabel">Edit</h4>                            
			      </div>
			     <div class="modal-body">
                                    <div class="alert alert-success" ng-if="success_flash_pop">
                                        <p>
                                        <% success_flash_pop %>
                                        </p>
                                    </div>
                                    <div class="alert alert-danger"  ng-if="errors_pop">
                                        <ul>
                                            <li ng-repeat ="er in errors_pop"><% er %></li>         
                                        </ul>
                                    </div>
				    <div class="row" ng-if="edit_field=='sku'">
					<div class="form-group" >
                                        <label for="exampleInputEmail1">SKU</label>
                                        <input type="text" class="form-control" ng-model="edit_values.sku">
                                        <div class="help-block"></div>
                                    </div>  
				    </div>
				    <div class="row" ng-if="edit_field=='price'">
					<div class="form-group" >
                                        <label for="exampleInputEmail1">Price</label>
                                        <input type="text" class="form-control" ng-model="edit_values.price">
                                        <div class="help-block"></div>
                                    </div>  
				    </div>
				    <div class="row" ng-if="edit_field=='exp-date'">
					<div class="form-group" >
                                        <label for="exampleInputEmail1">Expiry Date</label>
                                        <ng-datepicker  class="hasDatepicker" view-format="Do MMMM YYYY" ng-model="edit_values.date_to" first-week-day-sunday="true" placeholder="Pick a date">
                                           </ng-datepicker>
                                        <div class="help-block"></div>
                                    </div>  
				    </div>
				    <div class="row" ng-if="edit_field=='meta_title'">
					<div class="form-group">
				       <label for="exampleInputEmail1">Meta Title</label>
				       <input type="text" class="form-control" id="" name="meta_title" maxlength="100" placeholder="Meta Title" ng-model="edit_values.meta_title">
				       <div class="help-block"></div>
				      <span>Characters left: <% 100 - edit_values.meta_title.length %></span>
				     </div>
				    </div>
				    <div class="row" ng-if="edit_field=='meta_des'">
				   <div class="form-group">
				     <label for="exampleInputEmail1">Meta Description</label>
				     <input type="text" class="form-control" id="" name="meta_description" maxlength="200" placeholder="Meta Description" ng-model="edit_values.meta_description">
				     <div class="help-block"></div>
				     <span>Characters left: <% 200 - edit_values.meta_description.length %></span>
				   </div>
				    </div>
				    <div class="row" ng-if="edit_field=='meta_key'">
					<div class="form-group">
					  <label for="exampleInputEmail1">Meta Keywords</label>
					  <input type="text" class="form-control" id="" name="meta_keywords" maxlength="30" placeholder="Meta Keywords" ng-model="edit_values.meta_keywords">
					  <div class="help-block"></div>
					  <span>Characters left: <% 30 - edit_values.meta_keywords.length %></span>
					</div>
				    </div>
                                    <div class="row" ng-if="edit_field=='des'">
					<div class="form-group" >
                                        <label for="exampleInputEmail1">Description</label>
                                        <div text-angular ng-model="edit_values.pro_des" name="pro_des" ta-text-editor-class="border-around" ta-html-editor-class="border-around"></div>
                                        <div class="help-block"></div>
                                    </div>  
				    </div>
				    <div class="row" ng-if="edit_field=='short_des'">
					<div class="form-group" >
                                        <label for="exampleInputEmail1">Short Description</label>
                                        <div text-angular ng-model="edit_values.pro_short_des" name="pro_des" ta-text-editor-class="border-around" ta-html-editor-class="border-around"></div>
                                        <div class="help-block"></div>
                                    </div>  
				    </div>
				    <div class="row" ng-if="edit_field=='feat_des'">
					<div class="form-group" >
                                        <label for="exampleInputEmail1">Feature Description</label>
                                        <div text-angular ng-model="edit_values.pro_feature_des" name="pro_des" ta-text-editor-class="border-around" ta-html-editor-class="border-around"></div>
                                        <div class="help-block"></div>
                                    </div>  
				    </div>
				   
			      </div>
			      <div class="modal-footer">
				  <button type="button" class="btn btn-default pull-left" ng-click="init();" data-dismiss="modal">Close</button>			      
				  <button class="btn btn-primary" ng-click="editDes(edit_values)" >Update</button>                         
			      </div>
			    </div>
			  </div>
		  </div>
		    
		    </div>
		    
		    <div class="row">
			 
			 <div class="col-md-2">
			 <select class="form-control" name="" ng-model="bulk">
			 <option value="">Bulk Action</option>
			 <option value="edit">Edit</option>
			 <option value="delete">Move To Trash</option>
			 </select>
			 
			 </div>
			 <div class="col-md-4">
			 <button class="btn btn-default" ng-click="bulkAction(bulk);">Apply</button></div>
			 
		    
		    
		    <div class="form-group col-md-3 pull-right">		  
		      <input type="text" placeholder="Search" class="form-control ng-valid ng-dirty ng-valid-parse ng-touched" ng-model="search">
		    </div>
		    </div>
		    <table id="example1" class="table table-bordered table-striped">
		    <thead>
		    <tr>
			 <th><input type="checkbox" ng-model="selectedAll" ng-click="checkAll()" /></th>
		      <th ng-click="sort('id')" style="cursor:pointer">#
		       <span class="glyphicon sort-icon"  ng-show="sortKey=='id'" ng-class="{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}"></span>
		      </th>
		      <th ng-if="screen_opt.pro_name" ng-click="sort('pro_name')" style="cursor:pointer">Product Name
			<span class="glyphicon sort-icon"  ng-show="sortKey=='pro_name'" ng-class="{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}"></span>
		      </th>                  
		      <th ng-if="screen_opt.category_name" ng-click="sort('category_name')" style="cursor:pointer">Category Name
		       <span class="glyphicon sort-icon"  ng-show="sortKey=='category_name'" ng-class="{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}"></span>
		      </th>
		      <th ng-if="screen_opt.status"  ng-click="sort('status')" style="cursor:pointer">Status
		       <span class="glyphicon sort-icon"  ng-show="sortKey=='status'" ng-class="{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}"></span>
		      </th>
		      <th ng-if="screen_opt.pro_des" ng-click="sort('pro_des')" style="cursor:pointer">Product Description 
			<span class="glyphicon sort-icon"  ng-show="sortKey=='pro_des'" ng-class="{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}"></span>
		      </th>                  
		      <th ng-if="screen_opt.pro_short_des" ng-click="sort('pro_short_des')" style="cursor:pointer">Product Short Description 
		       <span class="glyphicon sort-icon"  ng-show="sortKey=='pro_short_des'" ng-class="{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}"></span>
		      </th>
		      <th ng-if="screen_opt.pro_feature_des"  ng-click="sort('pro_feature_des')" style="cursor:pointer"> Product Feature Description   
		       <span class="glyphicon sort-icon"  ng-show="sortKey=='pro_feature_des'" ng-class="{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}"></span>
		      </th>
		       <th ng-if="screen_opt.meta_title" ng-click="sort('meta_title')" style="cursor:pointer"> Meta Title
			<span class="glyphicon sort-icon"  ng-show="sortKey=='meta_title'" ng-class="{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}"></span>
		      </th>                  
		      <th ng-if="screen_opt.meta_description" ng-click="sort('meta_description')" style="cursor:pointer"> Meta Description
		       <span class="glyphicon sort-icon"  ng-show="sortKey=='meta_description'" ng-class="{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}"></span>
		      </th>
		      <th ng-if="screen_opt.meta_keywords"  ng-click="sort('meta_keywords')" style="cursor:pointer"> Meta Keywords
		       <span class="glyphicon sort-icon"  ng-show="sortKey=='meta_keywords'" ng-class="{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}"></span>
		      </th>
		      <th ng-if="screen_opt.length" ng-click="sort('length')" style="cursor:pointer"> Length
			<span class="glyphicon sort-icon"  ng-show="sortKey=='length'" ng-class="{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}"></span>
		      </th>                  
		      <th ng-if="screen_opt.width" ng-click="sort('width')" style="cursor:pointer"> Width
		       <span class="glyphicon sort-icon"  ng-show="sortKey=='width'" ng-class="{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}"></span>
		      </th>
		      <th ng-if="screen_opt.height"  ng-click="sort('height')" style="cursor:pointer"> Height   
		       <span class="glyphicon sort-icon"  ng-show="sortKey=='height'" ng-class="{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}"></span>
		      </th>
			<th ng-if="screen_opt.stock_status" ng-click="sort('stock_status')" style="cursor:pointer" > Stock Status 
			<span class="glyphicon sort-icon"  ng-show="sortKey=='stock_status'" ng-class="{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}"></span>
		      </th>
		       <th ng-if="screen_opt.no_stock" ng-click="sort('no_stock')" style="cursor:pointer"> Number of Stock  
		       <span class="glyphicon sort-icon"  ng-show="sortKey=='no_stock'" ng-class="{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}"></span>
		      </th>
		       <th ng-if="screen_opt.sku" ng-click="sort('sku')" style="cursor:pointer"> SKU  
		       <span class="glyphicon sort-icon"  ng-show="sortKey=='sku'" ng-class="{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}"></span>
		      </th>
		       <th ng-if="screen_opt.price" ng-click="sort('price')" style="cursor:pointer"> Price  
		       <span class="glyphicon sort-icon"  ng-show="sortKey=='price'" ng-class="{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}"></span>
		      </th>
		       <th ng-if="screen_opt.date_to" ng-click="sort('date_to')" style="cursor:pointer"> Expiry Date 
		       <span class="glyphicon sort-icon"  ng-show="sortKey=='date_to'" ng-class="{'glyphicon-chevron-up':reverse,'glyphicon-chevron-down':!reverse}"></span>
		      </th>
		      <th> </th>                 
		    </tr>
		    </thead>
		    <tbody>                
		    <tr dir-paginate="val in products|orderBy:sortKey:reverse|itemsPerPage:tb_pag|filter:search">
			 <td><input type="checkbox" ng-model="product_id[val.id]" ng-change="optionToggled(val.id)" value="<% val.id %>"/></td>
		      <td><% val.id %></td>
		      <td ng-if="screen_opt.pro_name"><a href="javascript:void(0);" ng-click="editproduct(val)"><% val.pro_name %></a></td>
		      <td ng-if="screen_opt.category_name"><% val.category_name %></td>
		      <td ng-if="screen_opt.status"><% val.status %></td>
		      <td ng-if="screen_opt.pro_des"><button class="btn btn-default" data-toggle="modal" data-target="#edit_modal" style="cursor:pointer"  ng-click="edit_modal('des',val)">Edit Description</button></td>
		      <td ng-if="screen_opt.pro_short_des"><button class="btn btn-default" data-toggle="modal" data-target="#edit_modal" style="cursor:pointer"  ng-click="edit_modal('short_des',val)">Edit Short Description</button></td>
		      <td ng-if="screen_opt.pro_feature_des"><button class="btn btn-default" data-toggle="modal" data-target="#edit_modal" style="cursor:pointer"  ng-click="edit_modal('feat_des',val)">Edit Feature Description</button></td>
		      <td ng-if="screen_opt.meta_title" data-toggle="modal" data-target="#edit_modal" style="cursor:pointer"  ng-click="edit_modal('meta_title',val)"><% val.meta_title %></td>
		      <td ng-if="screen_opt.meta_description" data-toggle="modal" data-target="#edit_modal" style="cursor:pointer"  ng-click="edit_modal('meta_des',val)"><% val.meta_description %></td>
		      <td ng-if="screen_opt.meta_keywords" data-toggle="modal" data-target="#edit_modal" style="cursor:pointer"  ng-click="edit_modal('meta_key',val)"><% val.meta_keywords %></td>
		      <td ng-if="screen_opt.length"><% val.length %></td>
		      <td ng-if="screen_opt.width"><% val.width %></td>
		      <td ng-if="screen_opt.height"><% val.height %></td>
		      <td ng-if="screen_opt.stock_status"><% val.stock_status %></td>
		      <td ng-if="screen_opt.no_stock"><% val.no_stock %></td>
		      <td ng-if="screen_opt.sku" data-toggle="modal" data-target="#edit_modal" style="cursor:pointer"  ng-click="edit_modal('sku',val)"><% val.sku %></td>
		      <td ng-if="screen_opt.price" data-toggle="modal" data-target="#edit_modal" style="cursor:pointer"  ng-click="edit_modal('price',val)"><% val.price %></td>
		      <td ng-if="screen_opt.date_to" data-toggle="modal" data-target="#edit_modal" style="cursor:pointer"  ng-click="edit_modal('exp-date',val)"><% val.date_to %></td>
		      <td><a href="javascript:void(0);" ng-click="editproduct(val)"><i class="fa fa-edit" title="Edit"></i></a>
		      <i class="fa fa-trash" title ="Delete" style="cursor:pointer" data-toggle="modal" data-target="#del_modal<% val.id %>"></i>
		     
		      <!-- Modal -->
			<div class="modal fade" id="del_modal<% val.id %>" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
			  <div class="modal-dialog" role="document">
			    <div class="modal-content">
			      <div class="modal-header">
				<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
				<h4 class="modal-title" id="myModalLabel">Delete</h4>
			      </div>
			      <div class="modal-body">
				Are you sure you want to delete this product ? 
			      </div>
			      <div class="modal-footer">
				<button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
			      
				   <input type="hidden" name="del_id" value="<% val.id %>" />
				  <button type="submit" class="btn btn-primary" data-dismiss="modal" ng-click="deleteproduct($index)" >Delete</button>
			      </div>
			    </div>
			  </div>
			</div>
		      </td>
		      
		    </tr>
		    
		    </tbody>
		    <tfoot>
		     <tr>
			 <th></th>
		      <th>#</th>
		      <th ng-if="screen_opt.pro_name">Product Name                    
		      </th>                  
		      <th ng-if="screen_opt.category_name" >Category Name
		      </th>
		      <th ng-if="screen_opt.status"  >Status
		      </th>
		      <th ng-if="screen_opt.pro_des">Product Description 
		       </th>                  
		      <th ng-if="screen_opt.pro_short_des" >Product Short Description 
		      </th>
		      <th ng-if="screen_opt.pro_feature_des"  > Product Feature Description   
		      </th>
		       <th ng-if="screen_opt.meta_title" > Meta Title
		       </th>                  
		      <th ng-if="screen_opt.meta_description" > Meta Description
		       </th>
		      <th ng-if="screen_opt.meta_keywords"  > Meta Keywords
		       </th>
		      <th ng-if="screen_opt.length" > Length 
		       </th>                  
		      <th ng-if="screen_opt.width" > Width
		      </th>
		      <th ng-if="screen_opt.height" > Height  
		      </th>
		      <th ng-if="screen_opt.stock_status" > Stock Status  
		      </th>
		       <th ng-if="screen_opt.no_stock" > Number of Stock  
		      </th>
		       <th ng-if="screen_opt.sku" > SKU  
		      </th>
		       <th ng-if="screen_opt.price" > Price  
		      </th>
		       <th ng-if="screen_opt.date_to" > Expiry Date 
		      </th>
		      <th> </th>                 
		    </tr>
		    </tfoot>
		    </table>
		    <dir-pagination-controls
		    max-size="tb_pag"
		    direction-links="true"
		    boundary-links="true" >
		    </dir-pagination-controls>
		</div>
            </div>
            <!-- /.box-body -->
          </div>
        <!-- general form elements -->
          <div class="box box-primary" ng-if="page=='add'">
            <div class="box-header with-border">
                <h3 class="box-title"><i class="fa fa-plus"></i> Create Products</h3>
                <div class="pull-right"> <a href="javascript:void(0);" ng-click="init();" class="btn btn-default">Back</a></div>
            </div>
            <!-- /.box-header -->
            <!-- form start -->
           
              <div class="box-body">
	       <div class="col-xs-9">	
		    <div class="form-group">
		      <label for="exampleInputEmail1">Product Name</label>
		      <input type="text" class="form-control" id="" name="pro_name" placeholder="Product Name" ng-model="product.pro_name">
		      <div class="help-block"></div>
		    </div>
		     <!-- Default box -->
		    <div class="box">
		      <div class="box-header with-border">
			<h3 class="box-title">Product Description</h3>
			<div class="box-tools pull-right">
			  <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
			    <i class="fa fa-minus"></i></button>
			</div>
		      </div>
		      <div class="box-body">
			<div class="form-group">
			 <label for="exampleInputEmail1">Product Description</label>
			     <div text-angular ng-model="product.pro_des" name="pro_des" ta-text-editor-class="border-around" ta-html-editor-class="border-around"></div>
			     <div class="help-block"></div>
			</div>
		      </div>
		    </div>
                   <!-- /.box -->
		    <!-- Default box -->
		    <div class="box">
		      <div class="box-header with-border">
			<h3 class="box-title">Meta Title and Description</h3>
			<div class="box-tools pull-right">
			  <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
			    <i class="fa fa-minus"></i></button>
			</div>
		      </div>
		      <div class="box-body">
			<div class="form-group">
		      <label for="exampleInputEmail1">Meta Title</label>
		      <input type="text" class="form-control" id="" name="meta_title" maxlength="100" placeholder="Meta Title" ng-model="product.meta_title">
		      <div class="help-block"></div>
                     <span>Characters left: <% 100 - product.meta_title.length %></span>
		    </div>
		    <div class="form-group">
		      <label for="exampleInputEmail1">Meta Description</label>
		      <input type="text" class="form-control" id="" name="meta_description" maxlength="200" placeholder="Meta Description" ng-model="product.meta_description">
		      <div class="help-block"></div>
		      <span>Characters left: <% 200 - product.meta_description.length %></span>
		    </div>
		    <div class="form-group">
		      <label for="exampleInputEmail1">Meta Keywords</label>
		      <input type="text" class="form-control" id="" name="meta_keywords" maxlength="30" placeholder="Meta Keywords" ng-model="product.meta_keywords">
		      <div class="help-block"></div>
		      <span>Characters left: <% 30 - product.meta_keywords.length %></span>
		    </div>
		      </div>
		    </div>
                   <!-- /.box -->
		    <div class="form-group">
		      <label for="exampleInputEmail1">Product Short Description</label>
		      <div text-angular ng-model="product.pro_short_des" name="pro_short_des" ta-text-editor-class="border-around" ta-html-editor-class="border-around"></div>
		      <div class="help-block"></div>
		    </div>
		     <!-- Default box -->
		    <div class="box">
		      <div class="box-header with-border">
			<h3 class="box-title">Product Data-</h3>
			<select name="pro_data_type" ng-model="product.pro_datatype_id" ng-init="product.pro_datatype_id=1">
			 <optgroup label="Product Type">
			 <option ng-repeat="dt in datatyps" ng-value="dt.id" ng-selected="dt.id==product.pro_datatype_id" value="<%dt.id%>"><%dt.data_type%></option> 
			 </optgroup>
			</select>   
			<div class="box-tools pull-right">
			  <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
			    <i class="fa fa-minus"></i></button>
			</div>
		      </div>
		      <div class="box-body">
			 <div class="col-xs-12 main--tab">
			     <div class="col-md-4">
				   <div class="first-box" ng-if="product.pro_datatype_id == '1'">
					<ul class="nav nav-pills nav-stacked tabb">
					<li ng-class="{ active: isSet(1) }">
					<a href ng-click="setTab(1)"><i class="fa fa-bars" aria-hidden="true"></i>General</a>
					</li>
					<li ng-class="{ active: isSet(2) }">
					<a href ng-click="setTab(2)"><i class="fa fa-line-chart" aria-hidden="true"></i>Inventory</a>
					</li>
					<li ng-class="{ active: isSet(3) }">
					<a href ng-click="setTab(3)"><i class="fa fa-bus" aria-hidden="true"></i>Shipping</a>
					</li>
					<li ng-class="{ active: isSet(4) }">
					<a href ng-click="setTab(4)"><i class="fa fa-link" aria-hidden="true"></i>Linked Products</a>
					</li>
					<li ng-class="{ active: isSet(5) }">
					<a href ng-click="setTab(5)"><i class="fa fa-minus-square-o" aria-hidden="true"></i>Attributes</a>
					</li>
					<li ng-class="{ active: isSet(6) }">
					<a href ng-click="setTab(6)"><i class="fa fa-cog" aria-hidden="true"></i>Advanced</a>
					</li>
					</ul>
				   </div>
				  <!-- <div class="second-box" ng-if="product.pro_datatype_id == '2'">
					<ul class="nav nav-pills nav-stacked">
					<li ng-class="{ active: isSet(2) }">
					<a href ng-click="setTab(2)"><i class="fa fa-line-chart" aria-hidden="true"></i>Inventory</a>
					</li>
				       <li ng-class="{ active: isSet(4) }">
					<a href ng-click="setTab(4)"><i class="fa fa-link" aria-hidden="true"></i>Linked Products</a>
					</li>
					<li ng-class="{ active: isSet(5) }">
					<a href ng-click="setTab(5)"><i class="fa fa-minus-square-o" aria-hidden="true"></i>Attributes</a>
					</li>
					<li ng-class="{ active: isSet(6) }">
					<a href ng-click="setTab(6)"><i class="fa fa-cog" aria-hidden="true"></i>Advanced</a>
					</li>
					</ul>
				   </div>
				   <div class="third-box" ng-if="product.pro_datatype_id == '3'">
					<ul class="nav nav-pills nav-stacked">
					<li ng-class="{ active: isSet(1) }">
					<a href ng-click="setTab(1)"><i class="fa fa-bars" aria-hidden="true"></i>General</a>
					</li>
					<li ng-class="{ active: isSet(4) }">
					<a href ng-click="setTab(4)"><i class="fa fa-link" aria-hidden="true"></i>Linked Products</a>
					</li>
					<li ng-class="{ active: isSet(5) }">
					<a href ng-click="setTab(5)"><i class="fa fa-minus-square-o" aria-hidden="true"></i>Attributes</a>
					</li>
					<li ng-class="{ active: isSet(6) }">
					<a href ng-click="setTab(6)"><i class="fa fa-cog" aria-hidden="true"></i>Advanced</a>
					</li>
					</ul>
				   </div>-->
				   <div class="third-box" ng-if="product.pro_datatype_id == '2'">
					<ul class="nav nav-pills nav-stacked tabb">
					<li ng-class="{ active: isSet(1) }">
					<a href ng-click="setTab(1)"><i class="fa fa-bars" aria-hidden="true"></i>General</a>
					</li>
					<!--<li ng-class="{ active: isSet(2) }">
					<a href ng-click="setTab(2)"><i class="fa fa-line-chart" aria-hidden="true"></i>Inventory</a>
					</li>-->
					<li ng-class="{ active: isSet(3) }">
					<a href ng-click="setTab(3)"><i class="fa fa-bus" aria-hidden="true"></i>Shipping</a>
					</li>
					<li ng-class="{ active: isSet(4) }">
					<a href ng-click="setTab(4)"><i class="fa fa-link" aria-hidden="true"></i>Linked Products</a>
					</li>
					<li ng-class="{ active: isSet(5) }">
					<a href ng-click="setTab(5)"><i class="fa fa-minus-square-o" aria-hidden="true"></i>Attributes</a>
					</li>
					<li ng-class="{ active: isSet(6) }">
					<a href ng-click="setTab(6)"><i class="fa fa-cog" aria-hidden="true"></i>Advanced</a>
					</li>
					<li ng-class="{ active: isSet(7) }">
					<a href ng-click="setTab(7)"><i class="fa fa-minus-square-o" aria-hidden="true"></i>Variations</a>
					</li>
					</ul>
				   </div>
			     </div>
			     <div class="col-md-8">
				   <div class="jumbotron">
					 <div ng-show="isSet(1)">
					     <div class="form-group" ng-if="product.pro_datatype_id != '2'">
					     <label for="exampleInputEmail1">SKU</label>
					     <input type="text" placeholder="" class="form-control" value="" id="sku" name="sku" ng-model="product.sku">
					     </div>
					     <div class="form-group" ng-if="product.pro_datatype_id != '2'">
					     <label for="exampleInputEmail1">Regular Price (Rs.)</label>
					     <!--<input type="text" placeholder="" value="" id="regular_price" name="regular_price">-->
					     <input type="text" class="form-control" id="" name="price" placeholder="Price" ng-model="product.price">
					     </div>
					     <div class="form-group" ng-if="product.pro_datatype_id != '2'">
					     <label for="exampleInputEmail1">Sale Price (Rs.)</label>
					     <input type="text" placeholder="" class="form-control" value="" id="sale_price" name="sale_price" ng-model="product.sale_price">
					     </div>
					     <div class="form-group" ng-if="product.pro_datatype_id != '2'">
					     <label for="exampleInputEmail1">Sale Price Dates From</label>
					    <!-- <input type="text" placeholder="YYYY-MM-DD" class="form-control" id="date_from" name="date_from"  ng-model="product.date_from">-->
					  <ng-datepicker  class="hasDatepicker" view-format="Do MMMM YYYY" ng-model="product.date_from" first-week-day-sunday="true" placeholder="Pick a date">
                                           </ng-datepicker>
					     </div>
					     <div class="form-group" ng-if="product.pro_datatype_id != '2'">
					     <label for="exampleInputEmail1">Sale Price Dates To</label>
			<!--		     <input type="text" placeholder="YYYY-MM-DD" class="form-control" id="date_to" name="date_to" ng-model="product.date_to">-->
			                    <ng-datepicker  class="hasDatepicker" view-format="Do MMMM YYYY" ng-model="product.date_to" first-week-day-sunday="true" placeholder="Pick a date">
                                           </ng-datepicker>
					     </div>
					     <div class="form-group">
					     <label for="exampleInputEmail1">Warranty</label>
					     <input type="text" placeholder="" class="form-control" value="" id="warranty" name="warranty" ng-model="product.warranty">
					     </div>
					     <div class="form-group">
					     <label for="exampleInputEmail1">Return Policy</label>
					     <textarea cols="20" rows="2" class="form-control" placeholder="Return Policy" id="" name="return_policy" ng-model="product.return_policy"></textarea>
					     </div>
					     <div class="form-group">
					     <label for="exampleInputEmail1">Youtube Link</label>
					     <textarea cols="20" rows="2" class="form-control" placeholder="Youtube Link for multiple enter in new line" id="video" name="video" ng-model="product.video"></textarea>
					     </div>
					 </div>
					 <div ng-show="isSet(2)">
					<!-- <div class="form-group">
					     <label for="exampleInputEmail1">Manage stock?</label>
					     <input type="checkbox" name=""> Enable stock management at product level
					     </div>-->
					 <div class="form-group">
					     <label for="exampleInputEmail1">Stock status</label> 
					     <select class="form-control" ng-model="product.stock_status">
						  <option value="In Stock" ng-selected="product.stock_status=='In Stock'">In stock</option>
						  <option value="Out of Stock" ng-selected="product.stock_status=='Out of Stock'">Out of stock</option>
					     </select>
					     </div>
					   <div class="form-group">
					     <label for="exampleInputEmail1">No. of Stocks</label>
					     <input type="text" class="form-control" id="" name="no_stock" placeholder="No. of Stocks" ng-model="product.no_stock">
					     <div class="help-block"></div>
					   </div>
					 <!--<div class="form-group">
					     <label for="exampleInputEmail1">Sold Individually</label>
					     <input type="checkbox" name=""> Enable this to only allow one of this item to be bought in a single order
					     </div>-->
					 </div>
					 <div ng-show="isSet(3)">
					 <div class="form-group">
					     <label for="exampleInputEmail1">Weight(kg)</label>
					     <input type="text" class="form-control" placeholder="0" name="weight" ng-model="product.weight">
					     </div>
					 <div class="form-group">
					     <label for="exampleInputEmail1">Dimensions (cm)</label>
                                         </div>
                                         <div class="form-group">
					     <input type="text" placeholder="Length" name="length" class="form-control" ng-model="product.length">
					 </div>
                                         <div class="form-group">
                                             <input type="text" placeholder="Width" name="width" class="form-control" ng-model="product.width">
                                         </div>
                                          <div class="form-group">  
                                             <input type="text" placeholder="Height" name="height" class="form-control" ng-model="product.height">
					  </div>   
					 <!--<div class="form-group">
					     <label for="exampleInputEmail1">Shipping class</label>
					     <select class="form-control">
						  <option value="no_shipping">No shipping class</option>
					     </select>
					     </div>-->
					 </div>
					 <div ng-show="isSet(4)">
					 <div class="form-group">
					     <label for="exampleInputEmail1">Up-sells</label>
					    
					     <input id="" class="form-control" ng-model="product.upsellls_hint" placeholder="Search Product" 
                                              ng-focus="getProduct(product.upsellls_hint,'upsell');" ng-keyup="getProduct(product.upsellls_hint,'upsell');" type="text">
					     <ul class="pro-ul" ng-show="msg_upsell"><li><%msg_upsell%></li></ul>
                                                <ul class="pro-ul" ng-show="upsell_pro">
                                                      <li ng-repeat="pro in upsell_pro" ng-click="upselItem(pro);"><%pro.pro_name%></li>
                                                </ul>
                                             <span class="select2 select2-container select2-container--default select2-container--below select2-container--focus" dir="ltr" style="width: 100%;">
                                                 <span class="selection">
                                                     <span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1">
                                                        <ul class="select2-selection__rendered">
                                                              <li class="select2-selection__choice" ng-repeat="item in up_sell"><%item.pro_name%> <span ng-click="remove_up_sell($index)" style="cursor:pointer">x</span></li>
                                                        </ul>
                                                </span>
                                              </span>
                                              
                                             </span>
                                         </div>
                                              <div class="form-group">
					     <label for="exampleInputEmail1">Cross-sells</label>
					    
					     <input id="" class="form-control" ng-model="product.crosssells_hint" placeholder="Search Product" 
                                              ng-focus="getProduct(product.crosssells_hint,'cross');" ng-keyup="getProduct(product.crosssells_hint,'cross');" type="text">
					     <ul class="pro-ul" ng-show="msg_cross"><li><%msg_cross%></li></ul>
                                                <ul class="pro-ul" ng-show="crosssell_pro">
                                                      <li ng-repeat="pro in crosssell_pro" ng-click="crossItem(pro);"><%pro.pro_name%></li>
                                                </ul>
                                             <span class="select2 select2-container select2-container--default select2-container--below select2-container--focus" dir="ltr" style="width: 100%;">
                                                 <span class="selection">
                                                     <span class="select2-selection select2-selection--multiple" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="-1">
                                                        <ul class="select2-selection__rendered">
                                                              <li class="select2-selection__choice" ng-repeat="item in cross_sell"><%item.pro_name%> <span ng-click="remove_cross_sell($index)" style="cursor:pointer">x</span></li>
                                                        </ul>
                                                </span>
                                              </span>
                                              
                                             </span>
                                         </div>
                                         </div>
					 <div ng-show="isSet(5)">
					 <div class="form-group">
					     <label for="exampleInputEmail1">Custom Product option</label>
					     <!--<select class="form-control" name="pro_opt_name_id" ng-model="product.pro_opt_name_id"  ng-change="GetSelectedOptions(product.pro_opt_name_id)">
						<option ng-repeat="opnam in options" ng-value="opnam.id" ng-selected="opnam.id==product.pro_opt_name_id" value="<%opnam.id%>"><% opnam.option_name %></option>
					     </select>-->
                                            
                                            
<!--                                             <select class="form-control" name="pro_opt_name_id" ng-model="sel_attr_gr"  ng-change="">
						<option ng-repeat="atr in attr_gr" ng-value="atr.id" value="<%atr.id%>"><% atr.option_name %></option>
					     </select>-->
                                         </div>
                                         <div class="form-group">
                                             <span ng-if="options.length==0" style="color:#a94442">Please select category first</span>
					     <select class="form-control" name="pro_opt_name_id" ng-model="product.pro_opt_name_id"  ng-change="">
                                                 <option ng-value="" value="">Please select attributes</option>
						<option ng-repeat="opnam in options" ng-if="check_exist(opnam.id)" ng-value="opnam.id" ng-selected="opnam.id==product.pro_opt_name_id" value="<%opnam.id%>"><% opnam.option_name %></option>
					     </select>
                                         </div>
                                          <div class="form-group">   
					     <button ng-click="addData(product.pro_opt_name_id);product.pro_opt_name_id=''" type="submit" class="btn btn-primary">Add</button>
					  </div>
                                          
                                             <div class="form-group" ng-repeat="newvalue in optval" ng-if="idarr.indexOf(newvalue.parent_name.id)!=-1">
					    <% newvalue.parent_name.option_name %>
					     <select class="form-control" name="pro_opt_values_id" ng-model="product.pro_opt_values_id[newvalue.optid]" multiple>
						<option ng-repeat="opv in newvalue.all" ng-value="opv.id"  value="<%opv.id%>"><% opv.option_name %></option>
					     </select>
					     <div ng-if="product.pro_datatype_id == '2' && product.pro_opt_values_id[newvalue.optid].length > 0"><input type="checkbox" name="variation_status" ng-model="product.variation_status[newvalue.optid]" ng-true-value="'1'" ng-false-value="'0'"  ng-click="getMainCat(product.variation_status,product.pro_opt_values_id)"> Used for variations</div>
					     <a href="javascript:void(0);" ng-click="removeData($index);">Remove</a>
					 </div>
					 <div class="form-group" ng-repeat="opt_rad in optval_radio" ng-if="idarr.indexOf(opt_rad.parent_name.id)!=-1">
				    
					        <% opt_rad.parent_name.option_name %>
                                             <div ng-repeat="oprad in opt_rad.all" ng-if="check_exist(oprad.id)">
                                                 <input type="radio"  name="attr_option<%opt_rad.parent_name.id%>" ng-model="product.pro_opt_values_id[opt_rad.optid][0]" ng-value="oprad.id"> <%oprad.option_name%>
                                             </div>
					     <a href="javascript:void(0);" ng-click="removeRadio($index);">Remove</a>
					 </div>
					 <!--<div class="form-group">
					 <select class="form-control" name="pro_opt_values_id" ng-model="product.pro_opt_values_id" multiple>
						<option ng-repeat="opv in optionvalues" ng-value="opv.id" ng-selected="opv.id==product.pro_opt_values_id" value="<%opv.id%>"><% opv.option_name %></option>
					     </select>
					  </div>-->
					 </div>
					 <div ng-show="isSet(6)">
					 <!--<div class="form-group">
					     <label for="exampleInputEmail1">Purchase Note</label>
					     <textarea cols="20" rows="2" placeholder="" id="" name="" class="form-control"></textarea>
					  </div>
					 <div class="form-group">
					     <label for="exampleInputEmail1">Menu Order</label>
					     <input type="number" class="form-control" step="1" placeholder="" value="0" id="menu_order" name="menu_order" style="" class="short">
					 </div>-->
					 <div class="form-group">
					     <label for="exampleInputEmail1">Enable reviews</label>
					     <input type="checkbox" name="" ng-false-value='0' ng-true-value='0'  ng-init='product.review=0' ng-model="product.review">
					 </div>
					 </div>
					
				         <div ng-show="isSet(7)">
					     <div class="form-group" ng-show="product.variation_status">
						  <select class="form-control" name="add_variation" ng-model="product.add_variation">
						       <option ng-repeat="mop in main_option" value="<% mop.main.id %>" ng-value="<% mop.main.id %>" ng-selected="mop.main.id==product.add_variation"><% mop.main.name %></option>
						       <option value="all_vari" ng-if="main_option.length > 0" ng-selected="'all_vari'==product.add_variation">Create Variations all Attributes</option>
						  </select>
                                             </div>
                                             <div class="form-group" >
						  <button class="btn btn-default" ng-click="addVariation(product.variation_status,product.pro_opt_values_id,product.add_variation)">Go</button>
					     </div>
						<div ng-repeat="vari in variations" ng-init="idd=$index"> 
						       <select name="vari_name[]" ng-repeat="varr in vari.variations" ng-model="product.vari_name[idd][varr.main.id]">
							    
							   <!-- <option value="<% varr.main.id %>"><% varr.main.name %></option>-->
							   <optgroup label="<% varr.main.name %>">
							    <option ng-repeat="subcat in varr.sub" value="<% subcat.id %>"><% subcat.option_name %></option>
							   </optgroup>
							    
						       </select>
				
						       
						       <!-- Default box -->
					     <div class="box">
					       <div class="box-header with-border">
						 <h3 class="box-title">Expand</h3>
				       
						 <div class="box-tools pull-right">
						   <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">Expand</button>
						 </div>
					       </div>
					       <div class="box-body">
						 <div class="variation-field">
							   <div class="form-group">
								 <label for="exampleInputEmail1">Sku</label>
								 <input type="text" class="form-control" id="" name="vari_sku" placeholder="SKU" ng-init="product.vari_sku[idd]=''" ng-model="product.vari_sku[idd]">
								 <div class="help-block"></div>
							   </div>
							   <div class="form-group">
								 <label for="exampleInputEmail1">Price</label>
								 <input type="text" class="form-control" id="" name="vari_price" placeholder="Price" ng-init="product.vari_price[idd]=''" ng-model="product.vari_price[idd]">
								 <div class="help-block"></div>
							   </div>
							   <div class="form-group">
								 <label for="exampleInputEmail1">Sale Price</label>
								 <input type="text" class="form-control" id="" name="vari_sale_price" placeholder="Sale Price" ng-init="product.vari_sale_price[idd]=''" ng-model="product.vari_sale_price[idd]">
								 <div class="help-block"></div>
							   </div>
							   <div class="form-group">
								 <label for="exampleInputEmail1">No Of Stock</label>
								 <input type="text" class="form-control" id="" name="vari_stock" placeholder="Stock" ng-init="product.vari_stock[idd]=''" ng-model="product.vari_stock[idd]">
								 <div class="help-block"></div>
							   </div> 
						       </div>
					       </div>
					     </div>
					     <!-- /.box -->
						  
						       <a href="javascript:void(0)" ng-click="removeVariation($index,product.vari_sku,product.vari_price,product.vari_sale_price,product.vari_stock);">Remove</a>
						  </div>
						
					 </div>
				   </div>
			     </div>
			 </div>
		      </div>
		    </div>
                   <!-- /.box -->
		  
		   <!-- Default box -->
		    <div class="box">
		      <div class="box-header with-border">
			<h3 class="box-title">Product Feature Description</h3>
			<div class="box-tools pull-right">
			  <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
			    <i class="fa fa-minus"></i></button>
			</div>
		      </div>
		      <div class="box-body">
		      <div class="form-group">
		      <label for="exampleInputEmail1">Product Feature Description</label>
		      <div text-angular ng-model="product.pro_feature_des" name="pro_feature_des" ta-text-editor-class="border-around" ta-html-editor-class="border-around"></div>
		      <div class="help-block"></div>
		    </div>
		      </div>
		    </div>
                  
	       </div>
	       <div class="col-xs-3">
		    <div class="row">
		      <div class="col-xs-12">
			 <!-- Default box -->
		    <div class="box">
		      <div class="box-header with-border">
			<h3 class="box-title">Status</h3>
			<div class="box-tools pull-right">
			  <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
			    <i class="fa fa-minus"></i></button>
			</div>
		      </div>
		      <div class="box-body">
			<p class="text-muted">
			 <div class="misc-pub-section misc-pub-post-status"><label>Status:</label>
			 <span id="status-display"><label for="exampleInputEmail1"><% product.status  %></label></span>
			 <a href="javascript:void(0);" class="edit-status" ng-click="myFunc4()"><span aria-hidden="true">Edit</span></a>
			 
			 <div id="status-select" class="" ng-show="showMe4">
			
			<select name="status" ng-init="product.status='Active'" ng-model="product.status" id="status">
                            <option value="Pending">Pending Review</option>
                            <option value="Inactive">Inactive</option>
                            <option value="Active">Active</option>
			 </select>
			  <a href="javascript:void(0);"  ng-click="myFunc4()" class="btn btn-default new-btn">OK</a>
			  
			 </div>
			 
			 <div class="checkbox">
			 <input type="checkbox"  ng-init="product.feature=0"  ng-true-value='1' ng-false-value='0' ng-model="product.feature"><b> Featured this Product</b>
			 </div>
			</p>
		      </div>
		     
		    </div>
		    </div>
                   <!-- /.box -->
		      </div>
		    <div class="col-xs-12">
			 <!-- Default box -->
			 <div class="box">
			 <div class="box-header with-border">
			 <h3 class="box-title">Product Tags</h3>
			 <div class="box-tools pull-right">
			 <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
			 <i class="fa fa-minus"></i></button>
			 </div>
			 </div>
			 <div class="box-body">
			 <div class="form-group">
			 <input type="text" class="form-control" id="" name="pro_tags" placeholder="Product Tags" ng-model="product.pro_tags">
			 <div class="help-block"></div>
			 </div>
			 <input class="button tagadd btn btn-primary" ng-init="product.pro_tags=''" value="Add" type="button" ng-click="addTags(product.pro_tags); product.pro_tags=''">
			 <div class="tagchecklist" ng-repeat="tg in tags"> 
			      <span><a id="product_tag-check-num-0" class="ntdelbutton" tabindex="0" ng-click="removeTags($index);"><i class="fa fa-times-circle"></i></a><% tg.tag %></span>
			 </div>
			 </div>
			 </div>
			 <!-- /.box -->
		    </div>
		      <div class="col-xs-12">
			 <!-- Default box -->
		    <div class="box">
		      <div class="box-header with-border">
			<h3 class="box-title">Product Categories</h3>
			<div class="box-tools pull-right">
			  <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
			    <i class="fa fa-minus"></i></button>
			</div>
		      </div>
		         <div class="box-body">
			      <label for="exampleInputEmail1">Product Categories</label>
			      <div class="form-group">
			      <input type="text" placeholder="Filter Categories" class="form-control" ng-model="test">
			      </div>
			      <div class="frm-cat">
			      <script type="text/ng-template" id="categoryTree1">
			      <input type="checkbox" ng-click="attribute_gr_add(product.pro_category_id);" ng-model="product.pro_category_id[category.id]" value="<%category.id%>" name="pro_category_id[]" ><% category.category_name %>
			      <ul ng-if="category.all_category">
			      <li class="cat-tree" ng-repeat="category in category.all_category | filter:test" ng-include="'categoryTree1'">           
			      </li>
			      </ul>
			      </script>
			      <ul class="ul-cat">
			      <li class="cat-tree" ng-repeat="category in all_category | filter:test" ng-include="'categoryTree1'"></li>
			      </ul> 
			      </div>
			 </div>
		      </div>
                   <!-- /.box -->
		      </div>
		      <div class="col-xs-12">
			 <!-- Default box -->
			 <div class="box">
			 <div class="box-header with-border">
			 <h3 class="box-title">Images</h3>
			 <div class="box-tools pull-right">
			 <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
			 <i class="fa fa-minus"></i></button>
			 </div>
			 </div>
			 <div class="box-body">
			      <div class="form-img-chk">
				   <div class="imgs_ro" ng-repeat="val in pr_imgs">               
				   <img src="{{URL::asset('uploads')}}/<% val.img %>"  alt="" ng-mouseleave="tr_dis[$index]=0" ng-mouseover="tr_dis[$index]=1"/>
				   <a class="ms_ov" href="javascript:void(0);" ng-if="$index != values.length - 1" ng-mouseleave="tr_dis[$index]=0" ng-mouseover="tr_dis[$index]=1" ng-show="tr_dis[$index]==1" >
				   <i class="fa fa-check" title="Set default" ng-show="val.def==0"  ng-click="setdefault($index)"></i>
				   <i class="fa fa-check grr_ic"  title="Unset default"  ng-show="val.def==1"  ng-click="unsetdefault($index)"></i>
				   <i class="fa fa-trash" title="Delete"  ng-click="removeimgs(val.img,$index)" ></i>
				   </a>
				   </div>
			           <div style="clear:both"></div>
				   <div class="btn btn-primary btn-file" ng-show="pr_imgs.length < 8">
				   <i class="fa fa-plus"></i> <input type="file" onchange="angular.element(this).scope().uploadedFile(this)" class="image-file">
				   </div>
			      </div>
			 </div>
			 </div>
			 <!-- /.box -->
		      </div>
		      <div class="col-xs-12">
			 <!-- Default box -->
			 <div class="box">
			 <div class="box-header with-border">
			 <h3 class="box-title">Product Brands</h3>
			 <div class="box-tools pull-right">
			 <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
			 <i class="fa fa-minus"></i></button>
			 </div>
			 </div>
			 <div class="box-body">
			      <div class="form-group">
			      <input type="text" placeholder="Filter Brands" class="form-control" ng-model="brd">
			      </div>
			 <div class="frm-cat">
			      <span class="form-brd" ng-repeat="br in brands | filter : brd">
			       <input type="radio" id="" name="brand_id" ng-model="product.brand_id" ng-value="br.id"><%br.brand_name%><br>
			    </span>
			 </div>
			 </div>
			 </div>
			 <!-- /.box --> 
		      </div>
                  <div class="col-xs-12">
		       <!-- Default box -->
		    <div class="box">
		      <div class="box-header with-border">
			<h3 class="box-title">Sellers</h3>
			<div class="box-tools pull-right">
			  <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
			    <i class="fa fa-minus"></i></button>
			</div>
		      </div>
		      <div class="box-body">
			<div class="form-group">
		      <label for="exampleInputEmail1">Sellers</label>
		       <select class="form-control" id="" name="seller_id" placeholder="Sellers" ng-model="product.seller_id">
			<option value="">Select Seller</option>
			<option ng-repeat="ss in sellers" ng-value="ss.id" ng-selected="ss.id==product.seller_id"><%ss.fname%></option> 
		       </select>
		      <div class="help-block"></div>
		    </div>
		      </div>
		    </div>
                  
                   <!-- /.box -->
                   </div>
		      <div class="col-xs-12" ng-if="product.pro_datatype_id == '2' && main_option.length==2">
			 <!-- Default box -->
			 <div class="box">
			 <div class="box-header with-border">
			 <h3 class="box-title">Bulk Variation Input</h3>
			 
			 <div class="box-tools pull-right">
			 <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
			 <i class="fa fa-minus"></i></button>
			 </div>
			 </div>
			 <div class="box-body">
			      <div class="form-group">
				  <label for="exampleInputEmail1">View:</label>
                                  <select ng-init="product.bulk_view='0'" ng-model="product.bulk_view">
				   <option value="0">Disabled</option>
				   <option value="1">Enabled</option>
				  </select>
			      </div>
			      <div class="form-group">
				  <label for="exampleInputEmail1">Columns:</label>
				  <select ng-init="product.col_bulk=''"  ng-model="product.col_bulk">
				   <option value="">Select Variations Attribute</option>
				   <option ng-repeat="mn_opt in main_option" value="<% mn_opt.main.id %>"><% mn_opt.main.name %></option>
				  </select>
			      </div>
			      <div class="form-group">
				  <label for="exampleInputEmail1">Rows:</label>
				  <select  ng-init="product.row_bulk=''"  ng-model="product.row_bulk">
				   <option value="">Select Variations Attribute</option>
				   <option ng-repeat="mn_opt in main_option" value="<% mn_opt.main.id %>"><% mn_opt.main.name %></option>
				  </select>
			      </div>
				  
			 </div> 
			 <!-- /.box-body -->
			 </div>
			 <!-- /.box -->
		      </div>
		    </div> 
	       </div>
		 </div>
              <!-- /.box-body -->

              <div class="box-footer">
                <button ng-click="store(product,pr_imgs,tags,up_sell,cross_sell)" type="submit" class="btn btn-primary">Submit</button>
              </div>
            
          </div>
        
          <!-- /.box -->
         <!-- general form elements -->
          <div class="box box-primary" ng-if="page=='edit'">
	   
            <div class="box-header with-border">
                <h3 class="box-title"><i class="fa fa-edit"></i> Edit Product</h3>
                 <div class="pull-right"> <a href="javascript:void(0)" ng-click="init()" class="btn btn-default">Back</a></div>
            </div>
            <!-- /.box-header -->
            <!-- form start -->
             <input type="hidden" class="form-control" id="" name="id" ng-model="product.id" placeholder="ID" value="<% product.id %>">
              <div class="box-body">
		<div class="col-xs-9"> 	 
                <div class="form-group">
                  <label for="exampleInputEmail1">Product Name</label>
                  <input type="text" class="form-control" id="" name="pro_name" placeholder="Product Name" ng-model="product.pro_name">
		  <div class="help-block"></div>
                </div>
		<!-- Default box -->
		    <div class="box">
		      <div class="box-header with-border">
			<h3 class="box-title">Product Description</h3>
			<div class="box-tools pull-right">
			  <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
			    <i class="fa fa-minus"></i></button>
			</div>
		      </div>
		      <div class="box-body">
			<div class="form-group">
			 <label for="exampleInputEmail1">Product Description</label>
			     <div text-angular ng-model="product.pro_des" name="pro_des" ta-text-editor-class="border-around" ta-html-editor-class="border-around"></div>
			     <div class="help-block"></div>
			</div>
		      </div>
		    </div>
                   <!-- /.box -->
		   
		   <!-- Default box -->
		    <div class="box">
		      <div class="box-header with-border">
			<h3 class="box-title">Meta Title and Description</h3>
			<div class="box-tools pull-right">
			  <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
			    <i class="fa fa-minus"></i></button>
			</div>
		      </div>
		      <div class="box-body">
			<div class="form-group">
		      <label for="exampleInputEmail1">Meta Title</label>
		      <input type="text" class="form-control" id="" name="meta_title" maxlength="100" placeholder="Meta Title" ng-model="product.meta_title">
		      <div class="help-block"></div>
                     <span>Characters left: <% 100 - product.meta_title.length %></span>
		    </div>
		    <div class="form-group">
		      <label for="exampleInputEmail1">Meta Description</label>
		      <input type="text" class="form-control" id="" name="meta_description" maxlength="200" placeholder="Meta Description" ng-model="product.meta_description">
		      <div class="help-block"></div>
		      <span>Characters left: <% 200 - product.meta_description.length %></span>
		    </div>
		    <div class="form-group">
		      <label for="exampleInputEmail1">Meta Keywords</label>
		      <input type="text" class="form-control" id="" name="meta_keywords" maxlength="30" placeholder="Meta Keywords" ng-model="product.meta_keywords">
		      <div class="help-block"></div>
		      <span>Characters left: <% 30 - product.meta_keywords.length %></span>
		    </div>
		      </div>
		    </div>
                   <!-- /.box -->
		<!--<div class="form-group">
                  <label for="exampleInputEmail1">Product Description</label>
                  <div text-angular ng-model="product.pro_des" name="pro_des" ta-text-editor-class="border-around" ta-html-editor-class="border-around"></div>
		  <div class="help-block"></div>
                </div>-->
		<div class="form-group">
                  <label for="exampleInputEmail1">Product Short Description</label>
                  <div text-angular ng-model="product.pro_short_des" name="pro_short_des" ta-text-editor-class="border-around" ta-html-editor-class="border-around"></div>
		  <div class="help-block"></div>
                </div>
		<!-- Default box -->
		    <div class="box">
		      <div class="box-header with-border">
			<h3 class="box-title">Product Data-</h3>
			<select name="pro_data_type" ng-model="product.pro_datatype_id" ng-init="product.pro_datatype_id=1">
			 <optgroup label="Product Type">
			 <option ng-repeat="dt in datatyps" ng-value="dt.id" ng-selected="dt.id==product.pro_datatype_id" value="<%dt.id%>"><%dt.data_type%></option> 
			 </optgroup>
			</select> 
			<div class="box-tools pull-right">
			  <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
			    <i class="fa fa-minus"></i></button>
			</div>
		      </div>
		      <div class="box-body">
			<!--<label for="exampleInputEmail1">Product Data-</label>
			<select name="pro_data_type" ng-model="product.pro_datatype_id" ng-init="product.pro_datatype_id=1">
			 <optgroup label="Product Type">
			 <option ng-repeat="dt in datatyps" ng-value="dt.id" ng-selected="dt.id==product.pro_datatype_id" value="<%dt.id%>"><%dt.data_type%></option> 
			 </optgroup>
			</select>-->   
		    <!--<span title="Click to toggle" class="handlediv" ng-click="myFunc3()"><i class="fa fa-caret-down custom"></i></span>-->
			 <div class="col-xs-12 main--tab">
			     <div class="col-md-2">
				   <div class="first-box" ng-if="product.pro_datatype_id == '1'">
					<ul class="nav nav-pills nav-stacked">
					<li ng-class="{ active: isSet(1) }">
					<a href ng-click="setTab(1)"><i class="fa fa-bars" aria-hidden="true"></i>General</a>
					</li>
					<li ng-class="{ active: isSet(2) }">
					<a href ng-click="setTab(2)"><i class="fa fa-line-chart" aria-hidden="true"></i>Inventory</a>
					</li>
					<li ng-class="{ active: isSet(3) }">
					<a href ng-click="setTab(3)"><i class="fa fa-bus" aria-hidden="true"></i>Shipping</a>
					</li>
					<li ng-class="{ active: isSet(4) }">
					<a href ng-click="setTab(4)"><i class="fa fa-link" aria-hidden="true"></i>Linked Products</a>
					</li>
					<li ng-class="{ active: isSet(5) }">
					<a href ng-click="setTab(5)"><i class="fa fa-minus-square-o" aria-hidden="true"></i>Attributes</a>
					</li>
					<li ng-class="{ active: isSet(6) }">
					<a href ng-click="setTab(6)"><i class="fa fa-cog" aria-hidden="true"></i>Advanced</a>
					</li>
					</ul>
				   </div>
				   <div class="second-box" ng-if="product.pro_datatype_id == '2'">
					<ul class="nav nav-pills nav-stacked">
					<li ng-class="{ active: isSet(2) }">
					<a href ng-click="setTab(2)"><i class="fa fa-line-chart" aria-hidden="true"></i>Inventory</a>
					</li>
				       <li ng-class="{ active: isSet(4) }">
					<a href ng-click="setTab(4)"><i class="fa fa-link" aria-hidden="true"></i>Linked Products</a>
					</li>
					<li ng-class="{ active: isSet(5) }">
					<a href ng-click="setTab(5)"><i class="fa fa-minus-square-o" aria-hidden="true"></i>Attributes</a>
					</li>
					<li ng-class="{ active: isSet(6) }">
					<a href ng-click="setTab(6)"><i class="fa fa-cog" aria-hidden="true"></i>Advanced</a>
					</li>
					</ul>
				   </div>
				   <div class="third-box" ng-if="product.pro_datatype_id == '3'">
					<ul class="nav nav-pills nav-stacked">
					<li ng-class="{ active: isSet(1) }">
					<a href ng-click="setTab(1)"><i class="fa fa-bars" aria-hidden="true"></i>General</a>
					</li>
					<li ng-class="{ active: isSet(4) }">
					<a href ng-click="setTab(4)"><i class="fa fa-link" aria-hidden="true"></i>Linked Products</a>
					</li>
					<li ng-class="{ active: isSet(5) }">
					<a href ng-click="setTab(5)"><i class="fa fa-minus-square-o" aria-hidden="true"></i>Attributes</a>
					</li>
					<li ng-class="{ active: isSet(6) }">
					<a href ng-click="setTab(6)"><i class="fa fa-cog" aria-hidden="true"></i>Advanced</a>
					</li>
					</ul>
				   </div>
				   
				   <div class="third-box" ng-if="product.pro_datatype_id == '4'">
					<ul class="nav nav-pills nav-stacked">
					<li ng-class="{ active: isSet(1) }">
					<a href ng-click="setTab(1)"><i class="fa fa-bars" aria-hidden="true"></i>General</a>
					</li>
					<li ng-class="{ active: isSet(2) }">
					<a href ng-click="setTab(2)"><i class="fa fa-line-chart" aria-hidden="true"></i>Inventory</a>
					</li>
					<li ng-class="{ active: isSet(3) }">
					<a href ng-click="setTab(3)"><i class="fa fa-bus" aria-hidden="true"></i>Shipping</a>
					</li>
					<li ng-class="{ active: isSet(4) }">
					<a href ng-click="setTab(4)"><i class="fa fa-link" aria-hidden="true"></i>Linked Products</a>
					</li>
					<li ng-class="{ active: isSet(5) }">
					<a href ng-click="setTab(5)"><i class="fa fa-minus-square-o" aria-hidden="true"></i>Attributes</a>
					</li>
					<li ng-class="{ active: isSet(6) }">
					<a href ng-click="setTab(6)"><i class="fa fa-cog" aria-hidden="true"></i>Advanced</a>
					</li>
					</ul>
				   </div>
			     </div>
			     <div class="col-md-8">
				   <div class="jumbotron">
					 <div ng-show="isSet(1)">
					     <div class="form-group">
					     <label for="exampleInputEmail1">SKU</label>
					     <input type="text" placeholder="" class="form-control" value="" id="sku" name="sku" ng-model="product.sku">
					     </div>
					     <div class="form-group">
					     <label for="exampleInputEmail1">Regular Price (Rs.)</label>
					     <input type="text" class="form-control" id="" name="price" placeholder="Price" ng-model="product.price">
					     </div>
					     <div class="form-group">
					     <label for="exampleInputEmail1">Sale Price (Rs.)</label>
					     <input type="text" placeholder="" class="form-control" id="" name="sale_price" ng-model="product.sale_price">
					     </div>
					     <div class="form-group">
					     <label for="exampleInputEmail1">Sale Price Dates From</label>
		<!--			     <input type="text" placeholder="YYYY-MM-DD" class="form-control" id="date_from" name="date_from" ng-model="product.date_from">-->             <ng-datepicker  class="hasDatepicker" view-format="Do MMMM YYYY"  ng-model="product.date_from" first-week-day-sunday="true" placeholder="Pick a date">
                                           </ng-datepicker>
					     </div>
					     <div class="form-group">
					     <label for="exampleInputEmail1">Sale Price Dates To</label>
			<!--		     <input type="text" placeholder="YYYY-MM-DD" class="form-control" id="date_to" name="date_to" ng-model="product.date_to">-->               <ng-datepicker  class="hasDatepicker" view-format="Do MMMM YYYY"  ng-model="product.date_to" first-week-day-sunday="true" placeholder="Pick a date">
                                           </ng-datepicker>
					     </div>
					     <div class="form-group">
					     <label for="exampleInputEmail1">Youtube Link</label>
					     <textarea cols="20" rows="2" class="form-control" placeholder="Youtube Link for multiple enter in new line" id="video" name="video" ng-model="product.video"></textarea>
					     </div>
					 </div>
					 <div ng-show="isSet(2)">
					 <!--<div class="form-group">
					     <label for="exampleInputEmail1">Manage stock?</label>
					     <input type="checkbox" name=""> Enable stock management at product level
					     </div>-->
					 <div class="form-group">
					     <label for="exampleInputEmail1">Stock status</label>
					     <select class="form-control" ng-model="product.stock_status">
						  <option value="In Stock" ng-selected="product.stock_status=='In Stock'">In stock</option>
						  <option value="Out of Stock" ng-selected="product.stock_status=='Out of Stock'">Out of stock</option>
					     </select>
					     </div>
					 
					  <div class="form-group">
					     <label for="exampleInputEmail1">No. of Stocks</label>
					     <input type="text" class="form-control" id="" name="no_stock" placeholder="No. of Stocks" ng-model="product.no_stock">
					     <div class="help-block"></div>
					   </div>
					 <!--<div class="form-group">
					     <label for="exampleInputEmail1">Sold Individually</label>
					     <input type="checkbox" name=""> Enable this to only allow one of this item to be bought in a single order
					     </div>-->
					 </div>
					 <div ng-show="isSet(3)">
					 <div class="form-group">
					     <label for="exampleInputEmail1">Weight(kg)</label>
					     <input type="text" class="form-control" placeholder="0" name="weight" ng-model="product.weight">
					     </div>
					 <div class="form-group">
					     <label for="exampleInputEmail1">Dimensions (cm)</label>
					     <input type="text" placeholder="Length" name="length" class="form-control" ng-model="product.length">
					     <input type="text" placeholder="Width" name="width" class="form-control" ng-model="product.width">
					     <input type="text" placeholder="Height" name="height" class="form-control" ng-model="product.height">
					     </div>
					 <!--<div class="form-group">
					     <label for="exampleInputEmail1">Shipping class</label>
					     <select class="form-control">
						  <option value="no_shipping">No shipping class</option>
					     </select>
					     </div>-->
					 </div>
					 <div ng-show="isSet(4)">
					 <h1>Messages4</h1>
					 <p> Some messages4 </p>
					 </div>
					 <div ng-show="isSet(5)">
					 <div class="form-group">
					     <label for="exampleInputEmail1">Custom Product option</label>
					     <!--<select class="form-control" name="pro_opt_name_id" ng-model="product.pro_opt_name_id"  ng-change="GetSelectedOptions(product.pro_opt_name_id)">
						<option ng-repeat="opnam in options" ng-value="opnam.id" ng-selected="opnam.id==product.pro_opt_name_id" value="<%opnam.id%>"><% opnam.option_name %></option>
					     </select>-->
					     <select class="form-control" name="pro_opt_name_id" ng-model="product.pro_opt_name_id"  ng-change="">
						<option ng-repeat="opnam in options" ng-if="check_exist(opnam.id)" ng-value="opnam.id" ng-selected="opnam.id==product.pro_opt_name_id" value="<%opnam.id%>"><% opnam.option_name %></option>
					     </select>
					     <button ng-click="addData(product.pro_opt_name_id);product.pro_opt_name_id=''" type="submit" class="btn btn-primary">Add</button>
					  </div>
					 <div class="form-group" ng-repeat="newvalue in optval" ng-init="product.pro_opt_values_id[newvalue.optid]=newvalue.opt_ids">
					  <% optval %>
					     <select class="form-control" name="pro_opt_values_id" ng-model="product.pro_opt_values_id[newvalue.optid]" multiple="multiple">
						<option ng-repeat="opv in newvalue.all" ng-value="opv.id" value="<%opv.id%>"><% opv.option_name %></option>
					     </select>
					     <a href="" ng-click="removeData($index);">Remove</a>
					 </div>
					 
<!--					<div class="form-group">
					 <select class="form-control" name="pro_opt_values_id" ng-model="product.pro_opt_values_id" multiple>
						<option ng-repeat="opv in optionvalues" ng-value="opv.id" ng-selected="opv.id==product.pro_opt_values_id" value="<%opv.id%>"><% opv.option_name %></option>
					     </select>
					  </div>-->
					 </div>
					 <div ng-show="isSet(6)">
					 <!--<div class="form-group">
					     <label for="exampleInputEmail1">Purchase Note</label>
					     <textarea cols="20" rows="2" placeholder="" id="" name="" class="form-control"></textarea>
					  </div>
					 <div class="form-group">
					     <label for="exampleInputEmail1">Menu Order</label>
					     <input type="number" class="form-control" step="1" placeholder="" value="0" id="menu_order" name="menu_order" style="" class="short">
					 </div>-->
					 <div class="form-group">
					     <label for="exampleInputEmail1">Enable reviews</label>
					     <input type="checkbox" name="">
					 </div>
					 </div>
					
				    </div>
			     </div>
			 </div>
		      </div>
		    </div>
                   <!-- /.box -->
		   
		   <!-- Default box -->
		    <div class="box">
		      <div class="box-header with-border">
			<h3 class="box-title">Sellers</h3>
			<div class="box-tools pull-right">
			  <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
			    <i class="fa fa-minus"></i></button>
			</div>
		      </div>
		      <div class="box-body">
			<div class="form-group">
		      <label for="exampleInputEmail1">Sellers</label>
		       <select class="form-control" id="" name="seller_id" placeholder="Sellers" ng-model="product.seller_id">
			<option value="">Select Seller</option>
			<option ng-repeat="ss in sellers" ng-value="ss.id" ng-selected="ss.id==product.seller_id"><%ss.fname%></option> 
		       </select>
		      <div class="help-block"></div>
		    </div>
		      </div>
		    </div>
                   <!-- /.box -->
		
		<!-- Default box -->
		    <div class="box">
		      <div class="box-header with-border">
			<h3 class="box-title">Product Feature Description</h3>
			<div class="box-tools pull-right">
			  <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
			    <i class="fa fa-minus"></i></button>
			</div>
		      </div>
		      <div class="box-body">
		      <div class="form-group">
		      <label for="exampleInputEmail1">Product Feature Description</label>
		      <div text-angular ng-model="product.pro_feature_des" name="pro_feature_des" ta-text-editor-class="border-around" ta-html-editor-class="border-around"></div>
		      <div class="help-block"></div>
		    </div>
		      </div>
		    </div>
                   <!-- /.box -->
		
		<!--<div class="form-group">
                  <label for="exampleInputEmail1">No. of Stocks</label>
                  <input type="text" class="form-control" id="" name="no_stock" placeholder="No. of Stocks" ng-model="product.no_stock">
		  <div class="help-block"></div>
                </div>-->
		<div class="form-group">
                  <label for="exampleInputEmail1">Status</label>
                  <input type="radio"  id="" name="status"  ng-model="product.status" ng-checked="product.status=='Active'" value="Active" >Active
		  <input type="radio" id="" name="status"  ng-model="product.status" ng-checked="product.status=='Inactive'"  value="Inactive">Inactive 
		  <div class="help-block"></div>
                </div>
                  
	      </div>
	      <div class="col-xs-3">
		    <div class="row">
			<div class="col-xs-12">
			 <!-- Default box -->
		    <div class="box">
		      <div class="box-header with-border">
			<h3 class="box-title">Status</h3>
			<div class="box-tools pull-right">
			  <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
			    <i class="fa fa-minus"></i></button>
			</div>
		      </div>
		      <div class="box-body">
			<p class="text-muted">
			 <div class="misc-pub-section misc-pub-post-status"><label>Status:</label>
			 <span id="status-display"><label for="exampleInputEmail1">Active</label></span>
			 <a href="javascript:void(0);" class="edit-status" ng-click="myFunc4()"><span aria-hidden="true">Edit</span></a>
			 
			 <div id="status-select" class="" ng-show="showMe4">
			
                         <select name="status" ng-init="product.status='Active'" ng-model="product.status" id="status">
                            <option value="Pending">Pending Review</option>
                            <option value="Inactive">Inactive</option>
                            <option value="Active">Active</option>
			 </select>
			  <a href="#post_status" class="btn btn-default new-btn">OK</a>
			  <a href="#post_status" class="cancel-status hide-if-no-js button-cancel">Cancel</a>
			 </div>
			 
			 <div class="checkbox">
			 <input type="checkbox"><b> Featured this Product</b>
			 </div>
			</p>
		      </div>
		     
		    </div>
		    </div>
                   <!-- /.box -->
		      </div>
		    <div class="col-xs-12">
			 <!-- Default box -->
			 <div class="box">
			 <div class="box-header with-border">
			 <h3 class="box-title">Product Tags</h3>
			 <div class="box-tools pull-right">
			 <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
			 <i class="fa fa-minus"></i></button>
			 </div>
			 </div>
			 <div class="box-body">
			 <div class="form-group">
			 <input type="text" class="form-control" id="" name="pro_tags" placeholder="Product Tags" ng-model="product.pro_tags">
			 <div class="help-block"></div>
			 </div>
			 <input class="button tagadd btn btn-default" value="Add" type="button" ng-click="addTags(product.pro_tags); product.pro_tags=''">
			 <div class="tagchecklist" ng-repeat="tg in tags"> 
			      <span><a id="product_tag-check-num-0" class="ntdelbutton" tabindex="0" ng-click="removeTags($index);"><i class="fa fa-times-circle"></i></a><% tg.tag %></span>
			 </div>
			 </div>
			 </div>
			 <!-- /.box -->
		    </div> 
		      <div class="col-xs-12">
			 
			 <!-- Default box -->
			 <div class="box">
			 <div class="box-header with-border">
			 <h3 class="box-title">Product Categories</h3>
			 <div class="box-tools pull-right">
			 <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
			 <i class="fa fa-minus"></i></button>
			 </div>
			 </div>
			 <div class="box-body">
			 <div class="form-group">
			 <input type="text" placeholder="Filter Categories" class="form-control" ng-model="test">
			 </div>
			      <div class="frm-cat"> <% fruits %> 
			      <script type="text/ng-template" id="categoryTree">
			      <input type="checkbox" ng-model="product.pro_category_id[category.id]" value="<%category.id%>" name="pro_category_id[]" ><% category.category_name %>
			      <ul ng-if="category.all_category">
			      <li class="cat-tree" ng-repeat="category in category.all_category | filter:test" ng-include="'categoryTree'">           
			      </li>
			      </ul>
			      </script>
			      <ul class="ul-cat">
			      <li class="cat-tree" ng-repeat="category in all_category | filter:test" ng-include="'categoryTree'"></li>
			      </ul>
			      
			      </div>
			 </div>
			 </div>
			 <!-- /.box -->
		      </div>
		      <div class="col-xs-12">
			 
			 <!-- Default box -->
			 <div class="box">
			 <div class="box-header with-border">
			 <h3 class="box-title">Images</h3>
			 <div class="box-tools pull-right">
			 <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
			 <i class="fa fa-minus"></i></button>
			 </div>
			 </div>
			 <div class="box-body">
			      <div class="form-img-chk">
			      <div class="imgs_ro" ng-repeat="val in pr_imgs">               
			      <img src="{{URL::asset('uploads')}}/<% val.img %>"  alt="" ng-mouseleave="tr_dis[$index]=0" ng-mouseover="tr_dis[$index]=1"/>
			      <a class="ms_ov" href="javascript:void(0);" ng-if="$index != values.length - 1" ng-mouseleave="tr_dis[$index]=0" ng-mouseover="tr_dis[$index]=1" ng-show="tr_dis[$index]==1" >
			      <i class="fa fa-check" title="Set default" ng-show="val.def==0"  ng-click="setdefault($index)"></i>
			      <i class="fa fa-check grr_ic"  title="Unset default"  ng-show="val.def==1"  ng-click="unsetdefault($index)"></i>
			      <i class="fa fa-trash" title="Delete"  ng-click="removeimgs(val.img,$index)" ></i>
			      </a>
			      </div>
			      <div style="clear:both"></div>
			      <div class="btn btn-primary btn-file" ng-show="pr_imgs.length < 8">
			      <i class="fa fa-plus"></i> <input type="file" onchange="angular.element(this).scope().uploadedFile(this)" class="image-file">
			      </div>
			 </div>
			 </div>
			 </div>
			 <!-- /.box -->
		      </div>
		      <div class="col-xs-12">
			<!-- Default box -->
			 <div class="box">
			 <div class="box-header with-border">
			 <h3 class="box-title">Product Brands</h3>
			 <div class="box-tools pull-right">
			 <button type="button" class="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
			 <i class="fa fa-minus"></i></button>
			 </div>
			 </div>
			 <div class="box-body">
			      <div class="form-group">
			      <input type="text" placeholder="Filter Brands" class="form-control" ng-model="brd">
			      </div>
			 <div class="frm-cat">
			      <span class="form-brd" ng-repeat="br in brands | filter : brd">
			       <input type="radio" id="" name="brand_id" ng-model="product.brand_id" ng-value="br.id"><%br.brand_name%><br>
			    </span>
			 </div>
			 </div>
			 </div>
			 <!-- /.box --> 
		      </div>
		    </div>
	      </div>
	      </div>
              <!-- /.box-body -->

              <div class="box-footer">
                <button ng-click="update(product,pr_imgs,tags)" type="submit" class="btn btn-primary">Submit</button>
              </div>
          </div>

          <!-- Form Element sizes -->
    </section>
   
  <!-- /.content-wrapper -->
  