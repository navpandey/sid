<section class="content">       
    <div class="alert alert-success" ng-if="success_flash">
                <p>
                <% success_flash %>
                </p>
    </div>
    <div class="alert alert-danger"  ng-if="errors">
                <ul>
                    <li ng-repeat ="er in errors"><% er %></li>
                </ul>
    </div>
	   <div class="box">
       <div class="box-body" >    
            <div class="col-sm-12 main--tab">   
                <div class="col-sm-12">
                    <ul class="nav  nav-tabs inli-tab responsive">
                        <li ng-class="{ active: isSet(1) }">
                           <a href ng-click="setTab(1)">
                               All Orders</a>
                         </li>
                         <li ng-class="{ active: isSet(2) }">
                           <a href ng-click="setTab(2)">
                               Completed</a>
                         </li>
                         <li ng-class="{ active: isSet(3) }">
                           <a href ng-click="setTab(3)">
                               Processing</a>
                         </li>
						 <li ng-class="{ active: isSet(4) }">
                           <a href ng-click="setTab(4)">
                               Cancelled</a>
                         </li>
                     </ul>  
                </div>
                <div class="col-sm-12">
                    <div class="ordr">
                        <div ng-show="isSet(1)">
						  <div class="table-responsive">
							<table class="table table-bordered">
								<thead>
								  <tr>
									<th><input type="checkbox"/></th>
									<th>Date</th>
									<th>Order Info</th>
									<th>Order ID</th>
									<th>Customer Note</th>
									<th>Amount</th>
									<th>Delivery</th>
									<th>Assigned to</th>
									<th>Tracking</th>
									<th>Affiliate</th>
									<th>Seller</th>
									<th>Action</th>
								  </tr>
								</thead>
								<tbody>
								  <tr>
									<td><input type="checkbox"/></td>
									<td>Doe</td>
									<td>john@example.com</td>
									<td>john@example.com</td>
									<td>john@example.com</td>
									<td>john@example.com</td>
									<td>john@example.com</td>
									<td>john@example.com</td>
									<td>john@example.com</td>
									<td>john@example.com</td>
									<td>john@example.com</td>
									<td>john@example.com</td>
								  </tr>
								</tbody>
						  </table>
						 </div> 
                       </div>
                        <div ng-show="isSet(2)">
                         two
                       </div>
                        <div ng-show="isSet(3)">
                         three
                       </div>
					    <div ng-show="isSet(4)">
                         four
                       </div>
                    </div>   
                </div>
            </div>   
        </div>   
               
      </div>
 </section>     