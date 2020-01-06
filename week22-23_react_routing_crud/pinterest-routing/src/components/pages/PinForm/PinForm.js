import React from 'react';
import './PinForm.scss';

import authData from '../../../helpers/data/authData';
import pinData from '../../../helpers/data/pinData';

class PinForm extends React.Component {
  state = {
    pinTitle: '',
    pinImageUrl: '',
    isEditing: false,
  }

  componentDidMount() {
    if (this.props.path.split('/')[5] === 'edit') {
      const { pinId } = this.props.match.params;
      pinData.getSinglePin(pinId)
        .then((request) => {
          const pin = request.data;
          this.setState({ pinTitle: pin.title, pinImageUrl: pin.imageUrl, isEditing: true });
        })
        .catch((errorFromGetSingleBoard) => console.error({ errorFromGetSingleBoard }));
    }
  }

  savePinEvent = (e) => {
    const { boardId } = this.props.match.params;
    e.preventDefault();
    const newPin = {
      title: this.state.pinTitle,
      imageUrl: this.state.pinImageUrl,
      uid: authData.getUid(),
      boardId,
    };
    pinData.savePin(newPin)
      .then(() => {
        this.setState({ pinTitle: '', pinImageUrl: '', isEditing: false });
        this.props.history.push(`/board/${boardId}`);
      })
      .catch((errorFromSavePin) => console.error({ errorFromSavePin }));
  }

  editPinEvent = (e) => {
    const { boardId, pinId } = this.props.match.params;
    e.preventDefault();
    const newPin = {
      title: this.state.pinTitle,
      imageUrl: this.state.pinImageUrl,
      uid: authData.getUid(),
      boardId,
    };
    pinData.updatePin(pinId, newPin)
      .then(() => {
        this.setState({ pinTitle: '', pinImageUrl: '', isEditing: false });
        this.props.history.push(`/board/${boardId}`);
      })
      .catch((errorFromUpdatePin) => console.error({ errorFromUpdatePin }));
  }

  titleChange = (e) => {
    e.preventDefault();
    this.setState({ pinTitle: e.target.value });
  }

  imageUrlChange = (e) => {
    e.preventDefault();
    this.setState({ pinImageUrl: e.target.value });
  }

  render() {
    const { pinTitle, pinImageUrl, isEditing } = this.state;
    return (
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
          { isEditing
            ? (<button className="btn btn-secondary" onClick={this.editPinEvent}>Edit Pin</button>)
            : (<button className="btn btn-secondary" onClick={this.savePinEvent}>Add Pin</button>)
          }
        </form>
    );
  }
}

export default PinForm;
