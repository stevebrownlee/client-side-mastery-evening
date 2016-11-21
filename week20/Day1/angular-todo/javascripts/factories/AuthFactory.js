"use strict";

app.factory("AuthFactory", function($q, $http, $rootScope, FIREBASE_CONFIG) {
  let currentUserData = null;

  let logout = () => {
    firebase.auth().signOut();
  };

//Firebase: Use input credentials to authenticate user.
  let authenticate = (credentials) => {
    return $q((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
      .then((authData) =>{
        resolve(authData);
      })
      .catch((error)=>{
        reject(error);
      });
    });
  };

//Firebase: Register a new user with email and password
  let registerWithEmail = (user) => {
    return $q((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then((authData) =>{
        resolve(authData);
      })
      .catch((error)=>{
        reject(error);
      });
    });
  };

//Firebase: GOOGLE - Use input credentials to authenticate user.
  let authenticateGoogle = () => {
    return $q((resolve, reject) => {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then((authData) => {
        currentUserData = authData.user;
        resolve(currentUserData);
      }).catch((error)=> {
        reject(error);
      });
    });
  };

  return {logout: logout, registerWithEmail:registerWithEmail, authenticate:authenticate, authenticateGoogle: authenticateGoogle};
});
