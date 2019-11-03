import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';

import snackPositionsData from '../../helpers/data/snackPositionsData';

import smash from '../../helpers/data/smash';
import utilities from '../../helpers/utilities';

import machine from '../Machine/machine';
import stockCard from '../StockCard/stockCard';

import './stocker.scss';

const addToMachine = (e) => {
  e.stopImmediatePropagation();
  const { uid } = firebase.auth().currentUser;
  const snackId = e.target.id;
  const inputText = $(e.target).siblings()[0].value;
  smash.getAvailablePositions()
    .then((positions) => {
      const selectedPosition = positions.find((x) => x.position.toLowerCase() === inputText.toLowerCase());
      if (selectedPosition) {
        const newSnackPosition = {
          positionId: selectedPosition.id,
          snackId,
          machineId: selectedPosition.machineId,
          uid,
        };
        snackPositionsData.createSnackPosition(newSnackPosition)
          .then(() => {
            // eslint-disable-next-line no-use-before-define
            buildTheStocker(uid);
            machine.buildTheMachine();
          });
      }
    })
    .catch((error) => console.error(error));
};

const deleteFromMachine = (e) => {
  e.preventDefault();
  const { uid } = firebase.auth().currentUser;
  snackPositionsData.deleteSnackPosition(e.target.id)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      buildTheStocker(uid);
      machine.buildTheMachine();
    })
    .catch((error) => console.error(error));
};

const addStockEvents = () => {
  $('#stock').on('click', '.delete-snack-position', deleteFromMachine);
  $('#stock').on('click', '.add-snack-position', addToMachine);
};

const buildTheStocker = (uid) => {
  smash.getSnacksWithPositions(uid)
    .then((snacks) => {
      let domString = '<h2>STOCK THE MACHINE</h2>';
      domString += `<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
      Add new snack
    </button>`;
      domString += '<div class="d-flex flex-wrap text-center">';
      snacks.forEach((snack) => {
        domString += stockCard.makeASnack(snack);
      });
      domString += '</div>';
      utilities.printToDom('stock', domString);
      addStockEvents();
    })
    .catch((error) => {
      console.error(error);
    });
};

export default { buildTheStocker };
