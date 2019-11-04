import axios from 'axios';

const getFarmerCows = () => new Promise((resolve, reject) => {
  axios.get('../../../../db/farmerCows.json')
    .then((response) => {
      const demFarmerCows = response.data.farmerCows;
      const farmerCows = [];
      Object.keys(demFarmerCows).forEach((fbKey) => {
        demFarmerCows[fbKey].id = fbKey;
        farmerCows.push(demFarmerCows[fbKey]);
      });

      resolve(farmerCows);
    })
    .catch((err) => reject(err));
});

export default { getFarmerCows };
