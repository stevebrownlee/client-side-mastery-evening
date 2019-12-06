import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../helpers/data/authData';
import boardData from '../../helpers/data/boardData';

import BoardForm from '../BoardForm/BoardForm';

import Board from '../Board/Board';

import './BoardContainer.scss';

class BoardContainer extends React.Component {
  static propTypes = {
    setSingleBoard: PropTypes.func,
  }

  state = {
    boards: [],
    formOpen: false,
    editBoard: {},
  }

  getBoards = () => {
    boardData.getBoardsByUid(authData.getUid())
      .then((boards) => {
        this.setState({ boards });
      })
      .catch((err) => console.error('error with get boards request', err));
  }

  componentDidMount() {
    this.getBoards();
  }

  saveNewBoard = (newBoard) => {
    boardData.saveBoard(newBoard)
      .then(() => {
        this.getBoards();
        this.setState({ formOpen: false });
      })
      .catch((err) => console.error('error saving new board', err));
  }

  putBoard = (boardId, updatedBoard) => {
    boardData.updateBoard(boardId, updatedBoard)
      .then(() => {
        this.getBoards();
        this.setState({ formOpen: false, editBoard: {} });
      })
      .catch((err) => console.error('error saving new board', err));
  }

  editABoard = (board) => {
    this.setState({ editBoard: board, formOpen: true });
  }

  render() {
    const { setSingleBoard } = this.props;
    const makeBoards = this.state.boards.map((b) => <Board key={b.id} board={b} setSingleBoard={setSingleBoard} editABoard={this.editABoard}/>);
    const showForm = () => {
      if (this.state.formOpen) {
        return <BoardForm saveNewBoard={this.saveNewBoard} board={this.state.editBoard} putBoard={this.putBoard}/>;
      }
      return '';
    };

    return (
      <div className="BoardContainer">
        <h2>Boards</h2>
        <button className="btn btn-info" onClick={() => this.setState({ formOpen: true })}>New Board</button>
        { showForm() }
        <div className="d-flex flex-wrap">
          {makeBoards}
        </div>
      </div>
    );
  }
}

export default BoardContainer;
