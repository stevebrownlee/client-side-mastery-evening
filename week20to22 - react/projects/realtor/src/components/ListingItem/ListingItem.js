import React from 'react';
import PropTypes from 'prop-types';

import { LISTINGS_PROPS } from '../../propz/listingsProps';
import { formatPrice } from '../../helpers';

import './ListingItem.css';

class ListingItem extends React.Component {
  static propTypes = {
    listing: LISTINGS_PROPS,
    index: PropTypes.number,
    onSelect: PropTypes.func,
  }

  listingClick = (e) => {
    const {listing, onSelect} = this.props;
    // preventDefault = prevents the browsers default action. ie url doesn't change
    // stopPropagation = stops the event from bubbling up the chain.  nothing at the call site fires.
    e.stopPropagation();
    // this is crystal ballin' so if the function is not passed the page still renders
    if (onSelect) {
      onSelect(listing.id);
    }
  }

  render () {
    const {listing, index} = this.props;
    return (
      <div className='ListingItem text-center' onClick={this.listingClick}>
        <span className="col-xs-2"><strong>Listing {index + 1}:</strong></span>
        <span className="col-xs-4">{listing.address} <br/> {listing.city}, {listing.state} {listing.zip}</span>
        <span className="col-xs-3">{listing.numBeds} Bed/{listing.numBaths} Bath <br/> Built in {listing.yearBuilt}</span>
        <span className="col-xs-3">{formatPrice(listing.price)} <br/> {listing.squareFootage} ft<sup>2</sup></span>
      </div>
    );
  }
}

export default ListingItem;
