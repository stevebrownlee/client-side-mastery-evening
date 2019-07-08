import React from 'react';
import { Link } from 'react-router-dom';

import scatData from '../../helpers/data/scats';

import './SingleScat.scss';

class SingleScat extends React.Component {
  state={
    scat: {},
  }

  componentDidMount() {
    const scatId = this.props.match.params.id;
    scatData.getSingle(scatId)
      .then(scat => this.setState({ scat }))
      .catch(err => console.error('could not find scat to edit', err));
  }

  deleteScat = () => {
    const scatId = this.props.match.params.id;
    scatData.deleteRequest(scatId)
      .then(() => this.props.history.push('/home'))
      .catch(err => console.error('error with delete request', err));
  }

  render() {
    const { scat } = this.state;
    const scatId = this.props.match.params.id;
    const editLink = `/edit/${scatId}`;
    return (
      <div className="SingleScat col">
        <h1>{scat.title}</h1>
        <h2>Color: {scat.color}</h2>
        <h3>Origin: {scat.origin}</h3>
        <h4>Date: {scat.date}</h4>
        <h5>Status: {scat.status}</h5>
        <Link className="btn btn-primary" to={editLink}>Edit</Link>
        <button onClick={this.deleteScat} className="btn btn-danger">Delete</button>
      </div>
    );
  }
}

export default SingleScat;
