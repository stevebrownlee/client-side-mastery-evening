import boardsData from '../../helpers/data/boardsData';
import pinsData from '../../helpers/data/pinsData';
import util from '../../helpers/util';
import pins from '../pins/pins';

import './boards.scss';

const seePinEvent = (e) => {
  const clickedBoardId = e.target.closest('.card').id;
  document.getElementById('boards-page').classList.add('hide');
  document.getElementById('pins-page').classList.remove('hide');
  pins.initialPinsView(clickedBoardId);
};

const bindEvents = () => {
  const seePinsButtons = document.getElementsByClassName('see-pins');
  for (let i = 0; i < seePinsButtons.length; i += 1) {
    seePinsButtons[i].addEventListener('click', seePinEvent);
  }
};

const writeBoards = (boards) => {
  let domString = '';
  boards.forEach((board) => {
    domString += '<div class="col-1">';
    domString += `<div id='${board.id}' class="card p-2">`;
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${board.name}</h5>`;
    domString += `<button class="btn btn-warning see-pins">${board.pins.length} Pins</button>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  util.printToDom('user-boards', domString);
};

const initialBoardsView = () => {
  boardsData.loadBoards().then(boardResp => pinsData.loadPinsOnBoards(boardResp.data.boards))
    .then((boardsWithPins) => {
      writeBoards(boardsWithPins);
      bindEvents();
    }).catch(error => console.error(error));
};

export default { initialBoardsView };
