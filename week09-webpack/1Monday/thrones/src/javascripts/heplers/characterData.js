import characters from '../components/characters/characters';

function executeThisCodeAfterFileLoads() {
  const data = JSON.parse(this.responseText);
  console.error('data', data);
  characters.setCharacters(data.characters);
}

function executeThisCodeifXHRFails() {
  console.error('oh shit');
}

const getCharacterData = () => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', executeThisCodeAfterFileLoads);
  myRequest.addEventListener('error', executeThisCodeifXHRFails);
  myRequest.open('GET', '../db/characters.json');
  myRequest.send();
};

export default { getCharacterData };
