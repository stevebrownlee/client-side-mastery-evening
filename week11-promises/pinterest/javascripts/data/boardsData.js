const loadBoards = (userId) => {
  return new Promise((resolve, reject) => {
    $.get('../db/boards.json')
      .done((data) => {
        const boards = data.boards.filter(board => board.user_id == userId);
        resolve(boards);
      })
      .fail((error) => {
        reject('Got an error!', error);
      })
  })
}

export {loadBoards};