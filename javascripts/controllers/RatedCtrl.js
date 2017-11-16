"use strict";

app.controller("RatedCtrl", function($rootScope, $scope, MovieService){
	$scope.movies = [];

	const getMovies = () => {
		MovieService.getRatedMovies($rootScope.uid).then((result) => {
			$scope.movies = result;
		}).catch((err) => {
			console.log("error in deleteMovie", err);
		});
	};

	getMovies();


	$scope.deleteMovie = (movieId) => {
		MovieService.deleteMovie(movieId).then((result) => {
			console.log("result", result);
		}).catch((err) => {
			console.log("error in deleteMovie", err);
		});
	};

});