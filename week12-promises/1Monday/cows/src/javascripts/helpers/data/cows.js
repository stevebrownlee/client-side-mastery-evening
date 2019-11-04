import axios from 'axios';

const getCows = () => new Promise((resolve, reject) => {
  axios.get('../../../../db/cows.json')
    .then((response) => {
      const demCows = response.data.cows;
      const cows = [];
      Object.keys(demCows).forEach((fbKey) => {
        demCows[fbKey].id = fbKey;
        cows.push(demCows[fbKey]);
      });

      resolve(cows);
    })
    .catch((err) => reject(err));
});

export default { getCows };
