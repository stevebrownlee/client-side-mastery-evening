
import axios from 'axios';
import apiKeys from '../../../db/apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getHolidayIdsForFriend = friendId => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/holidayFriends.json?orderBy="friendId"&equalTo="${friendId}"`)
    .then((result) => {
      const holidayFriendsObject = result.data;
      const holidayIds = [];
      if (holidayFriendsObject != null) {
        Object.keys(holidayFriendsObject).forEach((personId) => {
          holidayIds.push(holidayFriendsObject[personId].holidayId);
        });
      }
      resolve(holidayIds);
    })
    .catch((err) => {
      reject(err);
    });
});


const getFriendIdsForHoliday = holidayId => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/holidayFriends.json?orderBy="holidayId"&equalTo="${holidayId}"`)
    .then((result) => {
      const holidayFriendsObject = result.data;
      const friendIds = [];
      if (holidayFriendsObject != null) {
        Object.keys(holidayFriendsObject).forEach((personId) => {
          friendIds.push(holidayFriendsObject[personId].friendId);
        });
      }
      resolve(friendIds);
    })
    .catch((err) => {
      reject(err);
    });
});

export default { getHolidayIdsForFriend, getFriendIdsForHoliday };
