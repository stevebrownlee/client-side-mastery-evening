import React from 'react';
import './Home.scss';

class Home extends React.Component {
  render() {
    const { testText } = this.props;
    return (
      <div className="Home">
          <h1 className="testTarget">{testText}</h1>
      </div>
    );
  }
}

export default Home;
