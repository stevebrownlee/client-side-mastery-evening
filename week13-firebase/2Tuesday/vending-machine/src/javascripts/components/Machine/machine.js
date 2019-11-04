import $ from 'jquery';

import smash from '../../helpers/data/smash';
import utilities from '../../helpers/utilities';
import snackComponent from '../SnackCard/snackCard';

import './machine.scss';
import snackData from '../../helpers/data/snackData';

const buySnack = (e) => {
  e.stopImmediatePropagation();
  const snackId = $(e.target).closest('.card')[0].id;
  snackData.buySnack(snackId)
    // eslint-disable-next-line no-use-before-define
    .then(() => buildTheMachine())
    .catch((error) => console.error(error));
};

const buildTheMachine = () => {
  smash.getCompleteMachine()
    .then((positions) => {
      let domString = '<h2 class="text-center">VENDING MACHINE</h2>';
      domString += '<div class="d-flex flex-wrap text-center">';
      positions.forEach((position) => {
        domString += snackComponent.makeASnack(position);
      });
      domString += '</div>';
      utilities.printToDom('machine', domString);
      $('#machine').on('click', '.buy-snack', buySnack);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default { buildTheMachine };
