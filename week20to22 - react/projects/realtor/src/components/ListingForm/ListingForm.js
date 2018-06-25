import React from 'react';
import PropTypes from 'prop-types';

import './ListingForm.css';

const defaultListing = {
  address: '',
  city: '',
  state: '',
  zip: 0,
  squareFootage: 0,
  price: 0,
  numBeds: 0,
  numBaths: 0,
  description: '',
  estimatedMonthlyMorgage: 0,
  lotInAcres: 0,
  yearBuilt: 0,
  heating: '',
  cooling: '',
  imageUrl: '',
};

class ListingForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = { newListing: defaultListing };

  formFieldState = (name, e) => {
    const newListing = { ...this.state.newListing };
    newListing[name] = e.target.value;
    this.setState({ newListing });
  };

  formFieldNumberState = (name, e) => {
    const newListing = { ...this.state.newListing };
    newListing[name] = e.target.value * 1;
    this.setState({ newListing });
  };

  addressChange = e => {
    this.formFieldState('address', e);
  };

  cityChange = e => {
    this.formFieldState('city', e);
  };

  stateChange = e => {
    this.formFieldState('state', e);
  };

  zipChange = e => {
    this.formFieldNumberState('zip', e);
  };

  squareFootageChange = e => {
    this.formFieldNumberState('squareFootage', e);
  };

  priceChange = e => {
    this.formFieldNumberState('price', e);
  };

  numBedsChange = e => {
    this.formFieldNumberState('numBeds', e);
  };

  numBathsChange = e => {
    this.formFieldNumberState('numBaths', e);
  };

  descriptionChange = e => {
    this.formFieldState('description', e);
  };

  estimatedMonthlyMorgageChange = e => {
    this.formFieldNumberState('estimatedMonthlyMorgage', e);
  };

  lotInAcresChange = e => {
    this.formFieldNumberState('lotInAcres', e);
  };

  yearBuiltChange = e => {
    this.formFieldNumberState('yearBuilt', e);
  };

  heatingChange = e => {
    this.formFieldState('heating', e);
  };

  coolingChange = e => {
    this.formFieldState('cooling', e);
  };

  imageUrlChange = e => {
    this.formFieldState('imageUrl', e);
  };

  formSubmit = e => {
    const { onSubmit } = this.props;
    const { newListing } = this.state;
    e.preventDefault();
    if (
      newListing.address &&
      newListing.city &&
      newListing.state &&
      newListing.zip &&
      newListing.squareFootage &&
      newListing.price &&
      newListing.numBeds &&
      newListing.numBaths &&
      newListing.description &&
      newListing.estimatedMonthlyMorgage &&
      newListing.lotInAcres &&
      newListing.yearBuilt &&
      newListing.heating &&
      newListing.cooling &&
      newListing.imageUrl
    ) {
      onSubmit(this.state.newListing);
      this.setState({ newListing: defaultListing });
    } else {
      // dear god why?????
      alert('Please add to every form field');
    }
  };
  render () {
    const { newListing } = this.state;
    return (
      <div className="col-xs-8 col-xs-offset-2">
        <h2 className="text-center">Submit new property:</h2>
        <form onSubmit={this.formSubmit}>
          <div className="row">
            <fieldset className="col-xs-3">
              <label htmlFor="address">Address:</label>
              <br />
              <input
                className="col-xs-12"
                type="text"
                id="address"
                placeholder="12345 Main Street"
                value={newListing.address}
                onChange={this.addressChange}
              />
            </fieldset>
            <fieldset className="col-xs-3">
              <label htmlFor="city">City:</label>
              <br />
              <input
                className="col-xs-12"
                type="text"
                id="city"
                placeholder="Nashville"
                value={newListing.city}
                onChange={this.cityChange}
              />
            </fieldset>
            <fieldset className="col-xs-3">
              <label htmlFor="state">State:</label>
              <br />
              <input
                className="col-xs-12"
                type="text"
                id="state"
                placeholder="TN"
                value={newListing.state}
                onChange={this.stateChange}
              />
            </fieldset>
            <fieldset className="col-xs-3">
              <label htmlFor="zip">Zip Code:</label>
              <br />
              <input
                className="col-xs-12"
                type="number"
                id="zip"
                placeholder="37209"
                value={newListing.zip}
                onChange={this.zipChange}
              />
            </fieldset>
          </div>
          <div className="row">
            <fieldset className="col-xs-3">
              <label htmlFor="squareFootage">Square Footage:</label>
              <br />
              <input
                className="col-xs-12"
                type="number"
                id="squareFootage"
                placeholder="123"
                value={newListing.squareFootage}
                onChange={this.squareFootageChange}
              />
            </fieldset>
            <fieldset className="col-xs-3">
              <label htmlFor="numBeds">Number of bedrooms:</label>
              <br />
              <input
                className="col-xs-12"
                type="number"
                id="numBeds"
                placeholder="2"
                value={newListing.numBeds}
                onChange={this.numBedsChange}
              />
            </fieldset>

            <fieldset className="col-xs-3">
              <label htmlFor="numBaths">Number of bathrooms:</label>
              <br />
              <input
                className="col-xs-12"
                type="number"
                id="numBaths"
                placeholder="1"
                value={newListing.numBaths}
                onChange={this.numBathsChange}
              />
            </fieldset>
          </div>
          <div className="row">
            <fieldset className="col-xs-3">
              <label htmlFor="price">Price:</label>
              <br />
              <input
                className="col-xs-12"
                type="number"
                id="price"
                placeholder="12345"
                value={newListing.price}
                onChange={this.priceChange}
              />
            </fieldset>
            <fieldset className="col-xs-3">
              <label htmlFor="estimatedMonthlyMorgage">
                Estimated Monthly Morgage:
              </label>
              <br />
              <input
                className="col-xs-12"
                type="number"
                id="estimatedMonthlyMorgage"
                placeholder="123"
                value={newListing.estimatedMonthlyMorgage}
                onChange={this.estimatedMonthlyMorgageChange}
              />
            </fieldset>
          </div>
          <div className="row">
            <fieldset className="col-xs-3">
              <label htmlFor="lotInAcres">Lot Size (in acres):</label>
              <br />
              <input
                className="col-xs-12"
                type="number"
                id="lotInAcres"
                placeholder="0.5"
                value={newListing.lotInAcres}
                onChange={this.lotInAcresChange}
              />
            </fieldset>

            <fieldset className="col-xs-3">
              <label htmlFor="yearBuilt">Year Built:</label>
              <br />
              <input
                className="col-xs-12"
                type="number"
                id="yearBuilt"
                placeholder="1924"
                value={newListing.yearBuilt}
                onChange={this.yearBuiltChange}
              />
            </fieldset>

            <fieldset className="col-xs-3">
              <label htmlFor="heating">Heating:</label>
              <br />
              <input
                className="col-xs-12"
                type="text"
                id="heating"
                placeholder="Fireplace"
                value={newListing.heating}
                onChange={this.heatingChange}
              />
            </fieldset>

            <fieldset className="col-xs-3">
              <label htmlFor="cooling">Cooling:</label>
              <br />
              <input
                className="col-xs-12"
                type="text"
                id="cooling"
                placeholder="Central Air"
                value={newListing.cooling}
                onChange={this.coolingChange}
              />
            </fieldset>
          </div>
          <div className="row">
            <fieldset className="col-xs-6">
              <label htmlFor="description">Description:</label>
              <br />
              <input
                className="col-xs-12"
                type="text"
                id="description"
                placeholder="Lovely one bedroom house"
                value={newListing.description}
                onChange={this.descriptionChange}
              />
            </fieldset>

            <fieldset className="col-xs-6">
              <label htmlFor="imageUrl">Image Url:</label>
              <br />
              <input
                className="col-xs-12"
                type="text"
                id="imageUrl"
                placeholder="http://www.google.com"
                value={newListing.imageUrl}
                onChange={this.imageUrlChange}
              />
            </fieldset>
          </div>
          {/* can this be a button tag? */}
          <button className="col-xs-6 btn btn-danger col-xs-offset-3">
            Save house
          </button>
        </form>
      </div>
    );
  }
}

export default ListingForm;
