import smash from '../../helpers/data/smash';
import utilities from '../../helpers/utilities';
import snackComponent from '../SnackCard/snackCard';

import './machine.scss';

const buildTheMachine = () => {
  smash.getCompleteMachine()
    .then((snacks) => {
      let domString = '<h2 class="text-center">VENDING MACHINE</h2>';
      domString += '<div class="d-flex flex-wrap text-center">';
      snacks.forEach((snack) => {
        domString += snackComponent.makeASnack(snack);
      });
      domString += '</div>';
      utilities.printToDom('machine', domString);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default { buildTheMachine };
