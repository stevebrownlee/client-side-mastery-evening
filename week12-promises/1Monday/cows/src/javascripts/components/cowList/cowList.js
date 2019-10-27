// import cowData from '../../helpers/data/cows';
import smash from '../../helpers/data/smash';
import utilities from '../../helpers/utilities';

import './cowList.scss';
import cowCard from '../cowCard/cowCard';

// const buildCows = () => {
//   cowData.getCows()
//     .then((cows) => {
//       let domString = '';
//       cows.forEach((cow) => {
//         domString += cowCard.buildCowCard(cow);
//       });
//       utilities.printToDom('pasture', domString);
//     })
//     .catch((error) => {
//       console.error('shit broke', error);
//     });
// };

const buildCows = () => {
  smash.getCompleteCows()
    .then((cows) => {
      let domString = '';
      cows.forEach((cow) => {
        domString += cowCard.buildCowCard(cow);
      });
      utilities.printToDom('pasture', domString);
    })
    .catch((error) => {
      console.error('shit broke', error);
    });
};

export default { buildCows };
