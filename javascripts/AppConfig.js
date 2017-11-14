"use strict";

//runs one time per application after the app config
app.run(function(FIREBASE_CONFIG){
	firebase.initializeApp(FIREBASE_CONFIG);
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
		.when("/wishlist", {
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