import $ from 'jquery';
import authHelpers from '../../helpers/authHelpers';
import holidaysData from '../../helpers/data/holidaysData';
import holidayFriendsData from '../../helpers/data/holidayFriendsData';
import friendsData from '../../helpers/data/friendsData';

import './holidaysPage.scss';

const buildHolidayButtons = (holidaysArray) => {
  let domString = '';
  if (holidaysArray.length) {
    holidaysArray.forEach((holiday) => {
      domString += `<button id="${holiday.id}" class="btn btn-info holiday">${holiday.name} ${holiday.Date}</button>`;
    });
  }
  $('#all-holidays').html(domString);
};

const holidaysPage = () => {
  const uid = authHelpers.getCurrentUid();
  holidaysData.getAllHolidays(uid)
    .then((holidaysArray) => {
      buildHolidayButtons(holidaysArray);
    })
    .catch((error) => {
      console.error('error in getting friends', error);
    });
};

const friendListStringBuilder = (friends) => {
  let friendsString = `
    <h4>Friends Attending</h4>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Edit</button>
    <ul>
  `;
  friends.forEach((friend) => {
    if (friend.isAvoiding) {
      friendsString += `<li class='avoiding'>${friend.name}</li>`;
    } else {
      friendsString += `<li>${friend.name}</li>`;
    }
  });
  friendsString += '</ul>';
  return friendsString;
};

const displayModal = () => {
  const domString = `
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          ...
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>`;
  $('body').append(domString);
};

const printSingleHoliday = (holiday, friends) => {
  const domString = `
  <div class="row">
    <div class="col">
      <img src="${holiday.imageUrl}">
    </div>
    <div class="col">
      <h3>${holiday.name}</h3>
      <h4>${holiday.Date}</h4>
      <h4>${holiday.startTime}</h4>
      <h5>${holiday.location}</h5>
    </div>
    <div class="col">
      ${friendListStringBuilder(friends)}
    </div>
    </div>
  `;
  $('#single-holiday').html(domString);
  displayModal();
};

const getSingleHoliday = (e) => {
  $('#all-holidays').html('');
  const holidayId = e.target.id;
  const uid = authHelpers.getCurrentUid();
  holidaysData.getSingleHoliday(holidayId)
    .then((singleHoliday) => {
      holidayFriendsData.getFriendIdsForHoliday(holidayId).then((friendIds) => {
        friendsData.getFriendsByArrayOfIds(uid, friendIds).then((friends) => {
          printSingleHoliday(singleHoliday, friends);
        });
      });
    })
    .catch((error) => {
      console.error('error in getting one friend', error);
    });
};

// const openFriendModal = (e) => {
//   const holidayId = e.target.id;
//   console.log('modal', holidayId);
// };

const bindEvents = () => {
  $('body').on('click', '.holiday', getSingleHoliday);
  // $('body').on('click', '.edit-attending-friends', openFriendModal);
};

const initializeFriendsPage = () => {
  holidaysPage();
  bindEvents();
};

export default initializeFriendsPage;
