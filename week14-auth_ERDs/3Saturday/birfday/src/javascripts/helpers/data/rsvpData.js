import axios from 'axios';

import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getRsvpsByBirthdayId = birthdayId => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/rsvps.json?orderBy="birthdayId"&equalTo="${birthdayId}"`)
    .then((results) => {
      const rsvpResults = results.data;
      const rsvps = [];
      if (rsvpResults !== null) {
        Object.keys(rsvpResults).forEach((rsvpId) => {
          rsvpResults[rsvpId].id = rsvpId;
          rsvps.push(rsvpResults[rsvpId]);
        });
      }
      resolve(rsvps);
    })
    .catch((error) => {
      reject(error);
    });
});

const addRsvp = newRsvp => axios.post(`${firebaseUrl}/rsvps.json`, newRsvp);

const editRsvp = (rsvpId, rsvpObj) => axios.put(`${firebaseUrl}/rsvps/${rsvpId}.json`, rsvpObj);

export default { getRsvpsByBirthdayId, addRsvp, editRsvp };
