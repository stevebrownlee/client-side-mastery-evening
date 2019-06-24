import React from 'react';

import goatShape from '../../helpers/propz/goatShape.js';
import './Goat.scss';

class Goat extends React.Component {
  static propTypes = {
    goats: goatShape.goatShape,
  }

  render() {
    const {goat} = this.props;
    return (
      <div className="Goat col-3">
        <div className="card">
          <img src={goat.imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{goat.name}</h5>
            <p className="card-text">{goat.age} Years old</p>
            <p className="card-text">{goat.description}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Goat;