import $ from 'jquery';
import axios from 'axios';

import authHelpers from '../../helpers/authHelpers';

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
    $('#single-container').html(friendToPrint);
  }).catch((err) => {
    console.error(err);
  });
};

const buildDropdown = (friendsArray) => {
  let dropdown = `
    <div class="dropdown show">
    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      My Friends
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
  axios.get(`${authHelpers.getBaseUrl()}/friends.json?orderBy="uid"&equalTo="${authHelpers.getCurrentUid()}"`).then((result) => {
    const friendsObj = result.data;
    const friendsArray = [];
    if (friendsObj != null) {
      Object
        .keys(friendsObj)
        .forEach((friendId) => {
          friendsObj[friendId].id = friendId;
          friendsArray.push(friendsObj[friendId]);
        });
    }
    buildDropdown(friendsArray);
  });
};

const deleteFriend = (e) => {
  const idToDelete = e.target.dataset.deleteId;
  axios.delete(`${authHelpers.getBaseUrl()}/friends/${idToDelete}.json`).then(() => {
    friendsPage();
    $(e.target).closest('.single-parent').remove();
  });
};

const bindEvents = () => {
  $('body').on('click', '.dropdown-item', getPrintFriend);
  $('body').on('click', '.delete-btn', deleteFriend);
};

const initializeFriendsPage = () => {
  friendsPage();
  bindEvents();
};

export default initializeFriendsPage;
