import {printToDom} from './../helpers/util.js';
import {buildCharacter} from './character.js';

let people = [];


const getPeople = () => {
  return people;
};

const setPeople = (peopleArray) => {
  people = peopleArray;
};

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
    domString += `<div class="col-2 person" id="${person.id}">`;
    domString +=   `<div class="card">`;
    domString +=     `<img class="card-img-top" src="${person.imageUrl}" alt="Card image cap">`;
    domString +=     `<div class="card-body">`;
    domString +=       `<h5 class="card-title">${person.name}</h5>`;
    domString +=     `</div>`;
    domString +=   `</div>`;
    domString += `</div>`;
  })
  printToDom(domString, 'people')
  createEvents();
};

export {builder, getPeople, setPeople};