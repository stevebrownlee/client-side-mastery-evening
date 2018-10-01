import {printToDom} from './../helpers/util.js';
import {buildCharacter} from './character.js';

let people = [
  {id: 'throne1', name: 'John Snow', house: 'Stark', imageUrl: 'https://vignette.wikia.nocookie.net/gameofthrones/images/a/a5/Profile-JonSnow-707.png/revision/latest?cb=20170828030553'},
  {id: 'throne2', name: 'Daenerys Targaryen', house: 'Targaryen', imageUrl: 'https://vignette.wikia.nocookie.net/gameofthrones/images/5/5f/Daenerys_Dragonpit.jpg/revision/latest?cb=20171015095128'},
  {id: 'throne3', name: 'Cersei Lannister', house: 'Lannister', imageUrl: 'https://vignette.wikia.nocookie.net/gameofthrones/images/c/c3/Profile-CerseiLannister.png/revision/latest/scale-to-width-down/323?cb=20170828071355'},
  {id: 'throne4', name: 'Tyrion Lannister', house: 'Lannister', imageUrl: 'https://vignette.wikia.nocookie.net/gameofthrones/images/5/58/Tyrion_main_s7_e6.jpg/revision/latest?cb=20170818050344'},
  {id: 'throne5', name: 'Sansa Stark', house: 'Stark', imageUrl: 'https://vignette.wikia.nocookie.net/gameofthrones/images/7/7e/Sansastark706.jpg/revision/latest/scale-to-width-down/316?cb=20170828072803'},
  {id: 'throne6', name: 'Arya Stark', house: 'Stark', imageUrl: 'https://vignette.wikia.nocookie.net/gameofthrones/images/5/54/Arya_the_dragon_and_the_wolf_s7.jpg/revision/latest/scale-to-width-down/319?cb=20170828062911'},
  {id: 'throne7', name: 'Eddard Lannister', house: 'Stark', imageUrl: 'https://vignette.wikia.nocookie.net/gameofthrones/images/3/37/Eddard_Stark_infobox_new.jpg/revision/latest/scale-to-width-down/323?cb=20160730050722'}
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



export {builder};