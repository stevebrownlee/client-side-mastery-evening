import React from 'react';

import './ScatCard.scss';

class ScatCard extends React.Component {
  render() {
    const { scat } = this.props;
    return (
      <div className="ScatCard col-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{scat.title}</h5>
            <p className="card-text">{scat.color}</p>
            <p className="card-text">{scat.origin}</p>
            <a className="btn btn-danger">Edit</a>
            <a className="btn btn-primary">Delete</a>
          </div>
        </div>
      </div>
    );
  }
}

export default ScatCard;
