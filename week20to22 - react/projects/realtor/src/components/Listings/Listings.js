import React from 'react';
import PropTypes from 'prop-types';

import ListingItem from '../ListingItem/ListingItem';
import { LISTINGS_PROPS } from '../../propz/listingsProps';

import './Listings.css';

export default class Listings extends React.Component {
  static propTypes = {
    listings: PropTypes.arrayOf(LISTINGS_PROPS),
  };
  render () {
    const listings = this.props.listings;
    const listingsItemComponents = listings.map((listing, index) => {
      return (
        <li key={listing.id} className="item">
          <ListingItem listing={listing} index={index}/>
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
