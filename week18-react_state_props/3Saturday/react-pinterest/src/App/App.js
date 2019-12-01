import React from 'react';
import firebase from 'firebase/app';

import fbConnection from '../helpers/data/connection';

import Auth from '../components/Auth/Auth';
import BoardContainer from '../components/BoardContainer/BoardContainer';
import SingleBoard from '../components/SingleBoard/SingleBoard';

import './App.scss';

fbConnection();

class App extends React.Component {
  state = {
    authed: false,
    singleBoardId: '',
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  setSingleBoard = (singleBoardId) => {
    this.setState({ singleBoardId });
  }

  render() {
    const { authed, singleBoardId } = this.state;
    const loadComponent = () => {
      let componentToLoad = '';
      if (authed && singleBoardId.length === 0) {
        componentToLoad = <BoardContainer setSingleBoard={this.setSingleBoard} />;
      } else if (authed && singleBoardId.length > 0) {
        componentToLoad = <SingleBoard setSingleBoard={this.setSingleBoard} boardId={singleBoardId} />;
      } else {
        componentToLoad = <Auth />;
      }

      return componentToLoad;
    };

    return (
      <div className="App">
        {loadComponent()}
      </div>
    );
  }
}

export default App;
