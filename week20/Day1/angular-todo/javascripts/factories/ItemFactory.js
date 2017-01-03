'use strict';

app.factory("ItemFactory", function($q, $http, FIREBASE_CONFIG){
  
  var getItemList = function(userId){
    let items = [];
    return $q(function(resolve, reject){
      $http.get(`${FIREBASE_CONFIG.databaseURL}/items.json?orderBy="uid"&equalTo="${userId}"`)
        .success(function(itemObject){
          var itemCollection = itemObject;
          Object.keys(itemCollection).forEach(function(key){
            itemCollection[key].id=key;
            items.push(itemCollection[key]);
          });
          resolve(items);
        })
        .error(function(error){
          reject(error);
        });
    });
  };

  var getSingleItem = function(itemId){
    return $q(function(resolve, reject){
      $http.get(`${FIREBASE_CONFIG.databaseURL}/items/${itemId}.json`)
        .success(function(itemObject){
          resolve(itemObject);
        })
        .error(function(error){
          reject(error);
        });
    });
  };

  var deleteItem = function(itemId){
    return $q(function(resolve, reject){
      $http
        .delete(`${FIREBASE_CONFIG.databaseURL}/items/${itemId}.json`)
        .success(function(objectFromFirebase){
          resolve(objectFromFirebase);
        })
        .error(function(error){
          reject(error);
        });
    });
  };

  var postNewItem = function(newItem){
        return $q(function(resolve, reject) {
            $http.post(`${FIREBASE_CONFIG.databaseURL}/items.json`,
                JSON.stringify({
                    assignedTo: newItem.assignedTo,
                    isCompleted: newItem.isCompleted,
                    task: newItem.task,
                    uid: newItem.uid
                })
            )
            .success(
                function(objectFromFirebase) {
                    resolve(objectFromFirebase);
                }
            );
        });
  };

  var editItem = function(editItem){
    return $q(function(resolve, reject) {
        $http.put(`${FIREBASE_CONFIG.databaseURL}/items/${editItem.id}.json`,
            JSON.stringify({
                assignedTo: editItem.assignedTo,
                isCompleted: editItem.isCompleted,
                task: editItem.task,
                uid: editItem.uid
            })
        )
        .success(
            function(objectFromFirebase) {
                resolve(objectFromFirebase);
            }
        );
    });
  };

  return {getItemList:getItemList, deleteItem:deleteItem, postNewItem:postNewItem, getSingleItem:getSingleItem, editItem:editItem};

});