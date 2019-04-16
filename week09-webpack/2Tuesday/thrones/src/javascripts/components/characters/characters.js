import characterData from '../../heplers/data/characterData';

let characters = [];

const setCharacters = (charArray) => {
  characters = charArray;
};

const domStringBuilder = () => {
  console.error(characters);
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
