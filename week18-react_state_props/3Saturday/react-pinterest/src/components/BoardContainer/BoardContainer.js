import React from 'react';

import authData from '../../helpers/data/authData';
import boardData from '../../helpers/data/boardData';

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
    return (
      <div className="BoardContainer">
        <button>HI</button>
      </div>
    );
  }
}

export default BoardContainer;