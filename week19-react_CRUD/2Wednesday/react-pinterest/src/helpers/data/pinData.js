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

const deletePin = (pinId) => axios.delete(`${baseUrl}/pins/${pinId}.json`);

const savePin = (newPin) => axios.post(`${baseUrl}/pins.json`, newPin);

const updatePin = (pinId, newPin) => axios.put(`${baseUrl}/pins/${pinId}.json`, newPin);

export default {
  getPinsByBoardId,
  deletePin,
  savePin,
  updatePin,
};
