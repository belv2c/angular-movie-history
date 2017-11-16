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
	return {getRatedMovies};
});