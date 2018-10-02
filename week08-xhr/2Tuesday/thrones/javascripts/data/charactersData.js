import {setPeople, builder, getPeople} from '../components/people.js'

function executeThisCodeIfXHRFails () {
  console.log("An error occurred while transferring");
}

function executeThisCodeAfterFileLoaded () {
  const data = JSON.parse(this.responseText);
  setPeople(data.characters);
  console.log('data', data.characters);
  builder(getPeople());
}

const getCharacters = () => {
  var myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
  myRequest.addEventListener("error", executeThisCodeIfXHRFails);
  myRequest.open("GET", "./db/characters.json");
  myRequest.send();
};


export {getCharacters};