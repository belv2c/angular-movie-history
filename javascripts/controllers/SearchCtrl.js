"use strict";

app.controller("SearchCtrl", function($location, $rootScope, $scope, MovieService, tmdbService){
	$scope.movies = [];




	$scope.enterPush = (event) => {
		if(event.keyCode === 13){
		tmdbService.searchMovies(event.target.value).then((results) => {
			$scope.movies = results.data.results;
		console.log("movies?", results.data.results);
	}).catch((error) => {
		console.log("error in searchMovies", error);
	});
  }
};



$scope.saveRated = (tmdbMovie) => {
	tmdbMovie.uid = $rootScope.uid;
	tmdbMovie.isWatched = true;
	tmdbMovie.rating = 0;
	let newMovie = MovieService.createMovieObject(tmdbMovie);
	MovieService.postNewMovie(newMovie).then(() => {
		$location.path('/rated');
	}).catch((err) => {
		console.log("error in postNewMovie", err);
	});
};

$scope.saveWishlist = (tmdbMovie) => {
	tmdbMovie.uid = $rootScope.uid;
	tmdbMovie.isWatched = false;
	tmdbMovie.rating = 0;
	let newMovie = MovieService.createMovieObject(tmdbMovie);
	MovieService.postNewMovie(newMovie).then(() => {
		$location.path('/mine');
	}).catch((err) => {
		console.log("error in postNewMovie", err);
	});
};





});