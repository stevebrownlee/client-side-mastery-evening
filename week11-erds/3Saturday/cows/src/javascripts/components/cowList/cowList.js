import cowData from '../../helpers/data/cows';

import './cowList.scss';

const buildCows = () => {
  cowData.getCows()
    .then((response) => {
      const demCows = response.data.cows;
      const cows = [];
      Object.keys(demCows).forEach((fbKey) => {
        demCows[fbKey].id = fbKey;
        cows.push(demCows[fbKey]);
      });

      console.log('it worked!', cows);
    })
    .catch((error) => {
      console.error('shit broke', error);
    });
};

export default { buildCows };
