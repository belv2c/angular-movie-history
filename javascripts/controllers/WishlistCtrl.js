"use strict";

app.controller("WishlistCtrl", function($rootScope, $scope, MovieService){


const getMovies = () => {
		MovieService.getRatedMovies($rootScope.uid).then((results) => {
		$scope.movies = results;
	}).catch((err) => {
		console.log("error from getRatedMovies", err);
	});
};

	getMovies();

		$scope.deleteMovie = (movieId) => {
		MovieService.deleteMovie(movieId).then((result) => {
			getMovies();
		}).catch((err) => {
			console.log("error in deleteMovie", err);
		});
	};
});
