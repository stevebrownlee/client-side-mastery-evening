import util from '../../heplers/util';
import characterData from '../../heplers/data/characterData';

import './characters.scss';

let characters = [];

const setCharacters = (charArray) => {
  characters = charArray;
};

const domStringBuilder = () => {
  let domString = '';
  characters.forEach((char) => {
    domString += '<div class="char">';
    domString += '<div class="img-holder">';
    domString += `<img src=${char.imageUrl} />`;
    domString += '</div>';
    domString += `<h2 class="char-name">${char.name}</h2>`;
    domString += '</div>';
  });
  util.printToDom('characters', domString);
};

const getData = () => {
  characterData.getCharacterData()
    .then((data) => {
      const dataArray = data.data.characters;
      setCharacters(dataArray);
      domStringBuilder();
    })
    .catch(err => console.error(err));
};

export default { getData };
