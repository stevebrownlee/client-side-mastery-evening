import React from 'react';

import BuildingTile from '../BuildingTile/BuildingTile';
import { LISTINGS_PROPS_OPTIONAL } from '../../propz/listingsProps';
import { formatPrice } from '../../helpers';

// import css
import './Building.css';

class Building extends React.Component {
  static propTypes = {listing: LISTINGS_PROPS_OPTIONAL}

  render () {
    const {listing} = this.props;

    if (!Object.keys(listing).length) {
      return (
        <div className="Building text-center">
          <div className="row">
            <h1 className="unknown-listing"><span className="glyphicon glyphicon-arrow-left" aria-hidden="true"></span> Select a listing</h1>
          </div>
        </div>
      );
    }

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
          <BuildingTile
            imageSrc='cal'
            atlText='calendar'
            pTagText={`Built: ${listing.yearBuilt}`}
          />
          <BuildingTile
            imageSrc='hill'
            atlText='hill'
            pTagText={`${listing.lotInAcres} acres`}
          />
          <BuildingTile
            imageSrc='flame'
            atlText='fire'
            pTagText={listing.heating}
          />
          <BuildingTile
            imageSrc='snow'
            atlText='snowflake'
            pTagText={listing.cooling}
          />
        </div>
      </div>
    );
  }
}

export default Building;
