"use strict";

let apiKeys = {};

 let imageList = (searchText) => {
    return new Promise((resolve, reject) => {
      $.ajax({
        method: 'GET',
        url: `apiKeys.json`
      }).then((response) =>  { // THIS IS TO MAKE SURE CLIENT ID IS PUSHED UP FIRST SO YOU CAN ACCESS IMGUR API
          // console.log(response);
          apiKeys = response;
          let authHeader = 'Client-ID '+apiKeys.client_id;
          $.ajax({
          method: 'GET',
          headers: {
            'Authorization': authHeader
          }, // SEARCH API BASED ON USER SEARCH TEXT
          url: `https://api.imgur.com/3/gallery/t/${searchText}`
      }).then((response) =>  {
          resolve(response.data.items);
      }, (response)  => {  //error function for ajax call to IMGUR API
        reject(response);
      });

      }, (response) => { //error function for ajax call to apiKeys.json
      });
      
    });
  };  

$(document).ready(function() {
  $('#clicky-button').on('click', function(){
    $(this).button('loading');
    $('#output').html("");
    let searchy = $('#imgur-search').val();
    imageList(searchy).then((dataFromImgur) =>{
        $(this).button('reset');
        let stuff = dataFromImgur;
        // console.log ("IMGUR", stuff);
        stuff.forEach((image) => {
          $('#output').append(`<img src="${image.link}">`);
        }); 
        
    });
  });
});




