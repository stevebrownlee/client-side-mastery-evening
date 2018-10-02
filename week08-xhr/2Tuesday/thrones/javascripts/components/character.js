import {printToDom} from './../helpers/util.js'
import {builder, getPeople} from './people.js';

const clearCharacterDiv = () => {
  const characterDiv = document.getElementById('character');
  characterDiv.innerHTML = '';
  builder(getPeople());
};

const createEvents = () => {
  const closeButton = document.getElementById('close');
  closeButton.addEventListener('click', clearCharacterDiv);
};

const buildCharacter = (person) => {
    let domString = '';
    domString += `<div class="character col-6 offset-md-3" id="${person.id}">`;
    domString +=   `<div class="row"><button class="btn btn-danger" id="close">x</button></div>`;
    domString +=   `<div class="row">`
    domString +=     `<div class='col'>`
    domString +=       `<img class="char-image" src="${person.imageUrl}" alt="${person.name}"/>`
    domString +=     `</div>`
    domString +=     `<div class='col'>`
    domString +=       `<h1>${person.name}</h1>`;
    domString +=       `<h3>House: ${person.house}</h3>`;
    domString +=     `</div>`
    domString +=   `</div>`;
    domString += `</div>`;
  printToDom(domString, 'character');
  createEvents();
};

export {buildCharacter};