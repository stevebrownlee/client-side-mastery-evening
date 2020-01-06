import React from 'react';
import { Link } from 'react-router-dom';
import './SingleBoard.scss';

import boardData from '../../../helpers/data/boardData';
import pinData from '../../../helpers/data/pinData';

import Pin from '../../shared/Pin/Pin';

class SingleBoard extends React.Component {
  state = {
    board: {},
    pins: [],
  }

  componentDidMount() {
    const selectedBoardId = this.props.match.params.boardId;
    boardData.getSingleBoard(selectedBoardId)
      .then((request) => {
        this.setState({ board: request.data });
        this.getPinData(selectedBoardId);
      })
      .catch((errorFromGetSingleBoard) => console.error({ errorFromGetSingleBoard }));
  }

  getPinData = (selectedBoardId) => {
    pinData.getPinsByBoardId(selectedBoardId)
      .then((pins) => {
        this.setState({ pins });
      })
      .catch((errorFromGetPins) => console.error({ errorFromGetPins }));
  }

  deleteSinglePin = (pinId) => {
    const selectedBoardId = this.props.match.params.boardId;

    pinData.deletePin(pinId)
      .then(() => {
        this.getPinData(selectedBoardId);
      })
      .catch((errorFromDeletePin) => console.error({ errorFromDeletePin }));
  }

  render() {
    const { boardId } = this.props.match.params;
    const { board, pins } = this.state;
    return (
      <div className="SingleBoard col-8 offset-2">
        <h2>{board.name}</h2>
        <p>{board.description}</p>
        <Link className="btn btn-primary" to={`/board/${boardId}/pin/new`}>Add a pin</Link>
        <div className="d-flex flex-wrap">
          { pins.map((pin) => <Pin key={pin.id} pin={pin} deleteSinglePin={this.deleteSinglePin} />)}
        </div>
      </div>
    );
  }
}

export default SingleBoard;
