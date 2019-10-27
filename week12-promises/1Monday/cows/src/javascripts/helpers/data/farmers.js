import axios from 'axios';

const getFarmers = () => new Promise((resolve, reject) => {
  axios.get('../../../../db/farmers.json')
    .then((response) => {
      const demCows = response.data.farmers;
      const farmers = [];
      Object.keys(demCows).forEach((fbKey) => {
        demCows[fbKey].id = fbKey;
        farmers.push(demCows[fbKey]);
      });

      resolve(farmers);
    })
    .catch((err) => reject(err));
});

export default { getFarmers };
