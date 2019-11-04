// import $ from 'jquery';

// import snackPosition from '../../helpers/data/snackPositionsData';
import smash from '../../helpers/data/smash';
import utilities from '../../helpers/utilities';

import stockCard from '../StockCard/stockCard';

import './stocker.scss';

// const deleteFromMachine = (e) => {
//   console.log(e.target.id);
//   snackPosition
// };

const buildTheStocker = (uid) => {
  smash.getSnacksWithPositions(uid)
    .then((snacks) => {
      let domString = '<h2>STOCK THE MACHINE</h2>';
      domString += '<div class="d-flex flex-wrap text-center">';
      snacks.forEach((snack) => {
        domString += stockCard.makeASnack(snack);
      });
      domString += '</div>';
      utilities.printToDom('stock', domString);
      // $('body').on('click', '.delete-snack-position', deleteFromMachine);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default { buildTheStocker };
