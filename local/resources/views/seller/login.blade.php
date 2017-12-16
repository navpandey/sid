@extends('seller/auth_layout')
@section('content')
<div class="login-box-body">
    <p class="login-box-msg">Seller can sign in to start your session</p>
     
      <div class="form-group has-feedback">
        <input name="email" type="email" class="form-control" placeholder="Email" ng-model="email">
        <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
      </div>
      <div class="form-group has-feedback">
        <input name="password" type="password" class="form-control" placeholder="Password"   ng-model="password">
        <span class="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
      <div class="row">
       
        <!-- /.col -->
        <div class="col-xs-4">
          <button type="submit" class="btn btn-primary btn-block btn-flat"   ng-click="sign_in()">Sign In</button>
        </div>
        <!-- /.col -->
      </div>   



   
    <!-- /.social-auth-links -->

    <a href="#">I forgot my password</a><br>
    <a href="#" class="text-center">Register a new membership</a>

  </div>
	@endsection	