/* globals firebase */
"use strict";

let apiKeys = {};

$.ajax({
  method: 'GET',
  url: 'apiKeys.json'
}).then((response) => {
  console.log("response", response);
  apiKeys = response;
  firebase.initializeApp(apiKeys);
}, (errorResponse) =>{
  console.log('errorResponse', errorResponse);
});




$(document).ready(function() {
console.log("jquery is ready");
});






