import React from 'react';
// import {
//   Link,
// } from 'react-router-dom';

import './Home.scss';

import authData from '../../../helpers/data/authData';
import boardData from '../../../helpers/data/boardData';

import Board from '../../shared/Board/Board';

class Home extends React.Component {
  state = {
    boards: [],
  }

  componentDidMount() {
    this.getBoards();
  }

  getBoards = () => {
    boardData.getBoardsByUid(authData.getUid())
      .then((boards) => {
        this.setState({ boards });
      })
      .catch((errFromBoardsContainer) => console.error({ errFromBoardsContainer }));
  }

  deleteSingleBoard = (boardId) => {
    boardData.deleteBoard(boardId)
      .then(() => {
        this.getBoards();
      })
      .catch((errorFromDeleteBoard) => console.error(errorFromDeleteBoard));
  }

  render() {
    // const boardId = '12345';
    // <Link className="btn btn-secondary" to={`/board/${boardId}`}>Single board with id = 12345</Link>
    return (
      <div className="Home">
        <h1>BOARDS</h1>
        <div className="boards d-flex flex-wrap">
          {this.state.boards.map((board) => (<Board key={board.id} board={board} deleteSingleBoard={this.deleteSingleBoard}/>))}
        </div>
      </div>
    );
  }
}

export default Home;
