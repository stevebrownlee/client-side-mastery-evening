import axios from 'axios';

const loadPinsForBoard = boardId => new Promise((resolve, reject) => {
  axios.get('../db/pins.json')
    .then((resp) => {
      const data = resp.data.pins;
      const pinsForBoard = data.filter(pin => pin.boardId === boardId);
      resolve(pinsForBoard);
    })
    .catch(error => reject(error));
});

const loadPinsOnBoards = boards => new Promise((resolve, reject) => {
  axios.get('../db/pins.json')
    .then((resp) => {
      const data = resp.data.pins;
      const boardsWithPins = boards.map((board) => {
        const newBoard = board;
        const matchingPins = data.filter(pin => pin.boardId === newBoard.id);
        newBoard.pins = matchingPins;
        return newBoard;
      });
      resolve(boardsWithPins);
    })
    .catch(error => reject(error));
});

export default { loadPinsForBoard, loadPinsOnBoards };
