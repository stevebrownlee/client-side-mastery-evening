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

export {loadPinsForBoard};