"use strict";

let apiKeys = {};

 let imageList = (searchText) => {
    return new Promise(function(resolve, reject){
      $.ajax({
        method: 'GET',
        url: `apikeys.json`
      }).then(function successCallback(response) { // THIS IS TO MAKE SURE CLIENT ID IS PUSHED UP FIRST SO YOU CAN ACCESS IMGUR API
          // console.log(response);
          apiKeys = response;
          let authHeader = 'Client-ID '+apiKeys.client_id;
          $.ajax({
          method: 'GET',
          headers: {
            'Authorization': authHeader
          }, // SEARCH API BASED ON USER SEARCH TEXT
          url: `https://api.imgur.com/3/gallery/t/${searchText}`
      })
          .then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
          // console.log('IMGR response', response);
          resolve(response.data.items);
      }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        reject(response);
      });

      }, function errorCallback(response) {
      });
      
    });
  };




$(document).ready(function() {
  console.log("jquery is ready");
      imageList("cat")
      .then((dataFromImgur) =>{
        let stuff = dataFromImgur;
        console.log ("IMGR", stuff);
        stuff.forEach((image) => {
          $('#output').append(`<img src="${image.link}">`)
        })
        
      });



});

