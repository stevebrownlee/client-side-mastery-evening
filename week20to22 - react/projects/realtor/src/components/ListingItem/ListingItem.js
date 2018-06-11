import React from 'react';
import PropTypes from 'prop-types';

import { LISTINGS_PROPS } from '../../propz/listingsProps';
import { formatPrice } from '../../helpers';

import './ListingItem.css';

export default class ListingItem extends React.Component {
  static propTypes = {
    listing: LISTINGS_PROPS,
    index: PropTypes.number,
  }

  render () {
    const {listing, index} = this.props;
    return (
      <div className='ListingItem'>
        <span className="col-xs-2"><strong>Listing {index + 1}:</strong></span>
        <span className="col-xs-4">{listing.address} <br/> {listing.city}, {listing.state} {listing.zip}</span>
        <span className="col-xs-3">Bedrooms: {listing.numBeds} <br/> Bathrooms: {listing.numBaths}</span>
        <span className="col-xs-3">List Price: {formatPrice(listing.price)}</span>
      </div>
    );
  }
}
