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

  render() {
    const { setSingleBoard } = this.props;
    const makeBoards = this.state.boards.map((b) => <Board key={b.id} board={b} setSingleBoard={setSingleBoard}/>);
    const showForm = () => {
      if (this.state.formOpen) {
        return <BoardForm saveNewBoard={this.saveNewBoard}/>;
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
