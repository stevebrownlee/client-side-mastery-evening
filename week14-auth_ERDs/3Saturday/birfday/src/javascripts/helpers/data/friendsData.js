import axios from 'axios';

import apiKeys from '../apiKeys.json';

const getFriendsByUid = uid => new Promise((resolve, reject) => {
  axios.get(`${apiKeys.firebaseKeys.databaseURL}/friends.json?orderBy="uid"&equalTo="${uid}"`)
    .then((results) => {
      const friendResults = results.data;
      const friends = [];
      if (friendResults !== null) {
        Object.keys(friendResults).forEach((friendId) => {
          friendResults[friendId].id = friendId;
          friends.push(friendResults[friendId]);
        });
      }
      resolve(friends);
    })
    .catch((error) => {
      reject(error);
    });
});

export default { getFriendsByUid };
