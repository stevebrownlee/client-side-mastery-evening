import React from 'react';
import PropTypes from 'prop-types';

import goatShape from '../../helpers/propz/goatShape';
import './Goat.scss';

class Goat extends React.Component {
  static propTypes = {
    goat: goatShape.goatShape,
    freeAGoat: PropTypes.func,
    useAGoat: PropTypes.func,
  }

  freeGoat = (e) => {
    const { goat, freeAGoat } = this.props;
    e.preventDefault();
    freeAGoat(goat.id);
  }

  render() {
    const { goat } = this.props;
    return (
      <div className="Goat col-3">
        <div className="card">
          <img src={goat.imgUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{goat.name}</h5>
            <p className="card-text">{goat.age} Years old</p>
            <p className="card-text">{goat.description}</p>
          </div>
          <div className="card-footer">
            {
              goat.isBusy ? (
                <button className="nav-link btn btn-danger col-12" onClick={this.freeGoat}>FREE THE GOAT</button>
              ) : (
                <button className="nav-link btn btn-success col-12" onClick={this.useGoat}>USE THE GOAT</button>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Goat;
