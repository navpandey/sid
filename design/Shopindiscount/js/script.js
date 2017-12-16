// Code goes here
var app=angular.module('myApp', ['ngMaterial', 'jkAngularCarousel'])


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
        {title:'Seductive by Guess For Women - Eau De Toilette, 75ml',thum_img:'images/product/img1.jpg',price:'Rs.25,000' ,alt_val:'i phone'},
		
        {title:'Beauty by Calvin Klein For Women - Eau De Parfum 100ml',thum_img:'images/product/img2.jpg',price:'Rs.13,000',alt_val:'i phone'},
		
        {title:'Google Chromecast 2 HDMI Streaming Media Player - Black',thum_img:'images/product/img3.jpg',price:'Rs.7,000',alt_val:'i phone'},
		
        {title:'Grand Theft Auto V By Rockstar For PlayStation 4',thum_img:'images/product/img4.jpg',price:'Rs.42,000',alt_val:'i phone'},
		 {title:'Google Chromecast 2 HDMI Streaming Media Player - Black',thum_img:'images/product/img3.jpg',price:'Rs.7,000',alt_val:'i phone'},
		
        {title:'Grand Theft Auto V By Rockstar For PlayStation 4',thum_img:'images/product/img4.jpg',price:'Rs.42,000'},
		 {title:'Google Chromecast 2 HDMI Streaming Media Player - Black',thum_img:'images/product/img3.jpg',price:'Rs.7,000'},
		
        {title:'Grand Theft Auto V By Rockstar For PlayStation 4',thum_img:'images/product/img4.jpg',price:'Rs.42,000'},
		
        {title:'Cool Water by Davidoff For Men - Eau De Toilette, 125ml ',thum_img:'images/product/img5.jpg',price:'Rs.3,000'} 
		
		
		
    ];

	
	/*--------- popular product*/
	$scope.po_product_slide_a1 = [
        {title:'Calvin Klein Euphoria Men Intense for Men (100ml Eau de Toilette)',thum_img:'images/product/img1a.jpg',price:'Rs.25,000'},
        {title:'Seductive Homme By Guess for Men - Eau De Toilette, 100ml',thum_img:'images/product/img2a.jpg',price:'Rs.13,000'},
        {title:'Mn Cosmetics Matte Kiss Proof lipstick, set of 12 pieces - P130..',thum_img:'images/product/img3a.jpg',price:'Rs.7,000'},
        {title:'VR Box VRO Virtual Reality 3D Glasses with Bluetooth',thum_img:'images/product/img4a.jpg',price:'Rs.42,000'},
        {title:'Sonashi Simply Straight Hair Brush Straightener',thum_img:'images/product/img5a.jpg',price:'Rs.3,000'},
		 {title:'Calvin Klein Euphoria Men Intense for Men (100ml Eau de Toilette)',thum_img:'images/product/img1a.jpg',price:'Rs.25,000'},
        {title:'Seductive Homme By Guess for Men - Eau De Toilette, 100ml',thum_img:'images/product/img2a.jpg',price:'Rs.13,000'},
        {title:'Mn Cosmetics Matte Kiss Proof lipstick, set of 12 pieces - P130..',thum_img:'images/product/img3a.jpg',price:'Rs.7,000'}
     
    ];
	
	/*--------- popular product electronics part 1 */
	
	$scope.e_product_slide_a_lap = [
    
        {title:'Aspire Ultrabook Laptop',thum_img:'images/product/samsung_tab_1-200x200.jpg',price:'Rs.230.00',d_price:'Rs.241.99',off_p:'5% Off'},
		{title:'Aspire Ultrabook Laptop',thum_img:'images/product/samsung_tab_1-200x200.jpg',price:'Rs.230.00',d_price:'Rs.241.99',off_p:'5% Off'},
		{title:'Aspire Ultrabook Laptop',thum_img:'images/product/samsung_tab_1-200x200.jpg',price:'Rs.230.00',d_price:'Rs.241.99',off_p:'5% Off'},
		{title:'Aspire Ultrabook Laptop',thum_img:'images/product/samsung_tab_1-200x200.jpg',price:'Rs.230.00',d_price:'Rs.241.99',off_p:'5% Off'},
		{title:'Aspire Ultrabook Laptop',thum_img:'images/product/samsung_tab_1-200x200.jpg',price:'Rs.230.00',d_price:'Rs.241.99',off_p:'5% Off'},
		{title:'Aspire Ultrabook Laptop',thum_img:'images/product/samsung_tab_1-200x200.jpg',price:'Rs.230.00',d_price:'Rs.241.99',off_p:'5% Off'}
		   
    ];
	/*--------- popular product electronics part 2 */
	$scope.e_product_slide_a_desk = [
    
        {title:'Hp Pavilion G6 2314ax Notebok Laptop',thum_img:'images/product/ipod_shuffle_1-200x200.jpg',price:'Rs.122.00'},
		{title:'Hp Pavilion G6 2314ax Notebok Laptop',thum_img:'images/product/ipod_shuffle_1-200x200.jpg',price:'Rs.122.00'},
		{title:'Hp Pavilion G6 2314ax Notebok Laptop',thum_img:'images/product/ipod_shuffle_1-200x200.jpg',price:'Rs.122.00'},
		{title:'Hp Pavilion G6 2314ax Notebok Laptop',thum_img:'images/product/ipod_shuffle_1-200x200.jpg',price:'Rs.122.00'},
		{title:'Hp Pavilion G6 2314ax Notebok Laptop',thum_img:'images/product/ipod_shuffle_1-200x200.jpg',price:'Rs.122.00'},
	    {title:'Hp Pavilion G6 2314ax Notebok Laptop',thum_img:'images/product/ipod_shuffle_1-200x200.jpg',price:'Rs.122.00'}
    ];
	/*--------- popular product electronics part 3 */
	$scope.e_product_slide_a_came = [
    
        {title:'FinePix S8400W Long Zoom Camera',thum_img:'images/product/FinePix-Long-Zoom-Camera-200x200.jpg',price:'Rs.122.00'},
        {title:'Digital Camera for Elderly',thum_img:'images/product/nikon_d300_1-200x200.jpg',price:'Rs.92.00',d_price:'Rs.98.00',off_p:'6% Off'},
		{title:'FinePix S8400W Long Zoom Camera',thum_img:'images/product/FinePix-Long-Zoom-Camera-200x200.jpg',price:'Rs.122.00'},
        {title:'Digital Camera for Elderly',thum_img:'images/product/nikon_d300_1-200x200.jpg',price:'Rs.92.00',d_price:'Rs.98.00',off_p:'6% Off'},
		{title:'FinePix S8400W Long Zoom Camera',thum_img:'images/product/FinePix-Long-Zoom-Camera-200x200.jpg',price:'Rs.122.00'},
        {title:'Digital Camera for Elderly',thum_img:'images/product/nikon_d300_1-200x200.jpg',price:'Rs.92.00',d_price:'Rs.98.00',off_p:'6% Off'},
		{title:'FinePix S8400W Long Zoom Camera',thum_img:'images/product/FinePix-Long-Zoom-Camera-200x200.jpg',price:'Rs.122.00'},
        {title:'Digital Camera for Elderly',thum_img:'images/product/nikon_d300_1-200x200.jpg',price:'Rs.92.00',d_price:'Rs.98.00',off_p:'6% Off'}
    ];
	/*--------- popular product electronics part 4 */
	$scope.e_product_slide_a_phon = [
    
        {title:'Aspire Ultrabook Laptop',thum_img:'images/product/samsung_tab_1-200x200.jpg',price:'Rs.230.00',d_price:'Rs.241.00',off_p:'5% Off'},
        {title:'iPhone5',thum_img:'images/product/iphone_1-200x200.jpg',price:'$123.20'},
		 {title:'Aspire Ultrabook Laptop',thum_img:'images/product/samsung_tab_1-200x200.jpg',price:'Rs.230.00',d_price:'Rs.241.00',off_p:'5% Off'},
        {title:'iPhone5',thum_img:'images/product/iphone_1-200x200.jpg',price:'$123.20'},
		 {title:'Aspire Ultrabook Laptop',thum_img:'images/product/samsung_tab_1-200x200.jpg',price:'Rs.230.00',d_price:'Rs.241.00',off_p:'5% Off'},
        {title:'iPhone5',thum_img:'images/product/iphone_1-200x200.jpg',price:'$123.20'},
		 {title:'Aspire Ultrabook Laptop',thum_img:'images/product/samsung_tab_1-200x200.jpg',price:'Rs.230.00',d_price:'Rs.241.00',off_p:'5% Off'},
        {title:'iPhone5',thum_img:'images/product/iphone_1-200x200.jpg',price:'$123.20'}
    ];
	/*--------- popular product electronics part 5 */
	$scope.e_product_slide_a_tv = [
    
        {title:'Aspire Ultrabook Laptop',thum_img:'images/product/samsung_tab_1-200x200.jpg',price:'Rs.230.00',d_price:'Rs.241.00',off_p:'5% Off'},
        {title:'Portable Mp3 Player',thum_img:'images/product/ipod_classic_1-200x200.jpg',price:'Rs.122.20'},
		{title:'Aspire Ultrabook Laptop',thum_img:'images/product/samsung_tab_1-200x200.jpg',price:'Rs.230.00',d_price:'Rs.241.00',off_p:'5% Off'},
        {title:'Portable Mp3 Player',thum_img:'images/product/ipod_classic_1-200x200.jpg',price:'Rs.122.20'},
		{title:'Aspire Ultrabook Laptop',thum_img:'images/product/samsung_tab_1-200x200.jpg',price:'Rs.230.00',d_price:'Rs.241.00',off_p:'5% Off'},
        {title:'Portable Mp3 Player',thum_img:'images/product/ipod_classic_1-200x200.jpg',price:'Rs.122.20'},
		{title:'Aspire Ultrabook Laptop',thum_img:'images/product/samsung_tab_1-200x200.jpg',price:'Rs.230.00',d_price:'Rs.241.00',off_p:'5% Off'},
        {title:'Portable Mp3 Player',thum_img:'images/product/ipod_classic_1-200x200.jpg',price:'Rs.122.20'}
    ];
   /*--------- popular product electronics part 6 */
	$scope.e_product_slide_a_mp3 = [
    
        {title:'Portable Mp3 Player',thum_img:'images/product/ipod_classic_1-200x200.jpg',price:'Rs.122.20'},
        {title:'Mp3 Player',thum_img:'images/product/ipod_nano_1-200x200.jpg',price:'Rs.122.20'},
		{title:'Portable Mp3 Player',thum_img:'images/product/ipod_classic_1-200x200.jpg',price:'Rs.122.20'},
        {title:'Mp3 Player',thum_img:'images/product/ipod_nano_1-200x200.jpg',price:'Rs.122.20'},
		{title:'Portable Mp3 Player',thum_img:'images/product/ipod_classic_1-200x200.jpg',price:'Rs.122.20'},
        {title:'Mp3 Player',thum_img:'images/product/ipod_nano_1-200x200.jpg',price:'Rs.122.20'},
		{title:'Portable Mp3 Player',thum_img:'images/product/ipod_classic_1-200x200.jpg',price:'Rs.122.20'},
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
	
	
   
   /*-----------------------------------------------------------------------------------------------------------------*/
   
   
   
    
   
   
   
   
 /*----------------------------------------------------------------------------------------------------------------------*/  
   
 	
});
 // I lazily load the images, when they come into view.
    app.directive(
        "bnLazySrc",
        function($window, $document) {
            // I manage all the images that are currently being
            // monitored on the page for lazy loading.
            var lazyLoader = (function() {
                // I maintain a list of images that lazy-loading
                // and have yet to be rendered.
                var images = [];
                // I define the render timer for the lazy loading
                // images to that the DOM-querying (for offsets)
                // is chunked in groups.
                var renderTimer = null;
                var renderDelay = 1000;
                // I cache the window element as a jQuery reference.
                var win = $($window);
                // I cache the document document height so that 
                // we can respond to changes in the height due to
                // dynamic content.
                var doc = $document;
                var documentHeight = doc.height();
                var documentTimer = null;
                var documentDelay = 1000;
                // I determine if the window dimension events 
                // (ie. resize, scroll) are currenlty being 
                // monitored for changes.
                var isWatchingWindow = false;
                // I start monitoring the given image for visibility
                // and then render it when necessary.
                function addImage(image) {
                    images.push(image);
                    if (!renderTimer) {
                        startRenderTimer();
                    }
                    if (!isWatchingWindow) {
                        startWatchingWindow();
                    }
                }
                // I remove the given image from the render queue.
                function removeImage(image) {
                    // Remove the given image from the render queue.
                    for (var i = 0; i < images.length; i++) {
                        if (images[i] === image) {
                            images.splice(i, 1);
                            break;
                        }
                    }
                    // If removing the given image has cleared the
                    // render queue, then we can stop monitoring 
                    // the window and the image queue.
                    if (!images.length) {
                        clearRenderTimer();
                        stopWatchingWindow();
                    }
                }
                // I check the document height to see if it's changed.
                function checkDocumentHeight() {
                    // If the render time is currently active, then 
                    // don't bother getting the document height - 
                    // it won't actually do anything.
                    if (renderTimer) {
                        return;
                    }
                    var currentDocumentHeight = doc.height();
                    // If the height has not changed, then ignore - 
                    // no more images could have come into view.
                    if (currentDocumentHeight === documentHeight) {
                        return;
                    }
                    // Cache the new document height.
                    documentHeight = currentDocumentHeight;
                    startRenderTimer();
                }
                // I check the lazy-load images that have yet to 
                // be rendered. 
                function checkImages() {
                    // Log here so we can see how often this 
                    // gets called during page activity.
                    console.log("Checking for visible images...");
                    var visible = [];
                    var hidden = [];

                    // Determine the window dimensions.
                    var windowHeight = win.height();
                    var scrollTop = win.scrollTop();

                    // Calculate the viewport offsets.
                    var topFoldOffset = scrollTop;
                    var bottomFoldOffset = (topFoldOffset + windowHeight);
                    // Query the DOM for layout and seperate the
                    // images into two different categories: those
                    // that are now in the viewport and those that
                    // still remain hidden.
                    for (var i = 0; i < images.length; i++) {

                        var image = images[i];
                        if (image.isVisible(topFoldOffset, bottomFoldOffset)) {
                            visible.push(image);
                        } else {
                            hidden.push(image);
                        }
                    }
                    // Update the DOM with new image source values.
                    for (var i = 0; i < visible.length; i++) {
                        visible[i].render();
                    }
                    // Keep the still-hidden images as the new 
                    // image queue to be monitored.
                    images = hidden;
                    // Clear the render timer so that it can be set
                    // again in response to window changes.
                    clearRenderTimer();
                    // If we've rendered all the images, then stop
                    // monitoring the window for changes.
                    if (!images.length) {

                        stopWatchingWindow();
                    }
                }
                // I clear the render timer so that we can easily 
                // check to see if the timer is running.
                function clearRenderTimer() {
                    clearTimeout(renderTimer);
                    renderTimer = null;
                }
                // I start the render time, allowing more images to
                // be added to the images queue before the render 
                // action is executed.
                function startRenderTimer() {
                    renderTimer = setTimeout(checkImages, renderDelay);
                }
                // I start watching the window for changes in dimension.
                function startWatchingWindow() {
                    isWatchingWindow = true;
                    // Listen for window changes.
                    win.on("resize.bnLazySrc", windowChanged);
                    win.on("scroll.bnLazySrc", windowChanged);
                    // Set up a timer to watch for document-height changes.
                    documentTimer = setInterval(checkDocumentHeight, documentDelay);
                }
                // I stop watching the window for changes in dimension.
                function stopWatchingWindow() {
                    isWatchingWindow = false;
                    // Stop watching for window changes.
                    win.off("resize.bnLazySrc");
                    win.off("scroll.bnLazySrc");
                    // Stop watching for document changes.
                    clearInterval(documentTimer);
                }
                // I start the render time if the window changes.
                function windowChanged() {
                    if (!renderTimer) {
                        startRenderTimer();
                    }
                }
                // Return the public API.
                return ({
                    addImage: addImage,
                    removeImage: removeImage
                });
            })();
            // I represent a single lazy-load image.
            function LazyImage(element) {
                // I am the interpolated LAZY SRC attribute of 
                // the image as reported by AngularJS.					
                var source = null;
                // I determine if the image has already been 
                // rendered (ie, that it has been exposed to the
                // viewport and the source had been loaded).
                var isRendered = false;
                // I am the cached height of the element. We are 
                // going to assume that the image doesn't change 
                // height over time.
                var height = null;
                // I determine if the element is above the given 
                // fold of the page.
                function isVisible(topFoldOffset, bottomFoldOffset) {
                    // If the element is not visible because it 
                    // is hidden, don't bother testing it.
                    if (!element.is(":visible")) {
                        return (false);
                    }
                    // If the height has not yet been calculated, 
                    // the cache it for the duration of the page.
                    if (height === null) {
                        height = element.height();
                    }
                    // Update the dimensions of the element.
                    var top = element.offset().top;
                    var bottom = (top + height);
                    // Return true if the element is:
                    // 1. The top offset is in view.
                    // 2. The bottom offset is in view.
                    // 3. The element is overlapping the viewport.
                    return (
                        (
                            (top <= bottomFoldOffset) &&
                            (top >= topFoldOffset)
                        ) ||
                        (
                            (bottom <= bottomFoldOffset) &&
                            (bottom >= topFoldOffset)
                        ) ||
                        (
                            (top <= topFoldOffset) &&
                            (bottom >= bottomFoldOffset)
                        )
                    );
                }
                // I move the cached source into the live source.
                function render() {
                    isRendered = true;
                    renderSource();
                }
                // I set the interpolated source value reported
                // by the directive / AngularJS.
                function setSource(newSource) {
                    source = newSource;
                    if (isRendered) {
                        renderSource();
                    }
                }

                // I load the lazy source value into the actual 
                // source value of the image element.
                function renderSource() {
                    element[0].src = source;
                }
                // Return the public API.
                return ({
                    isVisible: isVisible,
                    render: render,
                    setSource: setSource
                });
            }
            // I bind the UI events to the scope.
            function link($scope, element, attributes) {
                var lazyImage = new LazyImage(element);
                // Start watching the image for changes in its
                // visibility.
                lazyLoader.addImage(lazyImage);
                // Since the lazy-src will likely need some sort
                // of string interpolation, we don't want to 
                attributes.$observe(
                    "bnLazySrc",
                    function(newSource) {
                        lazyImage.setSource(newSource);
                    }
                );
                // When the scope is destroyed, we need to remove
                // the image from the render queue.
                $scope.$on(
                    "$destroy",
                    function() {
                        lazyLoader.removeImage(lazyImage);
                    }
                );
            }
            // Return the directive configuration.
            return ({
                link: link,
                restrict: "A"
            });

        }
    );

app.directive("owlCarousel", function() {
	return {
		restrict: 'E',
		transclude: false,
		link: function (scope) {
			scope.initCarousel = function(element) {
			  // provide any default options you want
				//var defaultOptions = {
					/*autoPlay: 5000, 
					stopOnHover: true,
					slideSpeed : 300, 
					paginationSpeed : 400,
					itemsCustom : [[320, 2],[768, 3],[1200, 5],[1600, 5]],
					navigation : true,
					navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
					lazyLoad : true,
				};
				
				var customOptions = scope.$eval($(element).attr('data-options'));
				// combine the two options objects
				for(var key in customOptions) {
					defaultOptions[key] = customOptions[key];
				}
				
				// init carousel
				$(element).owlCarousel(defaultOptions);*/
				 //Check if already carousel made then destroy
						if (typeof $("#carousel_1").data('owlCarousel') != 'undefined') {
							
							//New Product
						   $("#carousel_1").data('owlCarousel').destroy();
							//Popular Products
						   $('#carousel_2').data('owlCarousel').destroy();
						   //Electronics 
						   $('#carousel_3').data('owlCarousel').destroy();
						   $('#carousel_4').data('owlCarousel').destroy();
						   $('#carousel_5').data('owlCarousel').destroy();
						   $('#carousel_6').data('owlCarousel').destroy();
						   $('#carousel_7').data('owlCarousel').destroy();
						   $('#carousel_8').data('owlCarousel').destroy();
						   // Fashion
						   $('#carousel_9').data('owlCarousel').destroy();
						   $('#carousel_10').data('owlCarousel').destroy();
						   $('#carousel_11').data('owlCarousel').destroy();
						   $('#carousel_12').data('owlCarousel').destroy();
						   $('#carousel_13').data('owlCarousel').destroy();
						   $('#carousel_14').data('owlCarousel').destroy();
						   // Perfumes
						   $('#carousel_15').data('owlCarousel').destroy();
						   $('#carousel_16').data('owlCarousel').destroy();
						   $('#carousel_17').data('owlCarousel').destroy();
						   $('#carousel_18').data('owlCarousel').destroy();
						   $('#carousel_19').data('owlCarousel').destroy();
						   $('#carousel_20').data('owlCarousel').destroy();
						   
						    //Cameras & Accessories
						   $('#carousel_21').data('owlCarousel').destroy();
						   $('#carousel_22').data('owlCarousel').destroy();
						   $('#carousel_23').data('owlCarousel').destroy();
						   $('#carousel_24').data('owlCarousel').destroy();
						    $('#carousel_25').data('owlCarousel').destroy();
						  
						   
						 
						}
						
					
				 //New Product
						var sync1 = $("#carousel_1");
						sync1.owlCarousel({
							singleItem : false,
							slideSpeed : 1000,
							navigation: true,
							pagination:false,
							afterAction : syncPosition,
							itemsCustom : [[320, 2],[768, 3],[1200, 5],[1600, 5]],
							navigation : true,
							navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
							lazyLoad : true,
							responsiveRefreshRate : 200
						});
						
				 //Popular Products
						var sync2 = $("#carousel_2");
						sync2.owlCarousel({
							singleItem : false,
							slideSpeed : 1000,
							navigation: true,
							pagination:false,
							afterAction : syncPosition,
							itemsCustom : [[320, 2],[768, 3],[1200, 5],[1600, 5]],
							navigation : true,
							navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
							lazyLoad : true,
							responsiveRefreshRate : 200
						});
						
						//Electronics 
						var sync3 = $("#carousel_3");
						
						sync3.owlCarousel({
							singleItem : false,
							slideSpeed : 1000,
							navigation: true,
							pagination:false,
							afterAction : syncPosition,
							itemsCustom : [[320, 2],[768, 3],[1200, 6],[1600, 5]],
							navigation : true,
							navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
							lazyLoad : true,
							responsiveRefreshRate : 200
						});
						var sync4 = $("#carousel_4");
					
						sync4.owlCarousel({
							singleItem : false,
							slideSpeed : 1000,
							navigation: true,
							pagination:false,
							afterAction : syncPosition,
							itemsCustom : [[320, 2],[768, 3],[1200, 6],[1600, 5]],
							navigation : true,
							navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
							lazyLoad : true,
							responsiveRefreshRate : 200
						});
						
						var sync5 = $("#carousel_5");
						
						sync5.owlCarousel({
							singleItem : false,
							slideSpeed : 1000,
							navigation: true,
							pagination:false,
							afterAction : syncPosition,
							itemsCustom : [[320, 2],[768, 3],[1200, 6],[1600, 5]],
							navigation : true,
							navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
							lazyLoad : true,
							responsiveRefreshRate : 200
						});
						
						
						var sync6 = $("#carousel_6");
					
						sync6.owlCarousel({
							singleItem : false,
							slideSpeed : 1000,
							navigation: true,
							pagination:false,
							afterAction : syncPosition,
							itemsCustom : [[320, 2],[768, 3],[1200, 6],[1600, 5]],
							navigation : true,
							navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
							lazyLoad : true,
							responsiveRefreshRate : 200
						});
						
						
						var sync7 = $("#carousel_7");
						
						sync7.owlCarousel({
							singleItem : false,
							slideSpeed : 1000,
							navigation: true,
							pagination:false,
							afterAction : syncPosition,
							itemsCustom : [[320, 2],[768, 3],[1200, 6],[1600, 5]],
							navigation : true,
							navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
							lazyLoad : true,
							responsiveRefreshRate : 200
						});
						
						
						var sync8 = $("#carousel_8");
						sync8.owlCarousel({
							singleItem : false,
							slideSpeed : 1000,
							navigation: true,
							pagination:false,
							afterAction : syncPosition,
							itemsCustom : [[320, 2],[768, 3],[1200, 6],[1600, 5]],
							navigation : true,
							navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
							lazyLoad : true,
							responsiveRefreshRate : 200
						});
						
						
						// Fashion
						var sync9 =  $("#carousel_9");
						
						sync9.owlCarousel({
							singleItem : false,
							slideSpeed : 1000,
							navigation: true,
							pagination:false,
							afterAction : syncPosition,
							itemsCustom : [[320, 2],[768, 3],[1200, 6],[1600, 5]],
							navigation : true,
							navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
							lazyLoad : true,
							responsiveRefreshRate : 200
						});
						
						
						var sync10 = $("#carousel_10");
						
						sync10.owlCarousel({
							singleItem : false,
							slideSpeed : 1000,
							navigation: true,
							pagination:false,
							afterAction : syncPosition,
							itemsCustom : [[320, 2],[768, 3],[1200, 6],[1600, 5]],
							navigation : true,
							navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
							lazyLoad : true,
							responsiveRefreshRate : 200
						});
						
						var sync11 = $("#carousel_11");
						
						sync11.owlCarousel({
							singleItem : false,
							slideSpeed : 1000,
							navigation: true,
							pagination:false,
							afterAction : syncPosition,
							itemsCustom : [[320, 2],[768, 3],[1200, 6],[1600, 5]],
							navigation : true,
							navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
							lazyLoad : true,
							responsiveRefreshRate : 200
						});
						
						
						var sync12 = $("#carousel_12");
						
						sync12.owlCarousel({
							singleItem : false,
							slideSpeed : 1000,
							navigation: true,
							pagination:false,
							afterAction : syncPosition,
							itemsCustom : [[320, 2],[768, 3],[1200, 6],[1600, 5]],
							navigation : true,
							navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
							lazyLoad : true,
							responsiveRefreshRate : 200
						});
						
						
						var sync13 =  $("#carousel_13");
						
						sync13.owlCarousel({
							singleItem : false,
							slideSpeed : 1000,
							navigation: true,
							pagination:false,
							afterAction : syncPosition,
							itemsCustom : [[320, 2],[768, 3],[1200, 6],[1600, 5]],
							navigation : true,
							navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
							lazyLoad : true,
							responsiveRefreshRate : 200
						});
						
						
						var sync14 = $("#carousel_14");
						sync14.owlCarousel({
							singleItem : false,
							slideSpeed : 1000,
							navigation: true,
							pagination:false,
							afterAction : syncPosition,
							itemsCustom : [[320, 2],[768, 3],[1200, 6],[1600, 5]],
							navigation : true,
							navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
							lazyLoad : true,
							responsiveRefreshRate : 200
						});
						
						//Perfumes
						var sync15 = $("#carousel_15");
						sync15.owlCarousel({
							singleItem : false,
							slideSpeed : 1000,
							navigation: true,
							pagination:false,
							afterAction : syncPosition,
							itemsCustom : [[320, 2],[768, 3],[1200, 6],[1600, 5]],
							navigation : true,
							navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
							lazyLoad : true,
							responsiveRefreshRate : 200
						});
						var sync16 = $("#carousel_16");
						sync16.owlCarousel({
							singleItem : false,
							slideSpeed : 1000,
							navigation: true,
							pagination:false,
							afterAction : syncPosition,
							itemsCustom : [[320, 2],[768, 3],[1200, 6],[1600, 5]],
							navigation : true,
							navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
							lazyLoad : true,
							responsiveRefreshRate : 200
						});
						var sync17 = $("#carousel_17");
						sync17.owlCarousel({
							singleItem : false,
							slideSpeed : 1000,
							navigation: true,
							pagination:false,
							afterAction : syncPosition,
							itemsCustom : [[320, 2],[768, 3],[1200, 6],[1600, 5]],
							navigation : true,
							navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
							lazyLoad : true,
							responsiveRefreshRate : 200
						});
						var sync18 = $("#carousel_18");
						sync18.owlCarousel({
							singleItem : false,
							slideSpeed : 1000,
							navigation: true,
							pagination:false,
							afterAction : syncPosition,
							itemsCustom : [[320, 2],[768, 3],[1200, 6],[1600, 5]],
							navigation : true,
							navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
							lazyLoad : true,
							responsiveRefreshRate : 200
						});
						var sync19 = $("#carousel_19");
						sync19.owlCarousel({
							singleItem : false,
							slideSpeed : 1000,
							navigation: true,
							pagination:false,
							afterAction : syncPosition,
							itemsCustom : [[320, 2],[768, 3],[1200, 6],[1600, 5]],
							navigation : true,
							navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
							lazyLoad : true,
							responsiveRefreshRate : 200
						});
						var sync20 = $("#carousel_20");
						sync20.owlCarousel({
							singleItem : false,
							slideSpeed : 1000,
							navigation: true,
							pagination:false,
							afterAction : syncPosition,
							itemsCustom : [[320, 2],[768, 3],[1200, 6],[1600, 5]],
							navigation : true,
							navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
							lazyLoad : true,
							responsiveRefreshRate : 200
						});
						
						//Cameras & Accessories
						var sync21 = $("#carousel_21");
						sync21.owlCarousel({
							singleItem : false,
							slideSpeed : 1000,
							navigation: true,
							pagination:false,
							afterAction : syncPosition,
							itemsCustom : [[320, 2],[768, 3],[1200, 6],[1600, 5]],
							navigation : true,
							navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
							lazyLoad : true,
							responsiveRefreshRate : 200
						});
						var sync22 = $("#carousel_22");
						sync22.owlCarousel({
							singleItem : false,
							slideSpeed : 1000,
							navigation: true,
							pagination:false,
							afterAction : syncPosition,
							itemsCustom : [[320, 2],[768, 3],[1200, 6],[1600, 5]],
							navigation : true,
							navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
							lazyLoad : true,
							responsiveRefreshRate : 200
						});
						var sync23 = $("#carousel_23");
						sync23.owlCarousel({
							singleItem : false,
							slideSpeed : 1000,
							navigation: true,
							pagination:false,
							afterAction : syncPosition,
							itemsCustom : [[320, 2],[768, 3],[1200, 6],[1600, 5]],
							navigation : true,
							navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
							lazyLoad : true,
							responsiveRefreshRate : 200
						});
						var sync24 = $("#carousel_24");
						sync24.owlCarousel({
							singleItem : false,
							slideSpeed : 1000,
							navigation: true,
							pagination:false,
							afterAction : syncPosition,
							itemsCustom : [[320, 2],[768, 3],[1200, 6],[1600, 5]],
							navigation : true,
							navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
							lazyLoad : true,
							responsiveRefreshRate : 200
						});
						var sync25 = $("#carousel_25");
						sync25.owlCarousel({
							singleItem :true,
							slideSpeed : 1000,
							navigation: false,
							pagination:true,
							autoPlay: 5000,
						    stopOnHover: true, 
							afterAction : syncPosition,
							lazyLoad : true
							
						});
				
						function syncPosition(el){
							
							$("#carousel_20")
								.find(".owl-item")
								.removeClass("synced")
								.eq(current)
								.addClass("synced")
							if($("#carousel_20").data("owlCarousel") !== undefined){
								center(current)
							}
				
							
						}
						
						
				
				
				
			};
		}
	};
});

app.directive('owlCarouselItem', [function() {
	return {
		restrict: 'A',
		transclude: false,
		link: function(scope, element) {
		  // wait for the last item in the ng-repeat then call init
			if(scope.$last) {
				scope.initCarousel(element.parent());
				
			}
		}
	};
}]);







