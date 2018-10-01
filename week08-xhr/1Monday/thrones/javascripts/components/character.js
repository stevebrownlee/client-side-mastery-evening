import {printToDom} from './../helpers/util.js'
import {builder} from './people.js';

const clearCharacterDiv = () => {
  const characterDiv = document.getElementById('character');
  characterDiv.innerHTML = '';
  builder();
};

const createEvents = () => {
  const closeButton = document.getElementById('close');
  closeButton.addEventListener('click', clearCharacterDiv);
};

const buildCharacter = (person) => {
    let domString = `<div class="character" id="${person.id}">`;
    domString += `<button class="btn btn-danger" id="close">x</button>`;
    domString += `<h1>${person.name}</h1>`;
    domString += `<h1>${person.house}</h1>`;
    domString += `</div>`;
  printToDom(domString, 'character');
  createEvents();
};

export {buildCharacter};