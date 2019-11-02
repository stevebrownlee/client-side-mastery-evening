import snackData from '../../helpers/data/snackData';
import utilities from '../../helpers/utilities';

import './stocker.scss';

const buildTheStocker = (uid) => {
  snackData.getSnacksByUid(uid)
    .then((snacks) => {
      let domString = '';
      snacks.forEach((snack) => {
        domString += `<div>${snack.name}</div>`;
      });
      utilities.printToDom('stock', domString);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default { buildTheStocker };
