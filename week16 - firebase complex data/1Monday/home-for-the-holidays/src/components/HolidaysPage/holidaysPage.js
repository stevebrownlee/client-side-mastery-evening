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
  let friendsString = '<h4>Friends Attending</h4><ul>';
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

const bindEvents = () => {
  $('body').on('click', '.holiday', getSingleHoliday);
  // $('body').on('click', '.delete-btn', deleteFriend);
};

const initializeFriendsPage = () => {
  holidaysPage();
  bindEvents();
};

export default initializeFriendsPage;
