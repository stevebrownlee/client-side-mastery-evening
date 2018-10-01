import {printToDom} from './../helpers/util.js';
import {buildCharacter} from './character.js';

let people = [
  {id: 'throne1', name: 'John Snow', house: 'Stark'},
  {id: 'throne2', name: 'Dany', house: 'Targarian'},
  {id: 'throne3', name: 'Cerci Lanister', house: 'Lanister'},
];


const clearPeopleDiv = () => {
  const peopleDiv = document.getElementById('people');
  peopleDiv.innerHTML = '';
};

const personClick = (e) => {
  const currentId = e.target.closest('.person').id
  const person = people.find(x => x.id === currentId);
  clearPeopleDiv();
  buildCharacter(person);
};

const createEvents = () => {
  let personCards = document.getElementsByClassName('person');
  for(let i=0; i < personCards.length; i++){
    personCards[i].addEventListener('click', personClick)
  }
};

const builder = () => {
  let domString = '';
  people.forEach((person) => {
    domString += `<div class="person" id="${person.id}">`;
    domString += `<h1>${person.name}</h1>`;
    domString += `</div>`;
  })
  printToDom(domString, 'people')
  createEvents();
};



export {builder};