import {getCharacters} from './data/charactersData.js'
import {sortEvents} from './components/people.js';

const initializeApp = () => {
  sortEvents();
  getCharacters();
};

initializeApp();