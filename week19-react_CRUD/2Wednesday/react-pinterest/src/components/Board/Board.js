import React from 'react';
import PropTypes from 'prop-types';

import boardShape from '../../helpers/propz/boardShape';

import './Board.scss';

class Board extends React.Component {
  static propTypes = {
    board: boardShape.boardShape,
    setSingleBoard: PropTypes.func,
    editABoard: PropTypes.func,
  }

  goToSingleBoard = () => {
    const { board, setSingleBoard } = this.props;
    setSingleBoard(board.id);
  }

  editBoard = () => {
    const { board, editABoard } = this.props;
    editABoard(board);
  }

  render() {
    const { board } = this.props;
    return (
      <div className="Board col-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{board.name}</h5>
            <p className="card-text">{board.description}</p>
            <button className="btn btn-warning col-6" onClick={this.editBoard}>Edit Board</button>
            <button className="btn btn-primary col-6" onClick={this.goToSingleBoard}>View Pins</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
