import axios from 'axios';
import apiKeys from '../../../db/apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllFriends = uid => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/friends.json?orderBy="uid"&equalTo="${uid}"`)
    .then((results) => {
      const friendsObject = results.data;
      const friendsArray = [];
      if (friendsObject !== null) {
        Object.keys(friendsObject).forEach((friendId) => {
          friendsObject[friendId].id = friendId;
          friendsArray.push(friendsObject[friendId]);
        });
      }
      resolve(friendsArray);
    })
    .catch((error) => {
      reject(error);
    });
});

const getSingleFriend = friendId => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/friends/${friendId}.json`)
    .then((result) => {
      const singleFriend = result.data;
      singleFriend.id = friendId;
      resolve(singleFriend);
    })
    .catch((error) => {
      reject(error);
    });
});

const deleteFriend = friendId => axios.delete(`${firebaseUrl}/friends/${friendId}.json`);

const addNewFriend = friendObject => axios.post(`${firebaseUrl}/friends.json`, JSON.stringify(friendObject));

const updateFriend = (friendObject, friendId) => axios.put(`${firebaseUrl}/friends/${friendId}.json`, JSON.stringify(friendObject));

const getFriendsByArrayOfIds = (uid, friendIdsArray) => new Promise((resolve, reject) => {
  axios
    .get(`${firebaseUrl}/friends.json?orderBy="uid"&equalTo="${uid}"`)
    .then((result) => {
      const friendsObj = result.data;
      const friendsArray = [];
      if (friendsObj != null) {
        Object.keys(friendsObj).forEach((friendId) => {
          friendsObj[friendId].id = friendId;
          friendsArray.push(friendsObj[friendId]);
        });
      }
      if (friendIdsArray.length > 0) {
        const selectedFriends = friendsArray.filter(x => friendIdsArray.includes(x.id));
        resolve(selectedFriends);
      } else {
        resolve([]);
      }
    })
    .catch((err) => {
      reject(err);
    });
});

export default {
  getAllFriends,
  getSingleFriend,
  deleteFriend,
  addNewFriend,
  updateFriend,
  getFriendsByArrayOfIds,
};
