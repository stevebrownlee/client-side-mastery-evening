import React from 'react';

import { LISTINGS_PROPS } from '../../propz/listingsProps';
import { formatPrice } from '../../helpers';

// import css
import './Building.css';

// import logos
import cal from './images/cal.png';
import flame from './images/flame.png';
import hill from './images/hill.png';
import snow from './images/snow.png';

export default class Building extends React.Component {
  static propTypes = {listing: LISTINGS_PROPS}

  render () {
    const {listing} = this.props;
    return (
      <div className="Building text-center">
        <div className="row">
          <div className="col-xs-6">
            <img className="building-image" src={listing.imageUrl} alt="Building"/>
          </div>
          <div className="col-xs-6">
            <h3>{formatPrice(listing.price)}</h3>
            <p>{formatPrice(listing.estimatedMonthlyMorgage)} /month</p>
            <h4>{listing.address} {listing.city}, {listing.state} {listing.zip}</h4>
            <h5>{listing.numBeds} Bed/{listing.numBaths} Bath</h5>
            <h5>{listing.squareFootage} ft<sup>2</sup></h5>
            <p>{listing.description}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-3">
            <div className="image-detail">
              <img src={cal} alt="calendar" />
              <p>Built: {listing.yearBuilt}</p>
            </div>
          </div>
          <div className="col-xs-3">
            <div className="image-detail">
              <img src={hill} alt="hill" />
              <p>{listing.lotInAcres} acres</p>
            </div>
          </div>
          <div className="col-xs-3">
            <div className="image-detail">
              <img src={flame} alt="fire" />
              <p>{listing.heating}</p>
            </div>
          </div>
          <div className="col-xs-3">
            <div className="image-detail">
              <img src={snow} alt="snowflake" />
              <p>{listing.cooling}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
