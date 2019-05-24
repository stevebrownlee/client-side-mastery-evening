import axios from 'axios';

import apiKeys from '../apiKeys.json';

const getBirfdayByUid = uid => new Promise((resolve, reject) => {
  axios.get(`${apiKeys.firebaseKeys.databaseURL}/birthdays.json?orderBy="uid"&equalTo="${uid}"`)
    .then((results) => {
      const birthdayResults = results.data;
      const birthdays = [];
      if (birthdayResults !== null) {
        Object.keys(birthdayResults).forEach((birthdayId) => {
          birthdayResults[birthdayId].id = birthdayId;
          birthdays.push(birthdayResults[birthdayId]);
        });
      }
      resolve(birthdays[0]);
    })
    .catch((error) => {
      reject(error);
    });
});

export default { getBirfdayByUid };
