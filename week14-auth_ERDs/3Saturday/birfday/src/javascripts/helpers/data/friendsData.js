import axios from 'axios';

import apiKeys from '../apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getFriendsByUid = uid => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/friends.json?orderBy="uid"&equalTo="${uid}"`)
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

const addNewFriend = friendObject => axios.post(`${firebaseUrl}/friends.json`, JSON.stringify(friendObject));

const deleteFriend = friendId => axios.delete(`${firebaseUrl}/friends/${friendId}.json`);

export default { getFriendsByUid, addNewFriend, deleteFriend };
