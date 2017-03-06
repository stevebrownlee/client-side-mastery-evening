console.log("First line in JS file");
console.log(Date.now());

function executeThisCodeIfXHRFails () {
  console.log("An error occurred while transferring");
}

function executeThisCodeAfterFileLoaded () {
  console.log("executeThisCodeAfterFileLoaded time:", Date.now());


  console.log("this.responseText:", this.responseText);
  var data = JSON.parse(this.responseText);
  console.log("data", data);

  var contentEl = document.getElementById("all-my-songs")
  console.log("contentEl", contentEl);

  var songData = "";
  var currentSong;

  for (var i = 0; i < data.songs.length; i++) {
    currentSong = data.songs[i];

    songData += "<div class='song-block'>";
      songData += `<h1>${currentSong.title}</h1>`;
      songData += "<div class='artist'>Performed by ";
        songData += currentSong.artist;
      songData += "</div>";
      songData += "<div class='album'>On the album ";
        songData += currentSong.album;
      songData += "</div>";
    songData += "</div>";
  };

  console.log(songData);
  contentEl.innerHTML = songData;
}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeIfXHRFails)
myRequest.open("GET", "songs.json")
myRequest.send();


console.log("Last line in JS file");
console.log(Date.now());
