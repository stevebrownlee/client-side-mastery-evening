import pinsData from '../../helpers/data/pinsData';
import util from '../../helpers/util';

import './pins.scss';

const bindEvents = () => {
  document.getElementById('toBoardsBtn').addEventListener('click', () => {
    document.getElementById('boards-page').classList.remove('hide');
    document.getElementById('pins-page').classList.add('hide');
  });
};

const writePins = (pins) => {
  let domString = '';
  pins.forEach((pin) => {
    domString += `<div id='${pin.id}' class="col-2 p-2">`;
    domString += `<img class="card-img-top" src="${pin.imageUrl}" alt="pin image">`;
    domString += '</div>';
  });
  util.printToDom('pins-on-board', domString);
};

const initialPinsView = (boardId) => {
  pinsData.loadPinsForBoard(boardId)
    .then((data) => {
      writePins(data);
      bindEvents();
    }).catch(error => console.error('load pins view', error));
};

export default { initialPinsView };
