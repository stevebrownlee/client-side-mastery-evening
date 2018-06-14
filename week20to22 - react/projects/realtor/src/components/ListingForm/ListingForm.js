import React from 'react';
import PropTypes from 'prop-types';

import './ListingForm.css';

export default class ListingForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    address: '',
    city: '',
    state: '',
    zip: '',
    squareFootage: '',
    price: '',
    numBeds: '',
    numBaths: '',
    description: '',
    estimatedMonthlyMorgage: '',
    lotInAcres: '',
    yearBuilt: '',
    heating: '',
    cooling: '',
    imageUrl: '',
  };

  formFieldState = (name, e) => {
    this.setState({
      [name]: e.target.value,
    });
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
    this.formFieldState('zip', e);
  };

  squareFootageChange = e => {
    this.formFieldState('squareFootage', e);
  };

  priceChange = e => {
    this.formFieldState('price', e);
  };

  numBedsChange = e => {
    this.formFieldState('numBeds', e);
  };

  numBathsChange = e => {
    this.formFieldState('numBaths', e);
  };

  descriptionChange = e => {
    this.formFieldState('description', e);
  };

  estimatedMonthlyMorgageChange = e => {
    this.formFieldState('estimatedMonthlyMorgage', e);
  };

  lotInAcresChange = e => {
    this.formFieldState('lotInAcres', e);
  };

  yearBuiltChange = e => {
    this.formFieldState('yearBuilt', e);
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
    const {
      address,
      city,
      state,
      zip,
      squareFootage,
      price,
      numBeds,
      numBaths,
      description,
      estimatedMonthlyMorgage,
      lotInAcres,
      yearBuilt,
      heating,
      cooling,
      imageUrl,
    } = this.state;
    e.preventDefault();
    if (
      address &&
      city &&
      state &&
      zip &&
      squareFootage &&
      price &&
      numBeds &&
      numBaths &&
      description &&
      estimatedMonthlyMorgage &&
      lotInAcres &&
      yearBuilt &&
      heating &&
      cooling &&
      imageUrl
    ) {
      onSubmit({
        address,
        city,
        state,
        zip,
        squareFootage,
        price,
        numBeds,
        numBaths,
        description,
        estimatedMonthlyMorgage,
        lotInAcres,
        yearBuilt,
        heating,
        cooling,
        imageUrl,
      });
      this.setState({
        address: '',
        city: '',
        state: '',
        zip: '',
        squareFootage: '',
        price: '',
        numBeds: '',
        numBaths: '',
        description: '',
        estimatedMonthlyMorgage: '',
        lotInAcres: '',
        yearBuilt: '',
        heating: '',
        cooling: '',
        imageUrl: '',
      });
    } else {
      alert('Please add to ever form field');
    }
  };
  render () {
    const {
      address,
      city,
      state,
      zip,
      squareFootage,
      price,
      numBeds,
      numBaths,
      description,
      estimatedMonthlyMorgage,
      lotInAcres,
      yearBuilt,
      heating,
      cooling,
      imageUrl,
    } = this.state;
    return (
      <form onSubmit={this.formSubmit}>
        <h2 className="text-center">Submit new property:</h2>
        <div className="col-xs-8 col-xs-offset-2">
          <div className="row">
            <fieldset className="col-xs-3">
              <label htmlFor="address">Address:</label>
              <br />
              <input
                className="col-xs-12"
                type="text"
                id="address"
                placeholder="12345 Main Street"
                value={address}
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
                value={city}
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
                value={state}
                onChange={this.stateChange}
              />
            </fieldset>
            <fieldset className="col-xs-3">
              <label htmlFor="zip">Zip Code:</label>
              <br />
              <input
                className="col-xs-12"
                type="text"
                id="zip"
                placeholder="37209"
                value={zip}
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
                value={squareFootage}
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
                value={numBeds}
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
                value={numBaths}
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
                value={price}
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
                value={estimatedMonthlyMorgage}
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
                value={lotInAcres}
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
                value={yearBuilt}
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
                value={heating}
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
                value={cooling}
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
                value={description}
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
                value={imageUrl}
                onChange={this.imageUrlChange}
              />
            </fieldset>
          </div>
          <input
            className="col-xs-6 btn btn-danger col-xs-offset-3"
            type="submit"
            value="Save house"
          />
        </div>
      </form>
    );
  }
}
