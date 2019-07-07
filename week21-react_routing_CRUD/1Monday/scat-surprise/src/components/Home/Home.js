import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import ScatCard from '../ScatCard/ScatCard';
import scatData from '../../helpers/data/scats';

import './Home.scss';

class Home extends React.Component {
  state={
    scats: [],
  }

  editEvent = (e) => {
    const orderId = '12345';
    e.preventDefault();
    this.props.history.push(`/edit/${orderId}`);
  }

  componentDidMount() {
    const { uid } = firebase.auth().currentUser;
    scatData.getRequest(uid)
      .then(scats => this.setState({ scats }))
      .catch(err => console.error('could not get scats', err));
  }

  render() {
    const scatCards = this.state.scats.map(scat => (
      <ScatCard
        key={scat.id}
        scat={scat}
      />
    ));
    return (
      <div className="Home col">
        <h1>My Scats</h1>
        <div className="d-flex">
          {scatCards}
        </div>
      </div>
    );
  }
}

export default Home;
