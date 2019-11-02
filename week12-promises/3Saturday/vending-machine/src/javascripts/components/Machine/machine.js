import smash from '../../helpers/data/smash';
import utilities from '../../helpers/utilities';

import './machine.scss';

const buildTheMachine = () => {
  smash.getCompleteMachine()
    .then((snacks) => {
      let domString = '';
      snacks.forEach((snack) => {
        domString += `<div>${snack.position}: snack=${snack.snack.name}</div>`;
      });
      utilities.printToDom('machine', domString);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default { buildTheMachine };
