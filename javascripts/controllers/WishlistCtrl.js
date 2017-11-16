"use strict";

app.controller("WishlistCtrl", function($rootScope, $scope, MovieService){

		MovieService.getRatedMovies($rootScope.uid).then((results) => {
		$scope.movies = results;
	}).catch((err) => {
		console.log("error from getRatedMovies", err);
	});
});
