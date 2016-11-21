"use strict";

app.factory("UserFactory", function($q, $http, $rootScope, FIREBASE_CONFIG) {
  let currentUserData = null;

  let storeUser = (authData) => {
    return $q((resolve, reject) => {
      $http.post(`${FIREBASE_CONFIG.databaseURL}/users.json`, 
        JSON.stringify({ 
          uid: authData.uid,
          username: authData.username
        })
      )
      .success(function(storeUserSuccess){
        resolve(storeUserSuccess);
      })
      .error(function(storeUserError){
        reject(storeUserError);
      });
    });
  };

  let getUserInfo = (userId) =>{
    return $q(function(resolve, reject){
      $http.get(`${FIREBASE_CONFIG.databaseURL}/users.json?orderBy="uid"&equalTo="${userId}"`)
        .success(function(userObject){
          let users = [];
          Object.keys(userObject).forEach(function(key){
            // userObject[key].id=key;
            users.push(userObject[key]);
          });
          resolve(users[0]);
        })
        .error(function(error){
          reject(error);
        });
    });
  };

  return {storeUser:storeUser, getUserInfo:getUserInfo};
});
