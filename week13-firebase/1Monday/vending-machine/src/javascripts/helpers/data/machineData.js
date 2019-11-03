import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getMachines = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/machines.json`).then((response) => {
    const machines = [];
    Object.keys(response.data).forEach((fbId) => {
      response.data[fbId].id = fbId;
      machines.push(response.data[fbId]);
    });
    resolve(machines[0]);
  }).catch((error) => reject(error));
});

export default { getMachines };
