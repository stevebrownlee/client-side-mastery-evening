const loadPinsForBoard = (boardId) => {
  return new Promise((resolve, reject) => {
    $.get('../db/pins.json')
      .done((data) => {
        const pinsForBoard = data.pins.filter(pin => pin.board_id == boardId);
        resolve(pinsForBoard);
      })
      .fail((error) => {
        reject('Got an error!', error);
      })
  })
}

const loadPinsOnBoards = (boards) => {
  console.log(boards);
  return new Promise((resolve, reject) => {
    $.get('../db/pins.json')
      .done((data) => {
        let boardsWithPins;
        boardsWithPins = boards.map(board => {
          const matchingPins = data.pins.filter(pin =>  pin.board_id === board.id);
          board.pins = matchingPins;
          return board;
        });
        resolve(boardsWithPins);
      })
      .fail((error) => {
        reject('Got an error!', error);
      })
  })
}

export {loadPinsForBoard, loadPinsOnBoards};