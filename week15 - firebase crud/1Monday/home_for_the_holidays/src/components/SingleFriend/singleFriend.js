/* eslint import/no-cycle: 0 */
import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';
import friendsData from '../../helpers/data/friendsData';
import holidaysData from '../../helpers/data/holidaysData';
import holidayFriendsData from '../../helpers/data/holidayFriendsData';
import friendsPage from '../FriendsPage/friendsPage';

import './singleFriend.scss';

const holidayStringBuilder = (holidays) => {
  let holidayString = '<h3>Holidays:</h3>';
  holidays.forEach((holiday) => {
    holidayString += `<h5>${holiday.name} ${holiday.Date}</h5>`;
  });
  return holidayString;
};

const buildDomString = (friend, holidays) => {
  let domString = `
    <h1>${friend.name}<h1>
    <h3>${friend.relationship}<h3>
    <button class="btn btn-danger delete-btn" id="${friend.id}">X</button>
    <p>${friend.address}<p>
    <p>${friend.email}<p>
    <p>${friend.phoneNumber}<p>
    <p id="${friend.id}">IsAvoiding: ${friend.isAvoiding}<p>
  `;
  domString += `<div class="holiday-container">${holidayStringBuilder(holidays)}</div>`;
  return domString;
};

const deleteFriend = (e) => {
  const selectedFriend = e.target.id;
  friendsData.deleteFriend(selectedFriend).then(() => {
    friendsPage();
  }).catch((err) => {
    console.error('problem with deleteFriend', err);
  });
};

const singleFriend = (e) => {
  const { uid } = firebase.auth().currentUser;
  const selectedFriend = e.target.id;
  let strang = '';
  friendsData.getSingleFriend(selectedFriend).then((friend) => {
    holidayFriendsData.getHolidayIdsForFriend(selectedFriend).then((holidayIds) => {
      holidaysData.getHolidaysByArrayOfIds(uid, holidayIds).then((holidays) => {
        strang = buildDomString(friend, holidays);
        $('#singleFriend').html(strang);
        $('.delete-btn').on('click', deleteFriend);
      });
    });
  }).catch((err) => {
    console.error('problem with getFriends', err);
  });
};

export default singleFriend;
