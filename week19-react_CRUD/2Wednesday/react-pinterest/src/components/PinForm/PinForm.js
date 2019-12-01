import React from 'react';
import PropTypes from 'prop-types';

import authData from '../../helpers/data/authData';

import './PinForm.scss';

class PinForm extends React.Component {
  static propTypes = {
    saveNewPin: PropTypes.func,
  }

  state = {
    pinTitle: '',
    pinImageUrl: '',
  }

  savePin = (e) => {
    e.preventDefault();
    const newPin = {
      title: this.state.pinTitle,
      imageUrl: this.state.pinImageUrl,
      uid: authData.getUid(),
    };
    this.props.saveNewPin(newPin);
  }

  titleChange = (e) => {
    e.preventDefault();
    this.setState({ pinTitle: e.target.value });
  };

  imageUrlChange = (e) => {
    e.preventDefault();
    this.setState({ pinImageUrl: e.target.value });
  };

  render() {
    const { pinImageUrl, pinTitle } = this.state;

    return (
      <div>
        <form className='col-6 offset-3 PinForm'>
          <div className="form-group">
            <label htmlFor="pin-title">Pin Title:</label>
            <input
              type="text"
              className="form-control"
              id="pin-title"
              placeholder="Cat Pic"
              value={pinTitle}
              onChange={this.titleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pin-image-url">Pin Image Url:</label>
            <input
              type="text"
              className="form-control"
              id="pin-image-url"
              placeholder="https://www.google.com"
              value={pinImageUrl}
              onChange={this.imageUrlChange}
            />
          </div>
          <button className="btn btn-secondary" onClick={this.savePin}>Add Pin</button>
        </form>
      </div>
    );
  }
}

export default PinForm;
