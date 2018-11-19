import $ from 'jquery';
import axios from 'axios';

import authHelpers from '../../helpers/authHelpers';
import friendsData from '../../helpers/data/friendsData';

import addEditFriends from '../AddEditFriends/addEditFriends';

const getPrintFriend = (e) => {
  const friendId = e.target.dataset.dropdownId;
  axios.get(`${authHelpers.getBaseUrl()}/friends/${friendId}.json`).then((result) => {
    const friend = result.data;
    friend.id = friendId;
    const friendToPrint = `
      <div class='single-parent'>
      <h1>${friend.name}<h1>
      <h3>${friend.relationship}<h3>
      <button class="btn btn-danger delete-btn" data-delete-id="${friend.id}">X</button>
      <p>${friend.address}<p>
      <p>${friend.email}<p>
      <p>${friend.phoneNumber}<p>
      <p data-single-id"${friend.id}">IsAvoiding: ${friend.isAvoiding}<p>
      </div>
      `;
    $('#single-friend-container').html(friendToPrint);
  }).catch((err) => {
    console.error(err);
  });
};

const buildDropdown = (friendsArray) => {
  let dropdown = `
    <div class="dropdown show">
    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Pick a Friend.....
    </a>

    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    `;
  friendsArray.forEach((friend) => {
    dropdown += `<div class="dropdown-item" data-dropdown-id=${friend.id}>${friend.name}</div>`;
  });
  dropdown += '</div></div>';
  $('#dropdown-container').html(dropdown);
};

const friendsPage = () => {
  const uid = authHelpers.getCurrentUid();
  friendsData.getFriends(uid).then((friends) => {
    buildDropdown(friends);
  }).catch((err) => {
    console.error('problem with getFriends', err);
  });
};

const deleteFriend = (e) => {
  const idToDelete = e.target.dataset.deleteId;
  axios.delete(`${authHelpers.getBaseUrl()}/friends/${idToDelete}.json`).then(() => {
    $('#single-friend-container').html('');
    friendsPage();
  });
};

const addFriendPage = () => {
  $('#auth').hide();
  $('#friends').hide();
  $('#holidays').hide();
  $('#single-friend-container').html('');
  $('#add-edit-friends').show();
  addEditFriends.addButton();
};

const bindEvents = () => {
  $('body').on('click', '.dropdown-item', getPrintFriend);
  $('body').on('click', '.delete-btn', deleteFriend);
  $('#add-friend-button').on('click', addFriendPage);
};

const initializeFriendsPage = () => {
  friendsPage();
  bindEvents();
};

export default initializeFriendsPage;
