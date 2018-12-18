import React from 'react';
import authRequests from '../../helpers/data/auth';
import './ListingForm.scss';

const defaultListing = {
  address: '',
  squareFootage: 0,
  price: 0,
  numBeds: 0,
  numBaths: 0,
  heating: '',
  cooling: '',
  imageUrl: '',
  uid: '',
};
class ListingForm extends React.Component {
  state = {
    newListing: defaultListing,
  };

  formFieldStringState = (name, e) => {
    const tempListing = { ...this.state.newListing };
    tempListing[name] = e.target.value;
    this.setState({ newListing: tempListing });
  }

  formFieldNumberState = (name, e) => {
    const tempListing = { ...this.state.newListing };
    tempListing[name] = e.target.value * 1;
    this.setState({ newListing: tempListing });
  }

  addressChange = (e) => {
    this.formFieldStringState('address', e);
  }

  cityChange = (e) => {
    this.formFieldStringState('city', e);
  }

  squareFootageChange = e => this.formFieldNumberState('squareFootage', e);

  priceChange = e => this.formFieldNumberState('price', e);

  numBedsChange = e => this.formFieldNumberState('numBeds', e);

  numBathsChange = e => this.formFieldNumberState('numBaths', e);

  heatingChange = e => this.formFieldStringState('heating', e);

  coolingChange = e => this.formFieldStringState('cooling', e);

  imageUrlChange = e => this.formFieldStringState('imageUrl', e);

  formSubmit = (e) => {
    const { onSubmit } = this.props;
    const { newListing } = this.state;
    e.preventDefault();
    if (
      newListing.address
      && newListing.squareFootage
      && newListing.price
      && newListing.numBeds
      && newListing.numBaths
      && newListing.heating
      && newListing.cooling
      && newListing.imageUrl
    ) {
      newListing.uid = authRequests.getCurrentUid();
      onSubmit(newListing);
      this.setState({ newListing: defaultListing });
    } else {
      console.error('dear god why?????');
    }
  }

  render() {
    const { newListing } = this.state;
    return (
      <div className="col">
        <h2>Submit New Listing:</h2>
        <form onSubmit={this.formSubmit} className="col-8 offset-2">
          <div className="row">
            <div className="col form-group">
              <label htmlFor="address" className="col-form-label">Address:</label>
              <br />
              <input
                className="col form-control"
                type="text"
                id="address"
                placeholder="12345 Main Street Nashville, TN 37209"
                value={newListing.address}
                onChange={this.addressChange}
              />
            </div>
            <div className="col form-group">
              <label htmlFor="imageUrl" className="col-form-label">Image Url:</label>
              <br />
              <input
                className="col form-control"
                type="text"
                id="imageUrl"
                placeholder="http://www.google.com"
                value={newListing.imageUrl}
                onChange={this.imageUrlChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col form-group">
              <label htmlFor="squareFootage" className="col-form-label">Square Footage:</label>
              <br />
              <input
                className="col form-control"
                type="number"
                id="squareFootage"
                placeholder="123"
                value={newListing.squareFootage}
                onChange={this.squareFootageChange}
              />
            </div>
            <div className="col form-group">
              <label htmlFor="numBeds" className="col-form-label">Number of bedrooms:</label>
              <br />
              <input
                className="col form-control"
                type="number"
                id="numBeds"
                placeholder="2"
                value={newListing.numBeds}
                onChange={this.numBedsChange}
              />
            </div>
            <div className="col form-group">
              <label htmlFor="numBaths" className="col-form-label">Number of bathrooms:</label>
              <br />
              <input
                className="col form-control"
                type="number"
                id="numBaths"
                placeholder="1"
                value={newListing.numBaths}
                onChange={this.numBathsChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col form-group">
              <label htmlFor="price" className="col-form-label">Price:</label>
              <br />
              <input
                className="col form-control"
                type="number"
                id="price"
                placeholder="12345"
                value={newListing.price}
                onChange={this.priceChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="col form-group">
              <label htmlFor="heating" className="col-form-label">Heating:</label>
              <br />
              <input
                className="col form-control"
                type="text"
                id="heating"
                placeholder="Fireplace"
                value={newListing.heating}
                onChange={this.heatingChange}
              />
            </div>

            <div className="col form-group">
              <label htmlFor="cooling" className="col-form-label">Cooling:</label>
              <br />
              <input
                className="col form-control"
                type="text"
                id="cooling"
                placeholder="Central Air"
                value={newListing.cooling}
                onChange={this.coolingChange}
              />
            </div>
          </div>
          <button className="col-xs-6 btn btn-danger col-xs-offset-3">Save house</button>
        </form>
      </div>
    );
  }
}

export default ListingForm;
