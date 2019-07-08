import React from 'react';
import { Link } from 'react-router-dom';

import './ScatCard.scss';

class ScatCard extends React.Component {
  deleteMe = (e) => {
    e.preventDefault();
    const { scat, deleteScat } = this.props;
    deleteScat(scat.id);
  }

  render() {
    const { scat } = this.props;
    const editLink = `/edit/${scat.id}`;
    const singleLink = `/scat/${scat.id}`;
    return (
      <div className="ScatCard col-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{scat.title}</h5>
            <Link className="btn btn-success" to={singleLink}>View</Link>
            <p className="card-text">{scat.color}</p>
            <p className="card-text">{scat.origin}</p>
            <Link className="btn btn-primary" to={editLink}>Edit</Link>
            <button onClick={this.deleteMe} className="btn btn-danger">Delete</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ScatCard;
