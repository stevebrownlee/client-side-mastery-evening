'use strict';

var FbAPI = (function(oldFirebase){
  
  oldFirebase.getTodos = function(apiKeys, uid){
      return new Promise((resolve, reject) => {
        $.ajax({
          method: 'GET',
          url: `${apiKeys.databaseURL}/items.json?orderBy="uid"&equalTo="${uid}"`
        }).then((response) =>  { 
            let items = [];
            Object.keys(response).forEach(function(key){
              response[key].id=key;
              items.push(response[key]);
            });
            resolve(items);
        }, (errorResponse) => { //error function for ajax call to apiKeys.json
          reject(errorResponse);
        });
        
      });
  };

    oldFirebase.addTodo = function(apiKeys, newItem){
      return new Promise((resolve, reject) => {
        $.ajax({
          method: 'POST',
          url: `${apiKeys.databaseURL}/items.json`,
          data: JSON.stringify(newItem),
          dataType: 'json'
        }).then((response) =>  { 
            resolve(response);
        }, (errorResponse) => { //error function for ajax call to apiKeys.json
          reject(errorResponse);
        });
        
      });
  };

    oldFirebase.deleteTodo = function(apiKeys, itemId){
      return new Promise((resolve, reject) => {
        $.ajax({
          method: 'DELETE',
          url: `${apiKeys.databaseURL}/items/${itemId}.json`
        }).then(() =>  { 
            resolve();
        }, (errorResponse) => { //error function for ajax call to apiKeys.json
          reject(errorResponse);
        });
        
      });
  };

    oldFirebase.editTodo = function(apiKeys, itemId, updatedItem){
      return new Promise((resolve, reject) => {
        $.ajax({
          method: 'PUT',
          url: `${apiKeys.databaseURL}/items/${itemId}.json`,
          data: JSON.stringify(updatedItem),
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