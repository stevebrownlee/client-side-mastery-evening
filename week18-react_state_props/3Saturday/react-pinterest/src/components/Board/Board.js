import React from 'react';

import './Board.scss';

class Board extends React.Component {
  goToSingleBoard = () => {
    const { board, setSingleBoard } = this.props;
    setSingleBoard(board.id);
  }

  render() {
    const { board } = this.props;
    return (
      <div className="Board col-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{board.name}</h5>
            <p className="card-text">{board.description}</p>
            <button className="btn btn-primary" onClick={this.goToSingleBoard}>View Pins</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;