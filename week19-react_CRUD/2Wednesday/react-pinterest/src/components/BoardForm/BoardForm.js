import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../helpers/data/authData';

import './BoardForm.scss';

class BoardForm extends React.Component {
  static propTypes = {
    saveNewBoard: PropTypes.func,
    putBoard: PropTypes.func,
  }

  state = {
    boardName: '',
    boardDescription: '',
  }

  componentDidMount() {
    const { board } = this.props;
    if (Object.keys(board).length > 0) {
      this.setState({ boardName: board.name, boardDescription: board.description });
    }
  }

  saveBoard = (e) => {
    e.preventDefault();
    const newBoard = {
      name: this.state.boardName,
      description: this.state.boardDescription,
      uid: authData.getUid(),
    };
    this.props.saveNewBoard(newBoard);
  }

  updateBoard = (e) => {
    e.preventDefault();
    const { board } = this.props;
    const updatedBoard = {
      name: this.state.boardName,
      description: this.state.boardDescription,
      uid: board.uid,
    };
    this.props.putBoard(board.id, updatedBoard);
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ boardName: e.target.value });
  };

  descriptionChange = (e) => {
    e.preventDefault();
    this.setState({ boardDescription: e.target.value });
  };

  render() {
    const { boardDescription, boardName } = this.state;
    const { board } = this.props;
    return (
      <div>
        <form className='col-6 offset-3 BoardForm'>
          <div className="form-group">
            <label htmlFor="board-name">Board Name:</label>
            <input
              type="text"
              className="form-control"
              id="board-name"
              placeholder="Zoe's Pins"
              value={boardName}
              onChange={this.nameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description-name">Board Description:</label>
            <input
              type="text"
              className="form-control"
              id="board-description"
              placeholder="All the amazing pins that zoe loves."
              value={boardDescription}
              onChange={this.descriptionChange}
            />
          </div>

          {Object.keys(board).length > 0 ? (
            <button className="btn btn-secondary" onClick={this.updateBoard}>Update Board</button>
          ) : (
            <button className="btn btn-secondary" onClick={this.saveBoard}>Save Board</button>
          )}
        </form>
      </div>
    );
  }
}

export default BoardForm;
