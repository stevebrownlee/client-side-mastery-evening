import React from 'react';
import PropTypes from 'prop-types';

import ListingItem from '../ListingItem/ListingItem';
import { LISTINGS_PROPS } from '../../propz/listingsProps';

import './Listings.css';

class Listings extends React.Component {
  // explain what static means and when/why it is used
  static propTypes = {
    listings: PropTypes.arrayOf(LISTINGS_PROPS),
    onListingSelection: PropTypes.func,
  };

  render () {
    const {listings, onListingSelection} = this.props;
    const listingsItemComponents = listings.map((listing, index) => {
      return (
        <li key={listing.id} className="item">
          <ListingItem
            listing={listing}
            index={index}
            onSelect={onListingSelection}
          />
        </li>
      );
    });
    return (
      <div className="Listings">
        <h2 className="text-center">Open Listings</h2>
        <ul>{listingsItemComponents}</ul>
      </div>
    );
  }
}

export default Listings;
