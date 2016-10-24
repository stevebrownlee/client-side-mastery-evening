"use strict";

$(document).ready(function() {
  console.log("jquery is ready");
  // Get a reference to the DOM element that
  // holds all the songs
  var songData = "";
  var currentSong;
  var contentEl = $("#all-my-songs");
  var songs = [];


  function getSongs(){
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "../songs.json"
      }).done(function(data) {
        // console.log("data", data);
        resolve(data);
      }).fail(function(xhr, status, error) {
      reject(error);
      });
    });
  }

  function getSongs2(resultOfFirstAjax){
    return new Promise((resolve, reject) => {
      $.ajax({
        url: "../songs2.json",
        data: resultOfFirstAjax
      }).done(function(data) {
        // console.log("data2 in getSongs2", data);
        // console.log("data1 in getSongs2", resultOfFirstAjax);
        songs = resultOfFirstAjax.songs;
        resolve(data);
      }).fail(function(xhr, status, error) {
      reject(error);
      });
    });
  }


  getSongs().then(function(dataPass){
    return getSongs2(dataPass);
  }).then(function(dataPass2){
    console.log("dataPass inside 2nd then", songs);
    console.log("dataPass2", dataPass2);
    dataPass2.songs.forEach(function(song){
      songs.push(song);
    });
    
    console.log("fin", songs);
    
    for (var i = 0; i < songs.length; i++) {
      currentSong = songs[i];

      songData += "<div class='song-block'>";
        songData += "<h1>" + currentSong.title + "</h1>";
        songData += "<div class='artist'>Performed by ";
          songData += currentSong.artist;
        songData += "</div>";
        songData += "<div class='album'>On the album ";
          songData += currentSong.album;
        songData += "</div>";
      songData += "</div>";
    }

    console.log("songData", songData);
    contentEl.html(songData);
  });
});










// **********************************************************
//                STARTER CODE GIVEN TO STUDENTS
// **********************************************************

// "use strict";

// $(document).ready(function() {
//   console.log("jquery is ready");
//   var contentEl = $("#all-my-songs");
//   var songs = [];
//   $.ajax({
//     url: "../songs.json"
//   }).done(function(data) {
//     songs = data.songs;
//     console.log("data", data);
//     $.ajax({
//       url: "../songs2.json"
//       }).done(function(data2) {
//         console.log("data2", data2);
//         var songData = "";
//         var currentSong;
        
//         data2.songs.forEach(function(song){
//           songs.push(song);
//         });

//         console.log("songs", songs);
        
//         for (var i = 0; i < songs.length; i++) {
//           currentSong = songs[i];

//           songData += "<div class='song-block'>";
//             songData += "<h1>" + currentSong.title + "</h1>";
//             songData += "<div class='artist'>Performed by ";
//               songData += currentSong.artist;
//             songData += "</div>";
//             songData += "<div class='album'>On the album ";
//               songData += currentSong.album;
//             songData += "</div>";
//           songData += "</div>";
//         }

//         console.log("songData", songData);
//         contentEl.html(songData);
//       }).fail(function(error) {
//         console.log( "error" , error);
//       });
//   }).fail(function(error) {
//     console.log( "error" , error);
//   });
// });
