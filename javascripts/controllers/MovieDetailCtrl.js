"use strict";

app.controller("MovieDetailCtrl", function($routeParams, $scope, MovieService) {
	$scope.movie = {};

	//need to grab movie ID out of the URl
	//grabbed from appconfig /movie/:id
	console.log("MovieId", $routeParams.id);

const getMovie = () => {
	MovieService.getSingleMovie($routeParams.id).then((result) => {
		$scope.movie = result.data;
	}).catch((err) => {
		console.log("err in getSingleMovie", err);
	});
};

getMovie();


	$scope.switchWatched = (movie) => {
		movie.isWatched = true;
		let updateMovie = MovieService.createMovieObject(movie);
		MovieService.updateMovie(updateMovie, $routeParams.id).then((result) => {
			getMovie();
		}).catch((err) => {
			console.log("error in updateMovie", err);
		});
	};

	$scope.starChange = (event, movie) => {
		if (event.rating) {
			movie.rating = event.rating;
			let updateMovie = MovieService.createMovieObject(movie);
			MovieService.updateMovie(updateMovie, $routeParams.id).then(() => {
				getMovie();
			}).catch((err) => {
				console.log("error in updateMovie", err);
			});
		}
	};

});