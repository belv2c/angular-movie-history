"use strict";

//runs one time per application after the app config
app.run(function($rootScope, FIREBASE_CONFIG, tmdbService){
	firebase.initializeApp(FIREBASE_CONFIG);

	tmdbService.tmdbConfiguration().then((result) => {
		$rootScope.image_url = result.data.images.base_url;
	}).catch((error) => {
		console.log("error in tmdbConfiguration", error);
	});
});


app.config(function($routeProvider){
	$routeProvider
		.when("/auth", {
			// path to html file and path to javascript file
			templateUrl: 'partials/auth.html',
			controller: 'AuthCtrl'
		})
		.when("/search", {
			// path to html file and path to javascript file
			templateUrl: 'partials/search.html',
			controller: 'SearchCtrl'
		})
		.when("/mine", {
			// path to html file and path to javascript file
			templateUrl: 'partials/wishlist.html',
			controller: 'WishlistCtrl'
		})
		.when("/rated", {
			// path to html file and path to javascript file
			templateUrl: 'partials/rated.html',
			controller: 'RatedCtrl'
		})
		// if your user tries to type in any other route besides what you've defined you can redirect them
		.otherwise('/auth');
});