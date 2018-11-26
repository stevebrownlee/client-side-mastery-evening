import $ from 'jquery';
import authHelpers from '../../helpers/authHelpers';
import holidaysData from '../../helpers/data/holidaysData';

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

const printSingleHoliday = (holiday) => {
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
  </div>
  `;
  $('#single-holiday').html(domString);
};

const getSingleHoliday = (e) => {
  $('#all-holidays').html('');
  const holidayId = e.target.id;
  holidaysData.getSingleHoliday(holidayId)
    .then((singleHoliday) => {
      printSingleHoliday(singleHoliday);
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
