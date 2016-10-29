'use strict';

var FbAPI = (function(oldFirebase){
  
  oldFirebase.getTodos = function(){
    console.log("gimme todos");
      return new Promise((resolve, reject) => {
        $.ajax({
          method: 'GET',
          url: `apiKeys.json`
        }).then((response) =>  { 
            console.log(response);
        }, (response) => { //error function for ajax call to apiKeys.json
        });
        
      });
  };

return oldFirebase;

})(FbAPI || {});



// $.ajax({
//   method: 'GET',
//   url: 'apiKeys.json'
// }).then((response) => {
//   console.log("response", response);
//   apiKeys = response;
//   firebase.initializeApp(apiKeys);
//   FbAPI.getTodos();
// }, (errorResponse) =>{
//   console.log('errorResponse', errorResponse);
// });