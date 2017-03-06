// use the treehouse API to get the data from your profile.  Once you have that data printing 
// to the console, display the badges and your completion date in the DOM.



function executeThisCodeIfXHRFails () {
  console.log("An error occurred while transferring");
}

function executeThisCodeAfterFileLoaded () {
  console.log("this.responseText:", this);
  var data = JSON.parse(this.responseText);
  console.log("data", data);

  var contentEl = document.getElementById("all-my-badges")

  var badgeData = "";
  var currentBadge;

  for (var i = 0; i < data.badges.length; i++) {
    currentBadge = data.badges[i];
    console.log(currentBadge);

    badgeData += "<div class='badge-block'>";
    badgeData += `<h3>${currentBadge.name} completed on ${currentBadge.earned_date}</h3>`;
    badgeData += `<h3></h3>`;  
    badgeData += "</div>"
  };

  contentEl.innerHTML = badgeData;
}

var myRequest = new XMLHttpRequest();
myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
myRequest.addEventListener("error", executeThisCodeIfXHRFails)
myRequest.open("GET", "https://teamtreehouse.com/JenniferDutton.json")
myRequest.send();
