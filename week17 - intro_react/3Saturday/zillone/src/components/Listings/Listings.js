import React from 'react';
import './Listings.scss';

import ListingItem from '../ListingItem/ListingItem';

class Listings extends React.Component {
  render() {
    const { listings } = this.props;
    const listingsItemComponents = listings.map((listing, index) => (
      <ListingItem listing={listing} index={index} key={listing.id} />
    ));
    return (
      <div className="col listings">
        <h2>Listings</h2>
        <ul>{listingsItemComponents}</ul>
      </div>
    );
  }
}

export default Listings;
