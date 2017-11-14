"use strict";

// takes name and function
// services will always have something returned out of it
app.service("AuthService", function() {
	const authenticateGoogle = () => {
   	 const provider = new firebase.auth.GoogleAuthProvider();
     return firebase.auth().signInWithPopup(provider);
	};
	return {authenticateGoogle};
});