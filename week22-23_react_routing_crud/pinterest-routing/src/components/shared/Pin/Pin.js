import React from 'react';
import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import './Pin.scss';

import pinShape from '../../../helpers/propz/pinShape';

class Pin extends React.Component {
  static propTypes = {
    pin: pinShape.pinShape,
    boardId: Proptypes.string,
    deleteSinglePin: Proptypes.func,
  }

  deletePinEvent = (e) => {
    e.preventDefault();
    const { deleteSinglePin, pin } = this.props;
    deleteSinglePin(pin.id);
  }

  render() {
    const { pin, boardId } = this.props;
    return (
      <div className="Pin col-3">
        <div className="card">
          <img src={pin.imageUrl} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{pin.title}</h5>
            <button className="btn btn-danger" onClick={this.deletePinEvent}>X</button>
            <Link className="btn btn-warning" to={`/board/${boardId}/pin/${pin.id}/edit`}>EDIT</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Pin;
