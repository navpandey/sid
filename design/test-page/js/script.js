// Code goes here

var app = angular.module('myApp', ['ngMaterial', 'jkAngularCarousel', 'angularLazyImg']);

app.config(['lazyImgConfigProvider', function(lazyImgConfigProvider){
    var scrollable = document.querySelector('#scrollable');
    lazyImgConfigProvider.setOptions({
      offset: 100, // how early you want to load image (default = 100)
      errorClass: 'error', // in case of loading image failure what class should be added (default = null)
      successClass: 'success', // in case of loading image success what class should be added (default = null)
      onError: function(image){}, // function fired on loading error
      onSuccess: function(image){}, // function fired on loading success
      container: angular.element(scrollable), // if scrollable container is not $window then provide it here
    });
}]);


app.controller('MyCtrl', function($scope) {

    $scope.dataArray = [
      {
        src: 'images/slider/banner-4-750x400.jpg'
      },
      {
        src: 'images/slider/banner-1-750x400.jpg'
      },
      {
        src: 'images/slider/banner-2-750x400.jpg'
      },
      {
        src: 'images/slider/banner-3-750x400.jpg'
      }
    ];
	
	    $scope.product_slide_a1 = [
        {title:'Seductive by Guess For Women - Eau De Toilette, 75ml',thum_img:'images/product/img1.jpg',price:'Rs.25,000'}
		 ];
		$scope.product_slide_a2 = [
        {title:'Beauty by Calvin Klein For Women - Eau De Parfum 100ml',thum_img:'images/product/img2.jpg',price:'Rs.13,000'}
		 ];
		$scope.product_slide_a3 = [
        {title:'Google Chromecast 2 HDMI Streaming Media Player - Black',thum_img:'images/product/img3.jpg',price:'Rs.7,000'}
		 ];
		$scope.product_slide_a4 = [
        {title:'Grand Theft Auto V By Rockstar For PlayStation 4',thum_img:'images/product/img4.jpg',price:'Rs.42,000'}
		 ];
		$scope.product_slide_a5 = [
        {title:'Cool Water by Davidoff For Men - Eau De Toilette, 125ml ',thum_img:'images/product/img5.jpg',price:'Rs.3,000'} 
    ];
	$scope.product_slide_b = [
    
        {title:'Long Sleeve Shirt Fashion Men',thum_img:'images/product/canon_eos_5d_1-200x200.jpg',price:'Rs.98.00 ',d_price:'Rs.122.00'}
    ];

	
	/*--------- popular product*/
	$scope.po_product_slide_a1 = [
        {title:'Calvin Klein Euphoria Men Intense for Men (100ml Eau de Toilette)',thum_img:'images/product/img1a.jpg',price:'Rs.25,000'}
    
       
    ];
	$scope.po_product_slide_a2 = [
        {title:'Seductive Homme By Guess for Men - Eau De Toilette, 100ml',thum_img:'images/product/img2a.jpg',price:'Rs.13,000'}
    
       
    ];
	$scope.po_product_slide_a3 = [
        {title:'Mn Cosmetics Matte Kiss Proof lipstick, set of 12 pieces - P130..',thum_img:'images/product/img3a.jpg',price:'Rs.7,000'}
    
       
    ];
	$scope.po_product_slide_a4 = [
        {title:'VR Box VRO Virtual Reality 3D Glasses with Bluetooth',thum_img:'images/product/img4a.jpg',price:'Rs.42,000'}
    
       
    ];
	$scope.po_product_slide_a5 = [
        {title:'Sonashi Simply Straight Hair Brush Straightener',thum_img:'images/product/img5a.jpg',price:'Rs.3,000'}
    
       
    ];
	$scope.po_product_slide_b = [
    
        {title:'Long Sleeve Shirt Fashion Men',thum_img:'images/product/canon_eos_5d_1-200x200.jpg',price:'Rs.98.00',d_price:'Rs.122.00',off_p:'20% off'}
    ];
	
	
	
	/*--------- popular product electronics part 1 */
	
	$scope.e_product_slide_a_lap = [
    
        {title:'Aspire Ultrabook Laptop',thum_img:'images/product/samsung_tab_1-200x200.jpg',price:'Rs.230.00',d_price:'Rs.241.99',off_p:'5% Off'}
    ];
	$scope.e_product_slide_b_lap = [
    
        {title:'Strategies for Acquiring Your Own Laptop',thum_img:'images/product/macbook_pro_1-200x200.jpg',price:'Rs.1,400.00',d_price:'Rs.1,900.00',off_p:'26% Off'}
    ];
	/*--------- popular product electronics part 2 */
	$scope.e_product_slide_a_desk = [
    
        {title:'Hp Pavilion G6 2314ax Notebok Laptop',thum_img:'images/product/ipod_shuffle_1-200x200.jpg',price:'Rs.122.00'}
    ];
	/*--------- popular product electronics part 3 */
	$scope.e_product_slide_a_came = [
    
        {title:'FinePix S8400W Long Zoom Camera',thum_img:'images/product/FinePix-Long-Zoom-Camera-200x200.jpg',price:'Rs.122.00'}
    ];
	$scope.e_product_slide_b_came = [
    
        {title:'Digital Camera for Elderly',thum_img:'images/product/nikon_d300_1-200x200.jpg',price:'Rs.92.00',d_price:'Rs.98.00',off_p:'6% Off'}
    ];
	/*--------- popular product electronics part 4 */
	$scope.e_product_slide_a_phon = [
    
        {title:'Aspire Ultrabook Laptop',thum_img:'images/product/samsung_tab_1-200x200.jpg',price:'Rs.230.00',d_price:'Rs.241.00',off_p:'5% Off'}
    ];
	$scope.e_product_slide_b_phone = [
    
        {title:'iPhone5',thum_img:'iphone_1-200x200.jpg',price:'$123.20'}
    ];
	/*--------- popular product electronics part 5 */
	$scope.e_product_slide_a_tv = [
    
        {title:'Aspire Ultrabook Laptop',thum_img:'images/product/samsung_tab_1-200x200.jpg',price:'Rs.230.00',d_price:'Rs.241.00',off_p:'5% Off'}
    ];
	$scope.e_product_slide_b_tv = [
    
        {title:'Portable Mp3 Player',thum_img:'images/product/ipod_classic_1-200x200.jpg',price:'Rs.122.20'}
    ];
   /*--------- popular product electronics part 6 */
	$scope.e_product_slide_a_mp3 = [
    
        {title:'Portable Mp3 Player',thum_img:'images/product/ipod_classic_1-200x200.jpg',price:'Rs.122.20'}
    ];
	$scope.e_product_slide_b_mp3 = [
    
        {title:'Mp3 Player',thum_img:'images/product/ipod_nano_1-200x200.jpg',price:'Rs.122.20'}
    ];
	
	/*-------- product Health and beauty part 6 */
	
	$scope.e_product_slide_a_health1 = [
    
        {title:'Hair Care Cream for Men',thum_img:'images/product/iphone_6-200x200.jpg',price:'Rs.134.00'}
    ];
	$scope.e_product_slide_a_health2 = [
    
        {title:'Hair Care Products',thum_img:'images/product/nikon_d300_5-200x200.jpg',price:'Rs.66.80',d_price:'Rs.90.80',off_p:'-27%'}
    ];
	$scope.e_product_slide_a_health3 = [
    
        {title:'Bed Head Foxy Curls Contour Cream',thum_img:'images/product/nikon_d300_4-200x200.jpg',price:'Rs.88.00'}
    ];
	$scope.e_product_slide_a_health4 = [
    
        {title:'Shower Gel Perfume for Women',thum_img:'images/product/macbook_5-200x200.jpg',price:'Rs.95.00',d_price:'Rs.99.00',off_p:'-4%'}
    ];
	$scope.e_product_slide_a_health5 = [
    
        {title:'Perfumes for Women',thum_img:'images/product/macbook_4-200x200.jpg',price:'$85.00'}
    ];
	$scope.e_product_slide_a_health6 = [
    
        {title:'Make Up for Naturally Beautiful Better',thum_img:'images/product/macbook_3-200x200.jpg',price:'$123.00'}
    ];
	$scope.e_product_slide_a_health7 = [
    
        {title:'Pnina Tornai Perfume',thum_img:'images/product/macbook_2-200x200.jpg',price:'Rs.110.00'}
    ];
	
	
	
});





