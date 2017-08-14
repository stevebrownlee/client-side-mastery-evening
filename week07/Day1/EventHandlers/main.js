var planets = [{
  name: 'mercury',
  url: 'https://www.nasa.gov/sites/default/files/mercury_1.jpg'
}, {
  name: 'venus',
  url: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Venus_globe.jpg'
}, {
  name: 'earth',
  url: 'https://www.nasa.gov/centers/goddard/images/content/638831main_globe_east_2048.jpg'
}, {
  name: 'mars',
  url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Mars_23_aug_2003_hubble.jpg/275px-Mars_23_aug_2003_hubble.jpg'
}, {
  name: 'jupiter',
  url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Hubble_Captures_Vivid_Auroras_in_Jupiter's_Atmosphere.jpg/220px-Hubble_Captures_Vivid_Auroras_in_Jupiter's_Atmosphere.jpg"
}, {
  name: 'saturn',
  url: 'http://nssdc.gsfc.nasa.gov/image/planetary/saturn/saturn.jpg'
}, {
  name: 'uranus',
  url: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Uranus2.jpg'
}, {
  name: 'neptune',
  url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/260px-Neptune_Full.jpg'
}];

var getPlanetsButton = document.getElementById('showPlanets');
var planetHolderDiv = document.getElementById('planetHolder');
var inputField = document.getElementById('searchInput');
var clearButton = document.getElementById('clearButton');

// shows planet name
function showMeTheMoney(event) {
  // console.log(event.target.parentNode.id); //gets unique id of box
  // console.log("hidden", event.target.previousSibling); //gets unique id of box
  event.target.previousSibling.classList.remove('hidden');
}

//created domstring
function domString(planetz) {
  planetString = ''
  for (var i = 0; i < planetz.length; i++) {
    var newPlanet = "";
    newPlanet += `<div class='planetBox'id='planetBox-${i}' >`
    newPlanet += `<div class='planetName hidden'> ${planetz[i].name}</div>`
    newPlanet += `<img class="planetImage" src="${planetz[i].url}">`
    newPlanet += `</div>`
    planetString += newPlanet;
  }
  writeToDom(planetString);
}

//puts domstring in dom
function writeToDom(strang) {
  planetHolderDiv.innerHTML = strang;
}

function clearInput(){
  inputField.value = '';
}

// on mouse enter shows all the planet cards
// getPlanetsButton.addEventListener("mouseenter", domString);// - DO THIS FIRST

getPlanetsButton.addEventListener("mouseenter", function(){
  domString(planets);
});

// on click show planet name
document.body.addEventListener('click', function(event) {
  if (event.target.className === 'planetImage') {
    console.log(event);
    showMeTheMoney(event);
  };
});

inputField.addEventListener('keypress', function(event){
  if(event.key === 'Enter'){
    var searchText = inputField.value;
    // console.log("searchText", searchText);
    var results = planets.filter(function (entry) { 
      return entry.name.indexOf(searchText)>-1;
    });
    domString(results);
    // console.log("results", results);
  } else {
    // console.log("event", event.key);
  }
})

clearButton.addEventListener('click', clearInput)
