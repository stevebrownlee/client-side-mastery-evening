import axios from 'axios';
import apiKeys from '../../../db/apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getFriends = uid => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/friends.json?orderBy="uid"&equalTo="${uid}"`)
    .then((result) => {
      const friendsObj = result.data;
      const friendsArray = [];
      if (friendsObj != null) {
        Object.keys(friendsObj).forEach((friendId) => {
          friendsObj[friendId].id = friendId;
          friendsArray.push(friendsObj[friendId]);
        });
      }
      resolve(friendsArray);
    })
    .catch((err) => {
      reject(err);
    });
});

const getSingleFriend = friendId => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/friends/${friendId}.json`)
    .then((result) => {
      const friend = result.data;
      friend.id = friendId;
      resolve(result.data);
    })
    .catch((err) => {
      reject(err);
    });
});

const deleteFriend = friendId => axios.delete(`${baseUrl}/friends/${friendId}.json`);

export default { getFriends, getSingleFriend, deleteFriend };
