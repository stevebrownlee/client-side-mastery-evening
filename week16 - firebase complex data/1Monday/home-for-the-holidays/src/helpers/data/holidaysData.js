import axios from 'axios';
import apiKeys from '../../../db/apiKeys.json';

const firebaseUrl = apiKeys.firebaseKeys.databaseURL;

const getHolidaysByArrayOfIds = (uid, holidayIdsArray) => new Promise((resolve, reject) => {
  axios
    .get(`${firebaseUrl}/holidays.json?orderBy="uid"&equalTo="${uid}"`)
    .then((result) => {
      const holidaysObj = result.data;
      const holidaysArray = [];
      if (holidaysObj != null) {
        Object.keys(holidaysObj).forEach((holidayId) => {
          holidaysObj[holidayId].id = holidayId;
          holidaysArray.push(holidaysObj[holidayId]);
        });
      }
      if (holidayIdsArray.length > 0) {
        const selectedHolidays = holidaysArray.filter(x => holidayIdsArray.includes(x.id));
        resolve(selectedHolidays);
      } else {
        resolve([]);
      }
    })
    .catch((err) => {
      reject(err);
    });
});

const getAllHolidays = uid => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/holidays.json?orderBy="uid"&equalTo="${uid}"`)
    .then((results) => {
      const holidaysObject = results.data;
      const holidaysArray = [];
      if (holidaysObject !== null) {
        Object.keys(holidaysObject).forEach((holidayId) => {
          holidaysObject[holidayId].id = holidayId;
          holidaysArray.push(holidaysObject[holidayId]);
        });
      }
      resolve(holidaysArray);
    })
    .catch((error) => {
      reject(error);
    });
});

const getSingleHoliday = holidayId => new Promise((resolve, reject) => {
  axios.get(`${firebaseUrl}/holidays/${holidayId}.json`)
    .then((result) => {
      const singleHoliday = result.data;
      singleHoliday.id = holidayId;
      resolve(singleHoliday);
    })
    .catch((error) => {
      reject(error);
    });
});

export default { getHolidaysByArrayOfIds, getAllHolidays, getSingleHoliday };
