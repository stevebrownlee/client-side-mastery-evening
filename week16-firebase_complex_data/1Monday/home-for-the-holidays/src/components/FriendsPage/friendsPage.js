import $ from 'jquery';
import authHelpers from '../../helpers/authHelpers';
import friendsData from '../../helpers/data/friendsData';
import holidayFriendsData from '../../helpers/data/holidayFriendsData';
import holidaysData from '../../helpers/data/holidaysData';

const holidayStringBuilder = (holidays) => {
  let holidayString = '<h3>Holidays:</h3>';
  holidays.forEach((holiday) => {
    holidayString += `<h5>${holiday.name} ${holiday.Date}</h5>`;
  });
  return holidayString;
};

const printSingleFriend = (friend, holidays) => {
  const friendString = `
    <div>
      <h1>${friend.name}</h1>
      <button class="btn btn-danger delete-btn" data-delete-id=${friend.id}>X</button>
      <button class="btn btn-info edit-btn" data-edit-id=${friend.id}>Edit</button>
      <h3>${friend.relationship}</h3>
      <p>${friend.address}</p>
      <p>${friend.email}</p>
      <p>${friend.phoneNumber}</p>
      <div class="form-check form-check-inline">
      <label class="form-check-label" for="isAvoidingCheckbox">Are we avoiding them? </label>
        <input class="form-check-input isAvoidingCheckbox" type="checkbox" id="${friend.id}">
      </div>

      <div class="holiday-container">${holidayStringBuilder(holidays)}</div>
    </div>
  `;
  $('#single-container').html(friendString);
  if (friend.isAvoiding) {
    $('.isAvoidingCheckbox').attr('checked', true);
  }
};

const getSingleFriend = (e) => {
  // firebase id
  const uid = authHelpers.getCurrentUid();
  const friendId = e.target.dataset.dropdownId;
  friendsData.getSingleFriend(friendId)
    .then((singleFriend) => {
      holidayFriendsData.getHolidayIdsForFriend(friendId).then((holidayIds) => {
        holidaysData.getHolidaysByArrayOfIds(uid, holidayIds).then((holidays) => {
          printSingleFriend(singleFriend, holidays);
        });
      });
    })
    .catch((error) => {
      console.error('error in getting one friend', error);
    });
};

const buildDropdown = (friendsArray) => {
  let dropdown = `<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Pick a Friend
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">`;
  if (friendsArray.length) {
    friendsArray.forEach((friend) => {
      dropdown += `<div class="dropdown-item get-single" data-dropdown-id=${friend.id}>${friend.name}</div>`;
    });
  } else {
    dropdown += '<div class="dropdown-item">You have no friends.</div>';
  }

  dropdown += '</div></div>';
  $('#dropdown-container').html(dropdown);
};

const friendsPage = () => {
  const uid = authHelpers.getCurrentUid();
  friendsData.getAllFriends(uid)
    .then((friendsArray) => {
      buildDropdown(friendsArray);
    })
    .catch((error) => {
      console.error('error in getting friends', error);
    });
};

const deleteFriend = (e) => {
  // firebase id
  const idToDelete = e.target.dataset.deleteId;
  friendsData.deleteFriend(idToDelete)
    .then(() => {
      friendsPage();
      $('#single-container').html('');
    })
    .catch((error) => {
      console.error('error in deleting friend', error);
    });
};

const updateIsAvoiding = (e) => {
  const friendId = e.target.id;
  const isChecked = e.target.checked;
  friendsData.updatedIsAvoiding(friendId, isChecked)
    .then(() => {
      friendsPage();
      $('#single-container').html('');
    })
    .catch((error) => {
      console.error('error in updating flag', error);
    });
};

const bindEvents = () => {
  $('body').on('click', '.get-single', getSingleFriend);
  $('body').on('click', '.delete-btn', deleteFriend);
  $('body').on('change', '.isAvoidingCheckbox', updateIsAvoiding);
};

const initializeFriendsPage = () => {
  friendsPage();
  bindEvents();
};

export default initializeFriendsPage;