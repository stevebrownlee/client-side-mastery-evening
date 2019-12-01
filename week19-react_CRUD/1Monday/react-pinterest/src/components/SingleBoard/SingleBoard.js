import React from 'react';
import PropTypes from 'prop-types';

import boardData from '../../helpers/data/boardData';
import pinData from '../../helpers/data/pinData';

import Pin from '../Pin/Pin';

import './SingleBoard.scss';

class SingleBoard extends React.Component {
  static propTypes = {
    setSingleBoard: PropTypes.func,
    boardId: PropTypes.string,
  }

  state = {
    board: {},
    pins: [],
  }

  getInfo = () => {
    const { boardId } = this.props;
    boardData.getSingleBoard(boardId)
      .then((request) => {
        this.setState({ board: request.data });
        pinData.getPinsByBoardId(boardId)
          .then((pins) => this.setState({ pins }))
      })
      .catch(err => console.error('error with get board request', err));
  }

  componentDidMount() {
    this.getInfo();
  }

  removePin = (pinId) => {
    pinData.deletePin(pinId)
      .then(() => this.getInfo())
      .catch(err => console.error('error with delete board request', err));
  }

  render() {
    const { board, pins } = this.state;
    const { setSingleBoard } = this.props;
    const makePins = pins.map((p) => <Pin key={p.id} pin={p} setSingleBoard={setSingleBoard} removePin={this.removePin} />)
    return (
      <div>
        <button className="btn btn-info" onClick={() => {setSingleBoard('')}}>x Close Board View</button>
        <div className="SingleBoard col-8 offset-2">
          <h2>{board.name}</h2>
          <p>{board.description}</p>
          <div className="d-flex flex-wrap">
            {makePins}
          </div>
        </div>
      </div>
    );
  }
}

export default SingleBoard;