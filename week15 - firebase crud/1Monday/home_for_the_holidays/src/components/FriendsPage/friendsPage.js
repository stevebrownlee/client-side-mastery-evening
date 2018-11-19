import $ from 'jquery';

import authHelpers from '../../helpers/authHelpers';
import friendsData from '../../helpers/data/friendsData';
import holidayFriendsData from '../../helpers/data/holidayFriendsData';
import holidaysData from '../../helpers/data/holidaysData';

import addEditFriends from '../AddEditFriends/addEditFriends';

const holidayStringBuilder = (holidays) => {
  let holidayString = '<h3>Holidays:</h3>';
  holidays.forEach((holiday) => {
    holidayString += `<h5>${holiday.name} ${holiday.Date}</h5>`;
  });
  return holidayString;
};

const getPrintFriend = (e) => {
  const selectedFriend = e.target.dataset.dropdownId;
  const uid = authHelpers.getCurrentUid();
  friendsData.getSingleFriend(selectedFriend).then((friend) => {
    holidayFriendsData.getHolidayIdsForFriend(selectedFriend).then((holidayIds) => {
      holidaysData.getHolidaysByArrayOfIds(uid, holidayIds).then((holidays) => {
        const friendToPrint = `
          <div class='single-parent'>
            <h1>${friend.name}<h1>
            <h3>${friend.relationship}<h3>
            <button class="btn btn-danger delete-btn" id="${friend.id}">X</button>
            <button class="btn btn-info edit-btn" id="${friend.id}">Edit</button>
            <p>${friend.address}<p>
            <p>${friend.email}<p>
            <p>${friend.phoneNumber}<p>
            <p data-single-id"${friend.id}">IsAvoiding: ${friend.isAvoiding}<p>
            <div class="holiday-container">${holidayStringBuilder(holidays)}</div>
          </div>
        `;
        $('#single-friend-container').html(friendToPrint);
      });
    });
  }).catch((err) => {
    console.error('problem with getFriends', err);
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
  const idToDelete = e.target.id;
  friendsData.deleteFriend(idToDelete).then(() => {
    $('#single-friend-container').html('');
    friendsPage();
  }).catch((err) => {
    console.error('problem with getFriends', err);
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
