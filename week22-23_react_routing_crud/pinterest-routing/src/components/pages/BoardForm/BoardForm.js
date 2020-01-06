import React from 'react';
import './BoardForm.scss';

import authData from '../../../helpers/data/authData';
import boardData from '../../../helpers/data/boardData';

class BoardForm extends React.Component {
  state = {
    boardName: '',
    boardDescription: '',
    isEditing: false,
  }

  componentDidMount() {
    if (this.props.path.split('/')[3] === 'edit') {
      const { boardId } = this.props.match.params;
      boardData.getSingleBoard(boardId)
        .then((request) => {
          const board = request.data;
          this.setState({ boardName: board.name, boardDescription: board.description, isEditing: true });
        })
        .catch((errorFromGetSingleBoard) => console.error({ errorFromGetSingleBoard }));
    }
  }

  saveBoardEvent = (e) => {
    e.preventDefault();
    const newBoard = {
      name: this.state.boardName,
      description: this.state.boardDescription,
      uid: authData.getUid(),
    };
    boardData.saveBoard(newBoard)
      .then(() => {
        this.setState({ boardName: '', boardDescription: '', isEditing: false });
        this.props.history.push('/');
      })
      .catch((errorFromSaveBoard) => console.error({ errorFromSaveBoard }));
  }

  editBoardEvent= (e) => {
    e.preventDefault();
    const { boardId } = this.props.match.params;
    const newBoard = {
      name: this.state.boardName,
      description: this.state.boardDescription,
      uid: authData.getUid(),
    };
    boardData.updateBoard(boardId, newBoard)
      .then(() => {
        this.setState({ boardName: '', boardDescription: '', isEditing: false });
        this.props.history.push('/');
      })
      .catch((errorFromSaveBoard) => console.error({ errorFromSaveBoard }));
  }

  nameChange = (e) => {
    e.preventDefault();
    this.setState({ boardName: e.target.value });
  }

  descriptionChange = (e) => {
    e.preventDefault();
    this.setState({ boardDescription: e.target.value });
  }

  render() {
    const { boardName, isEditing, boardDescription } = this.state;
    return (
      <form className='col-6 offset-3 BoardForm'>
        <div className="form-group">
          <label htmlFor="order-name">Board Name:</label>
          <input
            type="text"
            className="form-control"
            id="board-name"
            placeholder="Enter board name"
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
            placeholder="Enter board description"
            value={boardDescription}
            onChange={this.descriptionChange}
          />
        </div>
        { isEditing
          ? (<button className="btn btn-secondary" onClick={this.editBoardEvent}>Edit Board</button>)
          : (<button className="btn btn-secondary" onClick={this.saveBoardEvent}>Save Board</button>)
        }
      </form>
    );
  }
}

export default BoardForm;
