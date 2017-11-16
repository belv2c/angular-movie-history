"use strict";

// takes name and function
// services will always have something returned out of it
app.service("AuthService", function() {
	const authenticateGoogle = () => {
   	 const provider = new firebase.auth.GoogleAuthProvider();
     return firebase.auth().signInWithPopup(provider);
	};

// is there a firebase user? true or false
	const isAuthenticated = () => {
	   return firebase.auth().currentUser ? true : false;
};

// firebase call to kill everything/like user was never there
const logout = () => {
   firebase.auth().signOut();
};


	return {authenticateGoogle, isAuthenticated, logout};
});