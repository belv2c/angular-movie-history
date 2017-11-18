"use strict";

// angular has its own promise library called $q
// $http replaces $.ajax

app.service("MovieService", function($http, $q, FIREBASE_CONFIG){
	const getRatedMovies = (userUid) => {
		let movies = [];
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/movies.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
				  let fbMovies = results.data;
				Object.keys(fbMovies).forEach((key) => {
					// key = "movies0"
  				  fbMovies[key].id = key;	// fbMovies["movies0"].id = "movies0"
  				  if(fbMovies[key].isWatched){
  				  movies.push(fbMovies[key]);
  				}
  				resolve(movies);

  			});
			}).catch((err) => {
				reject(err);
			});
		});
	};



const getWishlistMovies = (userUid) => {
		let movies = [];
		return $q((resolve, reject) => {
			$http.get(`${FIREBASE_CONFIG.databaseURL}/movies.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
				  let fbMovies = results.data;
				Object.keys(fbMovies).forEach((key) => {
					// key = "movies0"
  				  fbMovies[key].id = key;	// fbMovies["movies0"].id = "movies0"
  				  if(!fbMovies[key].isWatched){
  				  movies.push(fbMovies[key]);
  				}
  			});
  			resolve(movies);
			}).catch((err) => {
				reject(err);
			});
		});
	};


	const postNewMovie = (newMovie) => {
		return $http.post(`${FIREBASE_CONFIG.databaseURL}/movies.json`, JSON.stringify(newMovie));
	};

	const deleteMovie = (movieId) => {
		return $http.delete(`${FIREBASE_CONFIG.databaseURL}/movies/${movieId}.json`);
	};

	const updateMovie = (movie, movieId) => {
		return $http.put(`${FIREBASE_CONFIG.databaseURL}/movies/${movieId}.json`, JSON.stringify(movie));
	};


		const createMovieObject = (movie) => {
		return {
			"title": movie.title,
			"overview": movie.overview,
			"poster_path": movie.poster_path,
			"rating": movie.rating,
			"isWatched": movie.isWatched,
			"uid": movie.uid
		};

	};

	const getSingleMovie = (movieId) => {
		return $http.get(`${FIREBASE_CONFIG.databaseURL}/movies/${movieId}.json`);
	};

	return {getSingleMovie, getRatedMovies, getWishlistMovies, postNewMovie, deleteMovie, updateMovie, createMovieObject};
});




