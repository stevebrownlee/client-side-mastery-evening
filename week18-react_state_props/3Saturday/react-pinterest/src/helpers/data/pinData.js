import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPinsByBoardId = (boardId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/pins.json?orderBy="boardId"&equalTo="${boardId}"`)
    .then((result) => {
      const allBinsObject = result.data;
      const pins = [];
      if (allBinsObject != null) {
        Object.keys(allBinsObject).forEach((pinId) => {
          const newBin = allBinsObject[pinId];
          newBin.id = pinId;
          pins.push(newBin);
        });
      }
      resolve(pins);
    })
    .catch((err) => {
      reject(err);
    });
});


export default { getPinsByBoardId };
