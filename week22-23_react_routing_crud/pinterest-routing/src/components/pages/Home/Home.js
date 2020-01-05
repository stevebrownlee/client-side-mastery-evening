import React from 'react';
import {
  Link,
} from 'react-router-dom';

import './Home.scss';

class Home extends React.Component {
  render() {
    const boardId = '12345';
    return (
      <div className="Home">
        <h1>BOARDS</h1>
        <Link className="btn btn-secondary" to={`/board/${boardId}`}>Single board with id = 12345</Link>
      </div>
    );
  }
}

export default Home;
