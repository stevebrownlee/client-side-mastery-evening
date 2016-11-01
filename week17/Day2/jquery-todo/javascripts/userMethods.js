'use strict';

var FbAPI = (function(oldFirebase){
  
  oldFirebase.getUser = function(apiKeys, uid){
      return new Promise((resolve, reject) => {
        $.ajax({
          method: 'GET',
          url: `${apiKeys.databaseURL}/users.json?orderBy="uid"&equalTo="${uid}"`
        }).then((response) =>  { 
            let users = [];
            Object.keys(response).forEach(function(key){
              response[key].id=key;
              users.push(response[key]);
            });
            resolve(users[0]);
        }, (errorResponse) => { //error function for ajax call to apiKeys.json
          reject(errorResponse);
        });
        
      });
  };

    oldFirebase.addUser = function(apiKeys, newUser){
      return new Promise((resolve, reject) => {
        $.ajax({
          method: 'POST',
          url: `${apiKeys.databaseURL}/users.json`,
          data: JSON.stringify(newUser),
          dataType: 'json'
        }).then((response) =>  { 
            resolve(response);
        }, (errorResponse) => { //error function for ajax call to apiKeys.json
          reject(errorResponse);
        });
        
      });
  };


return oldFirebase;

})(FbAPI || {});