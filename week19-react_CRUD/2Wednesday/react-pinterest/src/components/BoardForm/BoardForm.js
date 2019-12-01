import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../helpers/data/authData';

import './BoardForm.scss';

class BoardForm extends React.Component {
  static propTypes = {
    saveNewBoard: PropTypes.func,
  }

  state= {
    boardName: '',
    boardDescription: '',
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

    return (
      <div>
        <form className='col-6 offset-3 BoardForm'>
          <div className="form-group">
            <label htmlFor="order-name">Board Name:</label>
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
          <button className="btn btn-secondary" onClick={this.saveBoard}>Save Board</button>
        </form>
      </div>
    );
  }
}

export default BoardForm;
