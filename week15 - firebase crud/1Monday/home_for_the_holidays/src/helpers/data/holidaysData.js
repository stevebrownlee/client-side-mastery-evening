import axios from 'axios';
import apiKeys from '../../../db/apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getHolidaysByArrayOfIds = (uid, holidayIdsArray) => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/holidays.json?orderBy="uid"&equalTo="${uid}"`)
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

export default { getHolidaysByArrayOfIds };