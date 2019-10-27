import cowData from './cows';
import farmerData from './farmers';
import farmerCowData from './farmerCows';

const getCompleteCows = () => new Promise((resolve, reject) => {
  cowData.getCows()
    .then((cows) => {
      const finalCows = [];
      farmerData.getFarmers().then((farmers) => {
        farmerCowData.getFarmerCows().then((farmerCows) => {
          cows.forEach((cow) => {
            const newCow = { ...cow };
            const farmerCowRecord = farmerCows.find((x) => x.cowId === cow.id);
            const owner = farmers.find((x) => x.id === farmerCowRecord.farmerId);
            newCow.owner = owner;
            finalCows.push(newCow);
          });
          resolve(finalCows);
        });
      });
    })
    .catch((err) => reject(err));
});

export default { getCompleteCows };
