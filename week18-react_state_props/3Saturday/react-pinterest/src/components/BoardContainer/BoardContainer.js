import React from 'react';

import authData from '../../helpers/data/authData';
import boardData from '../../helpers/data/boardData';

import Board from '../Board/Board';

import './BoardContainer.scss';

class BoardContainer extends React.Component {
  state = {
    boards: [],
  }

  componentDidMount() {
    boardData.getBoardsByUid(authData.getUid())
      .then((boards) => {
        this.setState({ boards });
      })
      .catch(err => console.error('error with get boards request', err));
  }

  render() {
    const {setSingleBoard} = this.props;
    const makeBoards = this.state.boards.map((b) => <Board key={b.id} board={b} setSingleBoard={setSingleBoard}/>)
    return (
      <div className="BoardContainer">
        <h2>Boards</h2>
        <div className="d-flex flex-wrap">
          {makeBoards}
        </div>
      </div>
    );
  }
}

export default BoardContainer;