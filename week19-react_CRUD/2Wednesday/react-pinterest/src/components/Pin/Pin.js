import React from 'react';
import PropTypes from 'prop-types';

import pinShape from '../../helpers/propz/pinShape';

import './Pin.scss';

class Pin extends React.Component {
  static propTypes = {
    pin: pinShape.pinShape,
    removePin: PropTypes.func,
  }

  render() {
    const { pin, removePin, editAPin } = this.props;
    return (
      <div className="Pin col-3">
        <div className="card">
          <img src={pin.imageUrl} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{pin.title}</h5>
            <button className="btn btn-warning col-6" onClick={() => editAPin(pin)}>Edit</button>
            <button className="btn btn-danger col-6" onClick={() => removePin(pin.id)}>X</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Pin;