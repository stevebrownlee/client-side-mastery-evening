import axios from 'axios';

const getCharacterData = () => axios.get('../db/characters.json');

export default { getCharacterData };
