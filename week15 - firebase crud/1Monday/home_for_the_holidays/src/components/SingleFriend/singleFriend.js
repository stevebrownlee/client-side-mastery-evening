/* eslint import/no-cycle: 0 */
import $ from 'jquery';
// import firebase from 'firebase/app';
// import 'firebase/auth';
import friendsData from '../../helpers/data/friendsData';
import friendsPage from '../FriendsPage/friendsPage';

import './singleFriend.scss';

const buildDomString = (friend) => {
  const domString = `
    <h1>${friend.name}<h1>
    <h3>${friend.relationship}<h3>
    <button class="btn btn-danger delete-btn" id="${friend.id}">X</button>
    <p>${friend.address}<p>
    <p>${friend.email}<p>
    <p>${friend.phoneNumber}<p>
    <p id="${friend.id}">IsAvoiding: ${friend.isAvoiding}<p>
  `;
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
  const selectedFriend = e.target.id;
  let strang = '';
  friendsData.getSingleFriend(selectedFriend).then((friend) => {
    strang = buildDomString(friend);
    $('#singleFriend').html(strang);
    $('.delete-btn').on('click', deleteFriend);
  }).catch((err) => {
    console.error('problem with getFriends', err);
  });
};

export default singleFriend;
