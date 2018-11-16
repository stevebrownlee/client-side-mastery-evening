import axios from 'axios';
import apiKeys from '../../../db/apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getFriends = uid => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/friends.json?orderBy="uid"&equalTo="${uid}"`)
    .then((result) => {
      const friendsOnDatTeamObj = result.data;
      const friendsOnDatTeamArray = [];
      if (friendsOnDatTeamObj != null) {
        Object.keys(friendsOnDatTeamObj).forEach((friendId) => {
          friendsOnDatTeamObj[friendId].id = friendId;
          friendsOnDatTeamArray.push(friendsOnDatTeamObj[friendId]);
        });
      }
      resolve(friendsOnDatTeamArray);
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

export default { getFriends, getSingleFriend };
