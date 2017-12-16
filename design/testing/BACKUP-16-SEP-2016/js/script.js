// Code goes here
var app = angular.module('myApp', ['ngMaterial', 'jkAngularCarousel', 'ngRoute','ui.router','ng','ngAnimate','ngTinyScrollbar','ezplus' ])


// Main Controller
app.controller('MyCtrl', function($scope, $http,$location,$anchorScroll) {



    $scope.dataArray = [{
        src: 'images/slider/banner-4-750x400.jpg'
    }, {
        src: 'images/slider/banner-1-750x400.jpg'
    }, {
        src: 'images/slider/banner-2-750x400.jpg'
    }, {
        src: 'images/slider/banner-3-750x400.jpg'
    }];




    /* $http.get('home_slider.json').success(function(data) {
           $scope.product_slide_a1 = data;
    console.log($scope.product_slide_a1);
         });*/




    $scope.product_slide_a1 = [{
        "title": "Seductive by Guess For Women - Eau De Toilette, 75ml",
        "thum_img": "images/product/img1.jpg",
        "price": "Rs.25,000",
        "alt_val": "i phone"
    }, {
        "title": "Beauty by Calvin Klein For Women - Eau De Parfum 100ml",
        "thum_img": "images/product/img2.jpg",
        "price": "Rs.13,000",
        "alt_val": "i phone"
    }, {
        "title": "Google Chromecast 2 HDMI Streaming Media Player - Black",
        "thum_img": "images/product/img3.jpg",
        "price": "Rs.7,000",
        "alt_val": "i phone"
    }, {
        "title": "Grand Theft Auto V By Rockstar For PlayStation 4",
        "thum_img": "images/product/img4.jpg",
        "price": "Rs.42,000",
        "alt_val": "i phone"
    }, {
        "title": "Google Chromecast 2 HDMI Streaming Media Player - Black",
        "thum_img": "images/product/img3.jpg",
        "price": "Rs.7,000",
        "alt_val": "i phone"
    }, {
        "title": "Grand Theft Auto V By Rockstar For PlayStation 4",
        "thum_img": "images/product/img4.jpg",
        "price": "Rs.42,000"
    }, {
        "title": "Google Chromecast 2 HDMI Streaming Media Player - Black",
        "thum_img": "images/product/img3.jpg",
        "price": "Rs.7,000"
    }, {
        "title": "Grand Theft Auto V By Rockstar For PlayStation 4",
        "thum_img": "images/product/img4.jpg",
        "price": "Rs.42,000"
    }, {
        "title": "Cool Water by Davidoff For Men - Eau De Toilette, 125ml ",
        "thum_img": "images/product/img5.jpg",
        "price": "Rs.3,000"
    }]


    /*--------- popular product*/
    $scope.po_product_slide_a1 = [{
            title: 'Calvin Klein Euphoria Men Intense for Men (100ml Eau de Toilette)',
            thum_img: 'images/product/img1a.jpg',
            price: 'Rs.25,000'
        }, {
            title: 'Seductive Homme By Guess for Men - Eau De Toilette, 100ml',
            thum_img: 'images/product/img2a.jpg',
            price: 'Rs.13,000'
        }, {
            title: 'Mn Cosmetics Matte Kiss Proof lipstick, set of 12 pieces - P130..',
            thum_img: 'images/product/img3a.jpg',
            price: 'Rs.7,000'
        }, {
            title: 'VR Box VRO Virtual Reality 3D Glasses with Bluetooth',
            thum_img: 'images/product/img4a.jpg',
            price: 'Rs.42,000'
        }, {
            title: 'Sonashi Simply Straight Hair Brush Straightener',
            thum_img: 'images/product/img5a.jpg',
            price: 'Rs.3,000'
        }, {
            title: 'Calvin Klein Euphoria Men Intense for Men (100ml Eau de Toilette)',
            thum_img: 'images/product/img1a.jpg',
            price: 'Rs.25,000'
        }, {
            title: 'Seductive Homme By Guess for Men - Eau De Toilette, 100ml',
            thum_img: 'images/product/img2a.jpg',
            price: 'Rs.13,000'
        }, {
            title: 'Mn Cosmetics Matte Kiss Proof lipstick, set of 12 pieces - P130..',
            thum_img: 'images/product/img3a.jpg',
            price: 'Rs.7,000'
        }

    ];

    /*--------- popular product electronics part 1 */

    $scope.e_product_slide_a_lap = [

        {
            title: 'Aspire Ultrabook Laptop',
            thum_img: 'images/product/samsung_tab_1-200x200.jpg',
            price: 'Rs.230.00',
            d_price: 'Rs.241.99',
            off_p: '5% Off'
        }, {
            title: 'Aspire Ultrabook Laptop',
            thum_img: 'images/product/samsung_tab_1-200x200.jpg',
            price: 'Rs.230.00',
            d_price: 'Rs.241.99',
            off_p: '5% Off'
        }, {
            title: 'Aspire Ultrabook Laptop',
            thum_img: 'images/product/samsung_tab_1-200x200.jpg',
            price: 'Rs.230.00',
            d_price: 'Rs.241.99',
            off_p: '5% Off'
        }, {
            title: 'Aspire Ultrabook Laptop',
            thum_img: 'images/product/samsung_tab_1-200x200.jpg',
            price: 'Rs.230.00',
            d_price: 'Rs.241.99',
            off_p: '5% Off'
        }, {
            title: 'Aspire Ultrabook Laptop',
            thum_img: 'images/product/samsung_tab_1-200x200.jpg',
            price: 'Rs.230.00',
            d_price: 'Rs.241.99',
            off_p: '5% Off'
        }, {
            title: 'Aspire Ultrabook Laptop',
            thum_img: 'images/product/samsung_tab_1-200x200.jpg',
            price: 'Rs.230.00',
            d_price: 'Rs.241.99',
            off_p: '5% Off'
        }

    ];
    /*--------- popular product electronics part 2 */
    $scope.e_product_slide_a_desk = [

        {
            title: 'Hp Pavilion G6 2314ax Notebok Laptop',
            thum_img: 'images/product/ipod_shuffle_1-200x200.jpg',
            price: 'Rs.122.00'
        }, {
            title: 'Hp Pavilion G6 2314ax Notebok Laptop',
            thum_img: 'images/product/ipod_shuffle_1-200x200.jpg',
            price: 'Rs.122.00'
        }, {
            title: 'Hp Pavilion G6 2314ax Notebok Laptop',
            thum_img: 'images/product/ipod_shuffle_1-200x200.jpg',
            price: 'Rs.122.00'
        }, {
            title: 'Hp Pavilion G6 2314ax Notebok Laptop',
            thum_img: 'images/product/ipod_shuffle_1-200x200.jpg',
            price: 'Rs.122.00'
        }, {
            title: 'Hp Pavilion G6 2314ax Notebok Laptop',
            thum_img: 'images/product/ipod_shuffle_1-200x200.jpg',
            price: 'Rs.122.00'
        }, {
            title: 'Hp Pavilion G6 2314ax Notebok Laptop',
            thum_img: 'images/product/ipod_shuffle_1-200x200.jpg',
            price: 'Rs.122.00'
        }
    ];
    /*--------- popular product electronics part 3 */
    $scope.e_product_slide_a_came = [

        {
            title: 'FinePix S8400W Long Zoom Camera',
            thum_img: 'images/product/FinePix-Long-Zoom-Camera-200x200.jpg',
            price: 'Rs.122.00'
        }, {
            title: 'Digital Camera for Elderly',
            thum_img: 'images/product/nikon_d300_1-200x200.jpg',
            price: 'Rs.92.00',
            d_price: 'Rs.98.00',
            off_p: '6% Off'
        }, {
            title: 'FinePix S8400W Long Zoom Camera',
            thum_img: 'images/product/FinePix-Long-Zoom-Camera-200x200.jpg',
            price: 'Rs.122.00'
        }, {
            title: 'Digital Camera for Elderly',
            thum_img: 'images/product/nikon_d300_1-200x200.jpg',
            price: 'Rs.92.00',
            d_price: 'Rs.98.00',
            off_p: '6% Off'
        }, {
            title: 'FinePix S8400W Long Zoom Camera',
            thum_img: 'images/product/FinePix-Long-Zoom-Camera-200x200.jpg',
            price: 'Rs.122.00'
        }, {
            title: 'Digital Camera for Elderly',
            thum_img: 'images/product/nikon_d300_1-200x200.jpg',
            price: 'Rs.92.00',
            d_price: 'Rs.98.00',
            off_p: '6% Off'
        }, {
            title: 'FinePix S8400W Long Zoom Camera',
            thum_img: 'images/product/FinePix-Long-Zoom-Camera-200x200.jpg',
            price: 'Rs.122.00'
        }, {
            title: 'Digital Camera for Elderly',
            thum_img: 'images/product/nikon_d300_1-200x200.jpg',
            price: 'Rs.92.00',
            d_price: 'Rs.98.00',
            off_p: '6% Off'
        }
    ];
    /*--------- popular product electronics part 4 */
    $scope.e_product_slide_a_phon = [

        {
            title: 'Aspire Ultrabook Laptop',
            thum_img: 'images/product/samsung_tab_1-200x200.jpg',
            price: 'Rs.230.00',
            d_price: 'Rs.241.00',
            off_p: '5% Off'
        }, {
            title: 'iPhone5',
            thum_img: 'images/product/iphone_1-200x200.jpg',
            price: '$123.20'
        }, {
            title: 'Aspire Ultrabook Laptop',
            thum_img: 'images/product/samsung_tab_1-200x200.jpg',
            price: 'Rs.230.00',
            d_price: 'Rs.241.00',
            off_p: '5% Off'
        }, {
            title: 'iPhone5',
            thum_img: 'images/product/iphone_1-200x200.jpg',
            price: '$123.20'
        }, {
            title: 'Aspire Ultrabook Laptop',
            thum_img: 'images/product/samsung_tab_1-200x200.jpg',
            price: 'Rs.230.00',
            d_price: 'Rs.241.00',
            off_p: '5% Off'
        }, {
            title: 'iPhone5',
            thum_img: 'images/product/iphone_1-200x200.jpg',
            price: '$123.20'
        }, {
            title: 'Aspire Ultrabook Laptop',
            thum_img: 'images/product/samsung_tab_1-200x200.jpg',
            price: 'Rs.230.00',
            d_price: 'Rs.241.00',
            off_p: '5% Off'
        }, {
            title: 'iPhone5',
            thum_img: 'images/product/iphone_1-200x200.jpg',
            price: '$123.20'
        }
    ];
	
	   $scope.e_product_slide_a_phons = [

        {
            title: 'Aspire Ultrabook Laptop',
            thum_img: 'images/product/samsung_tab_1-200x200.jpg',
            price: 'Rs.230.00',
            d_price: 'Rs.241.00',
            off_p: '5% Off'
        }, {
            title: 'iPhone5',
            thum_img: 'images/product/iphone_1-200x200.jpg',
            price: '$123.20'
        }, {
            title: 'Aspire Ultrabook Laptop',
            thum_img: 'images/product/samsung_tab_1-200x200.jpg',
            price: 'Rs.230.00',
            d_price: 'Rs.241.00',
            off_p: '5% Off'
        }, {
            title: 'iPhone5',
            thum_img: 'images/product/iphone_1-200x200.jpg',
            price: '$123.20'
		}
    ];
    /*--------- popular product electronics part 5 */
    $scope.e_product_slide_a_tv = [

        {
            title: 'Aspire Ultrabook Laptop',
            thum_img: 'images/product/samsung_tab_1-200x200.jpg',
            price: 'Rs.230.00',
            d_price: 'Rs.241.00',
            off_p: '5% Off'
        }, {
            title: 'Portable Mp3 Player',
            thum_img: 'images/product/ipod_classic_1-200x200.jpg',
            price: 'Rs.122.20'
        }, {
            title: 'Aspire Ultrabook Laptop',
            thum_img: 'images/product/samsung_tab_1-200x200.jpg',
            price: 'Rs.230.00',
            d_price: 'Rs.241.00',
            off_p: '5% Off'
        }, {
            title: 'Portable Mp3 Player',
            thum_img: 'images/product/ipod_classic_1-200x200.jpg',
            price: 'Rs.122.20'
        }, {
            title: 'Aspire Ultrabook Laptop',
            thum_img: 'images/product/samsung_tab_1-200x200.jpg',
            price: 'Rs.230.00',
            d_price: 'Rs.241.00',
            off_p: '5% Off'
        }, {
            title: 'Portable Mp3 Player',
            thum_img: 'images/product/ipod_classic_1-200x200.jpg',
            price: 'Rs.122.20'
        }, {
            title: 'Aspire Ultrabook Laptop',
            thum_img: 'images/product/samsung_tab_1-200x200.jpg',
            price: 'Rs.230.00',
            d_price: 'Rs.241.00',
            off_p: '5% Off'
        }, {
            title: 'Portable Mp3 Player',
            thum_img: 'images/product/ipod_classic_1-200x200.jpg',
            price: 'Rs.122.20'
        }
    ];
    /*--------- popular product electronics part 6 */
    $scope.e_product_slide_a_mp3 = [

        {
            title: 'Portable Mp3 Player',
            thum_img: 'images/product/ipod_classic_1-200x200.jpg',
            price: 'Rs.122.20'
        }, {
            title: 'Mp3 Player',
            thum_img: 'images/product/ipod_nano_1-200x200.jpg',
            price: 'Rs.122.20'
        }, {
            title: 'Portable Mp3 Player',
            thum_img: 'images/product/ipod_classic_1-200x200.jpg',
            price: 'Rs.122.20'
        }, {
            title: 'Mp3 Player',
            thum_img: 'images/product/ipod_nano_1-200x200.jpg',
            price: 'Rs.122.20'
        }, {
            title: 'Portable Mp3 Player',
            thum_img: 'images/product/ipod_classic_1-200x200.jpg',
            price: 'Rs.122.20'
        }, {
            title: 'Mp3 Player',
            thum_img: 'images/product/ipod_nano_1-200x200.jpg',
            price: 'Rs.122.20'
        }, {
            title: 'Portable Mp3 Player',
            thum_img: 'images/product/ipod_classic_1-200x200.jpg',
            price: 'Rs.122.20'
        }, {
            title: 'Mp3 Player',
            thum_img: 'images/product/ipod_nano_1-200x200.jpg',
            price: 'Rs.122.20'
        }
    ];

    /*-------- product Health and beauty part 6 */

    $scope.e_product_slide_a_health1 = [

        {
            title: 'Hair Care Cream for Men',
            thum_img: 'images/product/iphone_6-200x200.jpg',
            price: 'Rs.134.00'
        }
    ];
    $scope.e_product_slide_a_health2 = [

        {
            title: 'Hair Care Products',
            thum_img: 'images/product/nikon_d300_5-200x200.jpg',
            price: 'Rs.66.80',
            d_price: 'Rs.90.80',
            off_p: '-27%'
        }
    ];
    $scope.e_product_slide_a_health3 = [

        {
            title: 'Bed Head Foxy Curls Contour Cream',
            thum_img: 'images/product/nikon_d300_4-200x200.jpg',
            price: 'Rs.88.00'
        }
    ];
    $scope.e_product_slide_a_health4 = [

        {
            title: 'Shower Gel Perfume for Women',
            thum_img: 'images/product/macbook_5-200x200.jpg',
            price: 'Rs.95.00',
            d_price: 'Rs.99.00',
            off_p: '-4%'
        }
    ];
    $scope.e_product_slide_a_health5 = [

        {
            title: 'Perfumes for Women',
            thum_img: 'images/product/macbook_4-200x200.jpg',
            price: '$85.00'
        }
    ];
    $scope.e_product_slide_a_health6 = [

        {
            title: 'Make Up for Naturally Beautiful Better',
            thum_img: 'images/product/macbook_3-200x200.jpg',
            price: '$123.00'
        }
    ];
    $scope.e_product_slide_a_health7 = [

        {
            title: 'Pnina Tornai Perfume',
            thum_img: 'images/product/macbook_2-200x200.jpg',
            price: 'Rs.110.00'
        }
    ];



    /*-----------------------------------------------------------------------------------------------------------------*/




    /* Product category start*/


    $scope.shop_by_cat = [{
            title: 'Television',
            prdct_img: 'images/product/telivision.jpg'
        },

        {
            title: 'Camera',
            prdct_img: 'images/product/camera.jpg'
        },

        {
            title: 'Home Audio',
            prdct_img: 'images/product/audio.jpg'
        },

        {
            title: 'HeadPhones',
            prdct_img: 'images/product/headphone.jpg'
        }
    ];

    $scope.shop_by_cat2 = [{
            title: 'Projectors',
            prdct_img2: 'images/product/projector.jpg'
        },

        {
            title: 'Speakers',
            prdct_img2: 'images/product/speaker.jpg'
        },

        {
            title: 'Data Storage',
            prdct_img2: 'images/product/data_storage.jpg'
        },

        {
            title: 'Sequerty Equipments',
            prdct_img2: 'images/product/security.jpg'
        }
    ];



    $scope.shop_by_brand = [{
            brnd_img: 'images/brand/samsung.jpg'
        },

        {
            brnd_img: 'images/brand/sony.jpg'
        },

        {
            brnd_img: 'images/brand/lg.jpg'
        },

        {
            brnd_img: 'images/brand/apple.jpg'
        },

        {
            brnd_img: 'images/brand/chrome.jpg'
        },

        {
            brnd_img: 'images/brand/bose.jpg'
        }
    ];

    $scope.shop_by_brand2 = [

        {
            brnd_img2: 'images/brand/braun.jpg'
        },

        {
            brnd_img2: 'images/brand/canon.jpg'
        },

        {
            brnd_img2: 'images/brand/gopro.jpg'
        },

        {
            brnd_img2: 'images/brand/hisense.jpg'
        },

        {
            brnd_img2: 'images/brand/jbl.jpg'
        },

        {
            brnd_img2: 'images/brand/samsung.jpg'
        }
    ];


    /*product category json end*/

    /*product subcategory json start*/
    $scope.sub_cat_offer = [

        {
            labl_dscnt: 'Special Offer',
            labl_cnt: '40'
        }, {
            labl_dscnt: 'Bulk Discount',
            labl_cnt: '25'
        }, {
            labl_dscnt: 'Bulk Discount',
            labl_cnt: '25'
        }, {
            labl_dscnt: 'Store Discount',
            labl_cnt: '85'
        }

    ];

    $scope.sub_cat_brand = [

        {
            sub_brand: 'Alonsa',
            sub_cnt: '1'
        }, {
            sub_brand: 'Bmsatellite',
            sub_cnt: '1'
        }, {
            sub_brand: 'Changhong',
            sub_cnt: '1'
        }, {
            sub_brand: 'Disney',
            sub_cnt: '7'
        }, {
            sub_brand: 'Elekta',
            sub_cnt: '1'
        }, {
            sub_brand: 'Eurostar',
            sub_cnt: '6'
        }, {
            sub_brand: 'Geevox',
            sub_cnt: '1'
        }, {
            sub_brand: 'General Gold',
            sub_cnt: '1'
        }, {
            sub_brand: 'Haier',
            sub_cnt: '1'
        }

    ];

    $scope.sub_cat_screen = [

        {
            sub_screen: '7',
            sub_screen_inchs: '1'
        }, {
            sub_screen: '9.0',
            sub_screen_inchs: '1'
        }, {
            sub_screen: '9.5',
            sub_screen_inchs: '1'
        }, {
            sub_screen: '13.0Inch',
            sub_screen_inchs: '1'
        }, {
            sub_screen: '14Inch',
            sub_screen_inchs: '3'
        }, {
            sub_screen: '15.0Inch',
            sub_screen_inchs: '1'
        }, {
            sub_screen: '17 Inch',
            sub_screen_inchs: '1'
        }, {
            sub_screen: '19 Inch',
            sub_screen_inchs: '1'
        }, {
            sub_screen: '20',
            sub_screen_inchs: '3'
        }

    ];

    $scope.sub_cat_color = [

        {
            sub_color: 'Black',
            sub_color_cnt: '268'
        }, {
            sub_color: 'Blue',
            sub_color_cnt: '1'
        }, {
            sub_color: 'Gold',
            sub_color_cnt: '1'
        }, {
            sub_color: 'Grey',
            sub_color_cnt: '2'
        }, {
            sub_color: 'Pink',
            sub_color_cnt: '1'
        }, {
            sub_color: 'Red',
            sub_color_cnt: '3'
        }, {
            sub_color: 'Silver',
            sub_color_cnt: '15'
        }, {
            sub_color: 'White',
            sub_color_cnt: '1'
        }

    ];

    $scope.sub_cat_typ = [

        {
            sub_typ: 'Android Tv',
            sub_typ_cnt: '9'
        }, {
            sub_typ: 'HD',
            sub_typ_cnt: '1'
        }, {
            sub_typ: 'Smart',
            sub_typ_cnt: '2'
        }, {
            sub_typ: 'Smart3D TV',
            sub_typ_cnt: '3'
        }, {
            sub_typ: 'SmartTv',
            sub_typ_cnt: '41'
        }, {
            sub_typ: 'StandardTv',
            sub_typ_cnt: '32'
        }, {
            sub_typ: '3D Tv',
            sub_typ_cnt: '5'
        }, {
            sub_typ: '4K Uhd',
            sub_typ_cnt: '1'
        }

    ];

    $scope.sub_cat_res = [

        {
            sub_res: '1920X1080',
            sub_res_cnt: '22'
        }, {
            sub_res: '3840X2160',
            sub_res_cnt: '19'
        }, {
            sub_res: '1366X768',
            sub_res_cnt: '15'
        }, {
            sub_res: '3840X2160',
            sub_res_cnt: '9'
        }, {
            sub_res: '1920X180',
            sub_res_cnt: '4'
        }, {
            sub_res: '1280X720',
            sub_res_cnt: '3'
        }, {
            sub_res: '720X576',
            sub_res_cnt: '2'
        }, {
            sub_res: '1024X768',
            sub_res_cnt: '1'
        }, {
            sub_res: '1920X1080(full Hd)',
            sub_res_cnt: '1'
        }

    ];
	    $scope.sub_cat_con = [

        {
            sub_res: 'New',
            sub_res_cnt: '610'
        }, {
            sub_res: 'Used',
            sub_res_cnt: '05'
        }

    ];
	

    $scope.sub_cat_price = [

        {
            sub_price: 'Less than Rs.10,000'
        }, {
            sub_price: 'Rs.10,000 - Rs.30,000'
        }, {
            sub_price: 'Rs.30,000 - Rs.50,000'
        }, {
            sub_price: 'Rs.50,000 - Rs.70,000'
        }, {
            sub_price: 'More Than  Rs.70,000'
        }

    ];

    $scope.sub_cat_prd_th = [

        {
            sub_img: 'images/eye.png',
            sub_prdct_image: 'images/product/Samsung-28-Slim-LED-UA-28J4100-210x210.jpg',
            tittle: 'Samsung 28 Inch HD Slim LED TV (UA-28J4100)',
            str_cnt: '10',
            price_old: 'Rs.50,000.00',
            price_new: 'Rs.25,000.00',
            saving: '50% Off',
            similar: 'See Similar Products'
        }, {
            sub_img: 'images/eye.png',
            sub_prdct_image: 'images/product/Samsung-28-Slim-LED-UA-28J4100-210x210.jpg',
            tittle: 'Samsung 28 Inch HD Slim LED TV (UA-28J4100)',
            str_cnt: '10',
            price_old: 'Rs.50,000.00',
            price_new: 'Rs.25,000.00',
            saving: '50% Off',
            similar: 'See Similar Products'
        }, {
            sub_img: 'images/eye.png',
            sub_prdct_image: 'images/product/Samsung-28-Slim-LED-UA-28J4100-210x210.jpg',
            tittle: 'Samsung 28 Inch HD Slim LED TV (UA-28J4100)',
            str_cnt: '10',
            price_old: 'Rs.50,000.00',
            price_new: 'Rs.25,000.00',
            saving: '50% Off',
            similar: 'See Similar Products'
        }, {
            sub_img: 'images/eye.png',
            sub_prdct_image: 'images/product/Samsung-28-Slim-LED-UA-28J4100-210x210.jpg',
            tittle: 'Samsung 28 Inch HD Slim LED TV (UA-28J4100)',
            str_cnt: '10',
            price_old: 'Rs.50,000.00',
            price_new: 'Rs.25,000.00',
            saving: '50% Off',
            similar: 'See Similar Products'
        }, {
            sub_img: 'images/eye.png',
            sub_prdct_image: 'images/product/Samsung-28-Slim-LED-UA-28J4100-210x210.jpg',
            tittle: 'Samsung 28 Inch HD Slim LED TV (UA-28J4100)',
            str_cnt: '10',
            price_old: 'Rs.50,000.00',
            price_new: 'Rs.25,000.00',
            saving: '50% Off',
            similar: 'See Similar Products'
        }



    ];

    $scope.sub_cat_prd_top = [

        {
            sub_img1: 'images/eye.png',
            sub_prdct_image1: 'images/product/macbook_air_1-210x210.jpg',
            tittle: 'Laptop Silver black',
            str_cnt2: '10',
            price_old2: 'Rs.30,000.00',
            price_new2: 'Rs.28,000.00',
            saving2: '20% Off',
            similar2: 'See Similar Products'
        }, {
            sub_img1: 'images/eye.png',
            sub_prdct_image1: 'images/product/macbook_air_1-210x210.jpg',
            tittle: 'Laptop Silver black',
            str_cnt2: '10',
            price_old2: 'Rs.30,000.00',
            price_new2: 'Rs.28,000.00',
            saving2: '20% Off',
            similar2: 'See Similar Products'
        }, {
            sub_img1: 'images/eye.png',
            sub_prdct_image1: 'images/product/macbook_air_1-210x210.jpg',
            tittle: 'Laptop Silver black',
            str_cnt2: '10',
            price_old2: 'Rs.30,000.00',
            price_new2: 'Rs.28,000.00',
            saving2: '20% Off',
            similar2: 'See Similar Products'
        }, {
            sub_img1: 'images/eye.png',
            sub_prdct_image1: 'images/product/macbook_air_1-210x210.jpg',
            tittle: 'Laptop Silver black',
            str_cnt2: '10',
            price_old2: 'Rs.30,000.00',
            price_new2: 'Rs.28,000.00',
            saving2: '20% Off',
            similar2: 'See Similar Products'
        }, {
            sub_img1: 'images/eye.png',
            sub_prdct_image1: 'images/product/macbook_air_1-210x210.jpg',
            tittle: 'Laptop Silver black',
            str_cnt2: '10',
            price_old2: 'Rs.30,000.00',
            price_new2: 'Rs.28,000.00',
            saving2: '20% Off',
            similar2: 'See Similar Products'
        }

    ];

    $scope.sub_cat_prd_newnes = [

        {
            sub_img_new: 'images/eye.png',
            sub_prdct_image_new: 'images/product/Samsung-28-Slim-LED-UA-28J4100-210x210.jpg',
            tittle: 'Samsung 28 Inch HD Slim LED TV (UA-28J4100)',
            str_cnt_new: '10',
            price_old_new: 'Rs.50,000.00',
            price_newnes: 'Rs.25,000.00',
            saving_new: '50% Off',
            similar_new: 'See Similar Products'
        }, {
            sub_img_new: 'images/eye.png',
            sub_prdct_image_new: 'images/product/Samsung-28-Slim-LED-UA-28J4100-210x210.jpg',
            tittle: 'Samsung 28 Inch HD Slim LED TV (UA-28J4100)',
            str_cnt_new: '10',
            price_old_new: 'Rs.50,000.00',
            price_newnes: 'Rs.25,000.00',
            saving_new: '50% Off',
            similar_new: 'See Similar Products'
        }, {
            sub_img_new: 'images/eye.png',
            sub_prdct_image_new: 'images/product/Samsung-28-Slim-LED-UA-28J4100-210x210.jpg',
            tittle: 'Samsung 28 Inch HD Slim LED TV (UA-28J4100)',
            str_cnt_new: '10',
            price_old_new: 'Rs.50,000.00',
            price_newnes: 'Rs.25,000.00',
            saving_new: '50% Off',
            similar_new: 'See Similar Products'
        }, {
            sub_img_new: 'images/eye.png',
            sub_prdct_image_new: 'images/product/Samsung-28-Slim-LED-UA-28J4100-210x210.jpg',
            tittle: 'Samsung 28 Inch HD Slim LED TV (UA-28J4100)',
            str_cnt_new: '10',
            price_old_new: 'Rs.50,000.00',
            price_newnes: 'Rs.25,000.00',
            saving_new: '50% Off',
            similar_new: 'See Similar Products'
        }, {
            sub_img_new: 'images/eye.png',
            sub_prdct_image_new: 'images/product/Samsung-28-Slim-LED-UA-28J4100-210x210.jpg',
            tittle: 'Samsung 28 Inch HD Slim LED TV (UA-28J4100)',
            str_cnt_new: '10',
            price_old_new: 'Rs.50,000.00',
            price_newnes: 'Rs.25,000.00',
            saving_new: '50% Off',
            similar_new: 'See Similar Products'
        }


    ];

    $scope.sub_cat_prd_newness2 = [

        {
            sub_img_new2: 'images/eye.png',
            sub_prdct_image_new2: 'images/product/macbook_air_1-210x210.jpg',
            tittle: 'Laptop Silver black',
            str_cnt_new2: '10',
            price_old_new2: 'Rs.30,000.00',
            price_newnes2: 'Rs.28,000.00',
            saving_new2: '20% Off',
            similar_new2: 'See Similar Products'
        }, {
            sub_img_new2: 'images/eye.png',
            sub_prdct_image_new2: 'images/product/macbook_air_1-210x210.jpg',
            tittle: 'Laptop Silver black',
            str_cnt_new2: '10',
            price_old_new2: 'Rs.30,000.00',
            price_newnes2: 'Rs.28,000.00',
            saving_new2: '20% Off',
            similar_new2: 'See Similar Products'
        }, {
            sub_img_new2: 'images/eye.png',
            sub_prdct_image_new2: 'images/product/macbook_air_1-210x210.jpg',
            tittle: 'Laptop Silver black',
            str_cnt_new2: '10',
            price_old_new2: 'Rs.30,000.00',
            price_newnes2: 'Rs.28,000.00',
            saving_new2: '20% Off',
            similar_new2: 'See Similar Products'
        }, {
            sub_img_new2: 'images/eye.png',
            sub_prdct_image_new2: 'images/product/macbook_air_1-210x210.jpg',
            tittle: 'Laptop Silver black',
            str_cnt_new2: '10',
            price_old_new2: 'Rs.30,000.00',
            price_newnes2: 'Rs.28,000.00',
            saving_new2: '20% Off',
            similar_new2: 'See Similar Products'
        }, {
            sub_img_new2: 'images/eye.png',
            sub_prdct_image_new2: 'images/product/macbook_air_1-210x210.jpg',
            tittle: 'Laptop Silver black',
            str_cnt_new2: '10',
            price_old_new2: 'Rs.30,000.00',
            price_newnes2: 'Rs.28,000.00',
            saving_new2: '20% Off',
            similar_new2: 'See Similar Products'
        }

    ];


    /*product subcategory json end*/

    /*product subcategory compare json start*/


    $scope.sub_cat_compbrand = [

        {
            sub_brand: 'Alonsa',
            sub_cnt: '1'
        }, {
            sub_brand: 'Bmsatellite',
            sub_cnt: '1'
        }, {
            sub_brand: 'Changhong',
            sub_cnt: '1'
        }, {
            sub_brand: 'Disney',
            sub_cnt: '7'
        }, {
            sub_brand: 'Elekta',
            sub_cnt: '1'
        }, {
            sub_brand: 'Eurostar',
            sub_cnt: '6'
        }, {
            sub_brand: 'Geevox',
            sub_cnt: '1'
        }, {
            sub_brand: 'General Gold',
            sub_cnt: '1'
        }, {
            sub_brand: 'Haier',
            sub_cnt: '1'
        }

    ];

    $scope.sub_cat_compscreen = [

        {
            sub_screen: '7',
            sub_screen_inchs: '1'
        }, {
            sub_screen: '9.0',
            sub_screen_inchs: '1'
        }, {
            sub_screen: '9.5',
            sub_screen_inchs: '1'
        }, {
            sub_screen: '13.0Inch',
            sub_screen_inchs: '1'
        }, {
            sub_screen: '14Inch',
            sub_screen_inchs: '3'
        }, {
            sub_screen: '15.0Inch',
            sub_screen_inchs: '1'
        }, {
            sub_screen: '17 Inch',
            sub_screen_inchs: '1'
        }, {
            sub_screen: '19 Inch',
            sub_screen_inchs: '1'
        }, {
            sub_screen: '20',
            sub_screen_inchs: '3'
        }

    ];

    $scope.sub_cat_compcolor = [

        {
            sub_color: 'Black',
            sub_color_cnt: '268'
        }, {
            sub_color: 'Blue',
            sub_color_cnt: '1'
        }, {
            sub_color: 'Gold',
            sub_color_cnt: '1'
        }, {
            sub_color: 'Grey',
            sub_color_cnt: '2'
        }, {
            sub_color: 'Pink',
            sub_color_cnt: '1'
        }, {
            sub_color: 'Red',
            sub_color_cnt: '3'
        }, {
            sub_color: 'Silver',
            sub_color_cnt: '15'
        }, {
            sub_color: 'White',
            sub_color_cnt: '1'
        }

    ];

    $scope.sub_cat_comptyp = [

        {
            sub_typ: 'Android Tv',
            sub_typ_cnt: '9'
        }, {
            sub_typ: 'HD',
            sub_typ_cnt: '1'
        }, {
            sub_typ: 'Smart',
            sub_typ_cnt: '2'
        }, {
            sub_typ: 'Smart3D TV',
            sub_typ_cnt: '3'
        }, {
            sub_typ: 'SmartTv',
            sub_typ_cnt: '41'
        }, {
            sub_typ: 'StandardTv',
            sub_typ_cnt: '32'
        }, {
            sub_typ: '3D Tv',
            sub_typ_cnt: '5'
        }, {
            sub_typ: '4K Uhd',
            sub_typ_cnt: '1'
        }

    ];

    $scope.sub_cat_compres = [

        {
            sub_res: '1920X1080',
            sub_res_cnt: '22'
        }, {
            sub_res: '3840X2160',
            sub_res_cnt: '19'
        }, {
            sub_res: '1366X768',
            sub_res_cnt: '15'
        }, {
            sub_res: '3840X2160',
            sub_res_cnt: '9'
        }, {
            sub_res: '1920X180',
            sub_res_cnt: '4'
        }, {
            sub_res: '1280X720',
            sub_res_cnt: '3'
        }, {
            sub_res: '720X576',
            sub_res_cnt: '2'
        }, {
            sub_res: '1024X768',
            sub_res_cnt: '1'
        }, {
            sub_res: '1920X1080(full Hd)',
            sub_res_cnt: '1'
        }

    ];

    $scope.sub_cat_compprice = [

        {
            sub_price: 'Less than Rs.10,000'
        }, {
            sub_price: 'Rs.10,000 - Rs.30,000'
        }, {
            sub_price: 'Rs.30,000 - Rs.50,000'
        }, {
            sub_price: 'Rs.50,000 - Rs.70,000'
        }, {
            sub_price: 'More Than  Rs.70,000'
        }

    ];

    $scope.sub_cat_prd_th1 = [

        {
            sub_img: 'images/eye.png',
            sub_prdct_image: 'images/product/Samsung-28-Slim-LED-UA-28J4100-210x210.jpg',
            tittle: 'Samsung 28 Inch HD Slim LED TV (UA-28J4100)',
            str_cnt: '10',
            price_old: 'Rs.50,000.00',
            price_new: 'Rs.25,000.00',
            saving: '50% Off',
            similar: 'See Similar Products'
        }, {
            sub_img: 'images/eye.png',
            sub_prdct_image: 'images/product/Samsung-28-Slim-LED-UA-28J4100-210x210.jpg',
            tittle: 'Samsung 28 Inch HD Slim LED TV (UA-28J4100)',
            str_cnt: '10',
            price_old: 'Rs.50,000.00',
            price_new: 'Rs.25,000.00',
            saving: '50% Off',
            similar: 'See Similar Products'
        }, {
            sub_img: 'images/eye.png',
            sub_prdct_image: 'images/product/Samsung-28-Slim-LED-UA-28J4100-210x210.jpg',
            tittle: 'Samsung 28 Inch HD Slim LED TV (UA-28J4100)',
            str_cnt: '10',
            price_old: 'Rs.50,000.00',
            price_new: 'Rs.25,000.00',
            saving: '50% Off',
            similar: 'See Similar Products'
        }, {
            sub_img: 'images/eye.png',
            sub_prdct_image: 'images/product/Samsung-28-Slim-LED-UA-28J4100-210x210.jpg',
            tittle: 'Samsung 28 Inch HD Slim LED TV (UA-28J4100)',
            str_cnt: '10',
            price_old: 'Rs.50,000.00',
            price_new: 'Rs.25,000.00',
            saving: '50% Off',
            similar: 'See Similar Products'
        }, {
            sub_img: 'images/eye.png',
            sub_prdct_image: 'images/product/Samsung-28-Slim-LED-UA-28J4100-210x210.jpg',
            tittle: 'Samsung 28 Inch HD Slim LED TV (UA-28J4100)',
            str_cnt: '10',
            price_old: 'Rs.50,000.00',
            price_new: 'Rs.25,000.00',
            saving: '50% Off',
            similar: 'See Similar Products'
        }

    ];

    $scope.sub_cat_prd_top1 = [

        {
            sub_img1: 'images/eye.png',
            sub_prdct_image1: 'images/product/macbook_air_1-210x210.jpg',
            tittle: 'Laptop Silver black',
            str_cnt2: '10',
            price_old2: 'Rs.30,000.00',
            price_new2: 'Rs.28,000.00',
            saving2: '20% Off',
            similar2: 'See Similar Products'
        }, {
            sub_img1: 'images/eye.png',
            sub_prdct_image1: 'images/product/macbook_air_1-210x210.jpg',
            tittle: 'Laptop Silver black',
            str_cnt2: '10',
            price_old2: 'Rs.30,000.00',
            price_new2: 'Rs.28,000.00',
            saving2: '20% Off',
            similar2: 'See Similar Products'
        }, {
            sub_img1: 'images/eye.png',
            sub_prdct_image1: 'images/product/macbook_air_1-210x210.jpg',
            tittle: 'Laptop Silver black',
            str_cnt2: '10',
            price_old2: 'Rs.30,000.00',
            price_new2: 'Rs.28,000.00',
            saving2: '20% Off',
            similar2: 'See Similar Products'
        }, {
            sub_img1: 'images/eye.png',
            sub_prdct_image1: 'images/product/macbook_air_1-210x210.jpg',
            tittle: 'Laptop Silver black',
            str_cnt2: '10',
            price_old2: 'Rs.30,000.00',
            price_new2: 'Rs.28,000.00',
            saving2: '20% Off',
            similar2: 'See Similar Products'
        }, {
            sub_img1: 'images/eye.png',
            sub_prdct_image1: 'images/product/macbook_air_1-210x210.jpg',
            tittle: 'Laptop Silver black',
            str_cnt2: '10',
            price_old2: 'Rs.30,000.00',
            price_new2: 'Rs.28,000.00',
            saving2: '20% Off',
            similar2: 'See Similar Products'
        }

    ];



    $scope.sub_cat_prd_newnes1 = [

        {
            sub_img_new: 'images/eye.png',
            sub_prdct_image_new: 'images/product/Samsung-28-Slim-LED-UA-28J4100-210x210.jpg',
            tittle: 'Samsung 28 Inch HD Slim LED TV (UA-28J4100)',
            str_cnt_new: '10',
            price_old_new: 'Rs.50,000.00',
            price_newnes: 'Rs.25,000.00',
            saving_new: '50% Off',
            similar_new: 'See Similar Products'
        }, {
            sub_img_new: 'images/eye.png',
            sub_prdct_image_new: 'images/product/Samsung-28-Slim-LED-UA-28J4100-210x210.jpg',
            tittle: 'Samsung 28 Inch HD Slim LED TV (UA-28J4100)',
            str_cnt_new: '10',
            price_old_new: 'Rs.50,000.00',
            price_newnes: 'Rs.25,000.00',
            saving_new: '50% Off',
            similar_new: 'See Similar Products'
        }, {
            sub_img_new: 'images/eye.png',
            sub_prdct_image_new: 'images/product/Samsung-28-Slim-LED-UA-28J4100-210x210.jpg',
            tittle: 'Samsung 28 Inch HD Slim LED TV (UA-28J4100)',
            str_cnt_new: '10',
            price_old_new: 'Rs.50,000.00',
            price_newnes: 'Rs.25,000.00',
            saving_new: '50% Off',
            similar_new: 'See Similar Products'
        }, {
            sub_img_new: 'images/eye.png',
            sub_prdct_image_new: 'images/product/Samsung-28-Slim-LED-UA-28J4100-210x210.jpg',
            tittle: 'Samsung 28 Inch HD Slim LED TV (UA-28J4100)',
            str_cnt_new: '10',
            price_old_new: 'Rs.50,000.00',
            price_newnes: 'Rs.25,000.00',
            saving_new: '50% Off',
            similar_new: 'See Similar Products'
        }, {
            sub_img_new: 'images/eye.png',
            sub_prdct_image_new: 'images/product/Samsung-28-Slim-LED-UA-28J4100-210x210.jpg',
            tittle: 'Samsung 28 Inch HD Slim LED TV (UA-28J4100)',
            str_cnt_new: '10',
            price_old_new: 'Rs.50,000.00',
            price_newnes: 'Rs.25,000.00',
            saving_new: '50% Off',
            similar_new: 'See Similar Products'
        }


    ];


    $scope.sub_cat_prd_newness22 = [

        {
            sub_img_new2: 'images/eye.png',
            sub_prdct_image_new2: 'images/product/macbook_air_1-210x210.jpg',
            tittle: 'Laptop Silver black',
            str_cnt_new2: '10',
            price_old_new2: 'Rs.30,000.00',
            price_newnes2: 'Rs.28,000.00',
            saving_new2: '20% Off',
            similar_new2: 'See Similar Products'
        }, {
            sub_img_new2: 'images/eye.png',
            sub_prdct_image_new2: 'images/product/macbook_air_1-210x210.jpg',
            tittle: 'Laptop Silver black',
            str_cnt_new2: '10',
            price_old_new2: 'Rs.30,000.00',
            price_newnes2: 'Rs.28,000.00',
            saving_new2: '20% Off',
            similar_new2: 'See Similar Products'
        }, {
            sub_img_new2: 'images/eye.png',
            sub_prdct_image_new2: 'images/product/macbook_air_1-210x210.jpg',
            tittle: 'Laptop Silver black',
            str_cnt_new2: '10',
            price_old_new2: 'Rs.30,000.00',
            price_newnes2: 'Rs.28,000.00',
            saving_new2: '20% Off',
            similar_new2: 'See Similar Products'
        }, {
            sub_img_new2: 'images/eye.png',
            sub_prdct_image_new2: 'images/product/macbook_air_1-210x210.jpg',
            tittle: 'Laptop Silver black',
            str_cnt_new2: '10',
            price_old_new2: 'Rs.30,000.00',
            price_newnes2: 'Rs.28,000.00',
            saving_new2: '20% Off',
            similar_new2: 'See Similar Products'
        }, {
            sub_img_new2: 'images/eye.png',
            sub_prdct_image_new2: 'images/product/macbook_air_1-210x210.jpg',
            tittle: 'Laptop Silver black',
            str_cnt_new2: '10',
            price_old_new2: 'Rs.30,000.00',
            price_newnes2: 'Rs.28,000.00',
            saving_new2: '20% Off',
            similar_new2: 'See Similar Products'
        }

    ];


    /*product subcategory compare json end*/

/*product detail json start*/
	
	$scope.discript_h3='Obi Worldphone SJ5.1 Dual Sim 16 GB Smartphone';
	$scope.discript_review='105';
	$scope.discript_alreadysold='160 already sold';
	$scope.discript_price='Price:';
	$scope.discript_price_old='Rs.1,202.00';
	$scope.discript_pric='Rs.1,142.00';
	$scope.discript_off='3% Off';
	$scope.discript_Ship='Shiping:';
	$scope.discript_lbl='Rs 150 to';
	$scope.discript_lbl1='Kathmandu Inside Ring Road via SID Standard Delivery';
	$scope.discript_p1='Estimated Delivery Time: 1-3 days (ships out within 3 business days)';
	$scope.discript_buy='Buy Now';
	$scope.discript_add='Add to Favourite';
	$scope.discript_comp='Compare';
	$scope.discript_coupan='COUPON';
	$scope.discript_gt='Get';
	$scope.discript_dsc='5% discount';
	$scope.discript_sellinf='Seller Information';
	$scope.discript_sellimg='images/product/mic.png';
	$scope.discript_ob='obiw';
	$scope.discript_obtitle='Selling for 2 years';
	$scope.discript_cnt='(10)';
	$scope.discript_crctimg='images/checkd.png';
	$scope.discript_dscrpt='Description:';
	$scope.discript_dscrption='Easy multitasking with faster SJ1.5s Quad-core MediaTek processor, Stay connected, always ready with 3,000 mAh battery,  SJ1.5 comes with 16GB of internal storage and a MicroSD™ tray, Dual SIM, Know your position with an A-GPS sensor that helps navigate';
	
	$scope.discript_fetre = [
        		
		{title:'Designed for living',decrip:'Obi Worldphone SJ1.5 is built to go with you. The beautifully designed slim body is supercharged with long battery life, screen protection and never fail reliability. SJ1.5 gives you everything you need to be on top of it all.', drcip_mg:'images/mobile/tab_mo1.jpg'}
				
    ];
	
	
	$scope.discript_fetre1 = [
	
	{drcip_mg1:'images/mobile/tab_mo2.jpg',title1:'Distinctive style', decrip1:'You can recognise Obi Worldphone SJ1.5 from across the room. Quality materials, carefully applied splashes of color and extra sharp finishes show off your smart choice. An instantly recognisable shape breaks the mold. With a crisp, squared-off top and a curved bottom that gives it a distinctive look and feel, SJ1.5 is modern fun that never grows old.'}
				
    ];
	
	$scope.discript_fetre2 = [
	
	{title2:'Ahead of the curve',decrip2:'Obi Worldphone SJ1.5 has a vivid curved glass display, built flush with the body for a comfortable feel. The brilliant 5" high-definition screen is made for multimedia. Enjoy video, images and games in excellent clarity everywhere you go protected by scratch-resistant Corning® Gorilla® Glass 3. 5"High-Definition(1280 x 720 pixels) IPSIn-plane switching -accurate color at any angle. red-off top and a curved bottom that gives it a distinctive look and feel, SJ1.5 is modern fun that never grows old.',drcip_mg2:'images/mobile/tab_mo3.jpg'}
				
    ];
	
	
	
	$scope.discript_fetcntr='Sharp design. Sharper photos';
	
	
	$scope.discript_fetreprodu = [
        		
		{title:'8MP camera with LED flash ',produ_tx:'An OmniVision sensor delivers best-in-class pixel performance while using less power.'},
		{title:'5MP front-facing camera ',produ_tx:'For crystal clear video chat and better Selfies'}
		
		
					
    ];
	$scope.discript_mo4mg='images/mobile/tab_mo4.jpg';
	
	
	$scope.discript_color = [
        		
		{avil_color:'Black'},
		{avil_color:'Red'},
		{avil_color:'Blue'}
					
    ];
	$scope.discript_size = [
        		
		{avil_size:'S'},
		{avil_size:'M'},
		{avil_size:'L'},
		{avil_size:'XL'},
		{avil_size:'XXL'}
					
    ];
	
	$scope.shipin = [
        		
		{rs:'S',ttle:'Kathmandu Inside Ring Road via SID Standard Delivery',est:'Estimated Delivery Time: 1-3 days (ships out within 3 business days)'}
			
    ];
	$scope.copon = [
        		
		{ttle:'COUPON',gt:'Get',dsc:'5% discount',perrupee:'per Rs. 1500'}
			
    ];
	$scope.sellerinfo = [
        		
		{ttle:'Seller Information',sell_img:'images/product/mic.png',title2:'Selling for 2 years',cnt:'10', check_img:'images/checkd.png',verif:'Verified by SID [?]'}
			
    ];
	$scope.visit_sto = [
        		
		{stor_img1:'images/store.png',title:'Visit Store'},
		{stor_img1:'images/user_ plus.png',title:' Follow Seller'},
		{stor_img1:'images/chart.png',title:'Chat with Seller'},
    ];
	
	$scope.user = [
        	
				
		{stor_img:'images/user_ico/user1.jpg'},
		{stor_img:'images/user_ico/user2.jpg'},
		{stor_img:'images/user_ico/user3.jpg'},
		{stor_img:'images/user_ico/user4.jpg'},
		{stor_img:'images/user_ico/user5.jpg'},
		{stor_img:'images/user_ico/user6.jpg'},
		{stor_img:'images/user_ico/user7.jpg'},
		{stor_img:'images/user_ico/user8.jpg'},
		{stor_img:'images/user_ico/user5.jpg'},
		{stor_img:'images/user_ico/userN.jpg'},
		{stor_img:'images/user_ico/userH.jpg'},
		{stor_img:'images/user_ico/user9.jpg'},
		{stor_img:'images/user_ico/user10.jpg'},
		{stor_img:'images/user_ico/user11.jpg'},
		{stor_img:'images/user_ico/user12.jpg'},
		{stor_img:'images/user_ico/user13.jpg'},
		{stor_img:'images/user_ico/user14.jpg'},
		{stor_img:'images/user_ico/user15.jpg'},
		{stor_img:'images/user_ico/user16.jpg'},
		{stor_img:'images/user_ico/user17.jpg'},
		{stor_img:'images/user_ico/user18.jpg'},
		{stor_img:'images/user_ico/user19.jpg'},
		{stor_img:'images/user_ico/user3.jpg'},
		{stor_img:'images/user_ico/user20.jpg'},
		{stor_img:'images/user_ico/user21.jpg'},
		{stor_img:'images/user_ico/user22.jpg'},
		{stor_img:'images/user_ico/user23.jpg'},
		{stor_img:'images/user_ico/user8.jpg'},
		{stor_img:'images/user_ico/user5.jpg'},
		{stor_img:'images/user_ico/user22.jpg'}
	
    ];
	
	$scope.visit_sto1 = [
        		
		{crs_img:'images/product/samsung_tab_1-200x200.jpg',title:'Aspire Ultrabook Laptop',price_new:'$241.99',price_old:'$230.00',save:'-5%',btntxt:'Add to Cart'},
		{crs_img:'images/product/macbook_pro_1-200x200.jpg',title:'Strategies for Acquiring Your Own Laptop',price_new:'$1,400.00',price_old:'$1,900.00',save:'26%',btntxt:'Add to Cart'},
		{crs_img:'images/product/macbook_1-200x200.jpg',title:'Ideapad Yoga 13-59341124 Laptop',pric:'$2.00',btntxt:'Add to Cart'},
		{crs_img:'images/product/ipod_shuffle_1-200x200.jpg',title:'Hp Pavilion G6 2314ax Notebok Laptop',pric:'$122.00',btntxt:'Add to Cart'},
		{crs_img:'images/product/ipod_touch_1-200x200.jpg',title:'Samsung Galaxy S4',price_new:'$62.00',price_old:'$122.00',save:'-50%',btntxt:'Add to Cart'},
		{crs_img:'images/product/ipod_shuffle_1-200x200.jpg',title:'Hp Pavilion G6 2314ax Notebok Laptop',pric:'$122.00',btntxt:'Add to Cart'},
    ];
	
	
	$scope.prod_detl = [
        		
		{title:'Memory',tex1:'test 1',tex2:'8gb'},
		{title:'Processor',tex1:'No. of Cores',tex2:'1'},
		
    ];
	
	
	$scope.prod_review = [
        		
		{title:'harvey',tex_dte:'20/01/2016',tex2:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
				
		{title:'Andrson',tex_dte:'20/01/2016',tex2:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
		
    ];
	
	
	$scope.discript_yorev='Write a review';
	$scope.discript_yornm='Your Name';
	$scope.discript_yorevw='Your Review';
	$scope.discript_notee='Note:';
	$scope.discript_btncnt='Continue';
	
	
	/*product detail json end*/


    /*------------------------------------------------Json Data----------------------------------------------------------------------*/


 $scope.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
   }

});

// Image Zoom Controller In Angular
app.controller('EZPlusCtrl', function ($scope, $location) {
        $scope.imagesForGallery = [];
        $scope.setApproot = function(appRoot) {
            //only change when needed.
            if ($scope.approot && appRoot === $scope.approot) {
                return;
            }
            $scope.approot = appRoot;
            $scope.imagesForGallery = [
                {
                    thumb: appRoot + 'images/mobile/mo_th1.png',
                    small: appRoot + 'images/mobile/mo_img_sm1.jpg',
                    large: appRoot + 'images/mobile/mo_img_lg1.jpg'
                },
                {
                    thumb: appRoot + 'images/mobile/mo_th2.png',
                    small: appRoot + 'images/mobile/mo_img_sm2.jpg',
                    large: appRoot + 'images/mobile/mo_img_lg2.jpg'
                },
                {
                    thumb: appRoot + 'images/mobile/mo_th3.png',
                    small: appRoot + 'images/mobile/mo_img_sm3.jpg',
                    large: appRoot + 'images/mobile/mo_img_lg3.jpg'
                },
                {
                    thumb: appRoot + 'images/mobile/mo_th4.png',
                    small: appRoot + 'images/mobile/mo_img_sm4.jpg',
                    large: appRoot + 'images/mobile/mo_img_lg4.jpg'
                }
                
            ];

            $scope.zoomModel1 = $scope.imagesForGallery[0];
            //$scope.zoomModel2 = $scope.imagesForGallery[1];

            $scope.zoomModelGallery01 = $scope.imagesForGallery[0];
            //$scope.zoomModelGallery04 = $scope.imagesForGallery[1];
        };

        //default
        $scope.setApproot('');

        $scope.zoomOptions = {
            scrollZoom: true,
            zoomWindowWidth: 600,
            zoomWindowHeight: 600,
            easing: true,
            zoomWindowFadeIn: 500,
            zoomWindowFadeOut: 500,
            lensFadeIn: 500,
            lensFadeOut: 500,

            initial: 'small'
        };

        $scope.zoomOptionsGallery01 = {
            scrollZoom: true,
            zoomWindowWidth: 600,
            zoomWindowHeight: 600,
            easing: true,
            zoomWindowFadeIn: 500,
            zoomWindowFadeOut: 500,
            lensFadeIn: 500,
            lensFadeOut: 500,

            initial: 'small',

            gallery: 'gallery_01',
            cursor: 'crosshair',
            galleryActiveClass: "active",
            imageCrossfade: true,
            loadingIcon: false
        };

       /* $scope.zoomOptionsGallery04 = {
            scrollZoom: true,
            zoomWindowWidth: 600,
            zoomWindowHeight: 600,
            easing: true,
            zoomWindowFadeIn: 500,
            zoomWindowFadeOut: 500,
            lensFadeIn: 500,
            lensFadeOut: 500,

            initial: 'small',

            gallery: 'gallery_04',
            cursor: 'pointer',
            galleryActiveClass: "active",
            imageCrossfade: true,
            loadingIcon: false
        };*/

        $scope.zoomModel1 = $scope.imagesForGallery[0];
        //$scope.zoomModel2 = $scope.imagesForGallery[1];

        $scope.zoomModelGallery01 = $scope.imagesForGallery[1];
        //$scope.zoomModelGallery04 = $scope.imagesForGallery[1];
        $scope.setActiveImageInGallery = function (prop, img) {
            $scope[prop] = img;
        };
    });





// I lazily load Directive the images, when they come into view.

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

// OwlCarousel Directive Settings

app.directive("owlCarousel", function() {
    return {
        restrict: 'E',
        transclude: false,
        link: function(scope) {
            scope.initCarousel = function(element) {
                // provide any default options you want
                var defaultOptions = {
                    /*autoPlay: 5000, 
                    stopOnHover: true,
                    slideSpeed : 300, ;*/
                    paginationSpeed : 400,
                    navigation : true,
                    navigationText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
                    lazyLoad : true
					
                };

                var customOptions = scope.$eval($(element).attr('data-options'));
                // combine the two options objects
                for (var key in customOptions) {
                    defaultOptions[key] = customOptions[key];
                }

                // init carousel
                $(element).owlCarousel(defaultOptions)
                    //Check if already carousel made then destroy

            }

        }
    };
});

app.directive('owlCarouselItem', [function() {
    return {
        restrict: 'A',
        transclude: false,
        link: function(scope, element) {
            // wait for the last item in the ng-repeat then call init
            if (scope.$last) {
                scope.initCarousel(element.parent());

            }
        }
    };
}]);

// Template url Config

app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "template/main.html"
        })
        .when("/product_category", {
            templateUrl: "template/product_category.html"
        })
        .when("/product_sub_category", {
            templateUrl: "template/product_sub_category.html"
        })
        .when("/product_sub_category_compare", {
            templateUrl: "template/product_sub_category_compare.html"
        })
        .when("/product_details_page", {
            templateUrl: "template/product_details_page.html"
        });
    /* .otherwise({
      redirectTo: '/'
    });*/

});

// All Modal config with Angular
app.config(function($stateProvider){
  $stateProvider.state("Base", {});

  $stateProvider.state("Modal", {
    views:{
      "modal": {
        templateUrl: "modal.html"
      }
    },
    onEnter: function($state){
      // Hitting the ESC key closes the modal
      $(document).on('keyup', function(e){
        if(e.keyCode == 27){
          $(document).off('keyup')
          $state.go('Base')
        }
      });

      // Clicking outside of the modal closes it
      $(document).on('click', '.Modal-backdrop, .Modal-holder', function() {
        $state.go('Base');
      });

      // Clickin on the modal or it's contents doesn't cause it to close
      $(document).on('click', '.Modal-box, .Modal-box *', function(e) {
        e.stopPropagation();
      });
	  $(document).on('click', '.Modal-box, .close *', function(e) {
       $state.go('Base');
      });
    },
    abstract: true
  });

  $stateProvider.state("Modal.confirmAddToCart", {
    views:{
      "modal": {
        templateUrl: "include/login.html"
      }
    }
  });

  $stateProvider.state("Modal.registration", {
    views:{
      "modal": {
        templateUrl: "include/registration.html"
      }
    }
  });
  
   $stateProvider.state("Modal.productmodel", {
    views:{
      "modal": {
        templateUrl: "include/productmodel.html"
      }
    }
  });
  $stateProvider.state("Modal.forgot", {
    views:{
      "modal": {
        templateUrl: "include/forgotmodel.html"
      }
    }
	
  });
  $stateProvider.state("Modal.shiping", {
    views:{
      "modal": {
        templateUrl: "include/ship_modal.html"
      }
    }
	
  });
})






