@extends('seller/layout')
@section('content')

   <div ng-if="loading" style="display: table;    margin: 0 auto;    margin-top: 100px; margin-bottom:0">
       <img src="{{URL::asset('seller/img')}}/loader.gif" alt="loader">
   </div>    
    <!-- Main content -->
 
    <div ng-view >
       
        
        
    </div>
 
    
  
  <!-- /.content-wrapper -->
@endsection	