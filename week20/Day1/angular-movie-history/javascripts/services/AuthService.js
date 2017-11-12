'use strict';

app.service("AuthService", function($http, FIREBASE_CONFIG) {
	const authenticateGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider);
  };

  return {authenticateGoogle};
});
