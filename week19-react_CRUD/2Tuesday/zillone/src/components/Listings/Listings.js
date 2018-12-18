import React from 'react';
import PropTypes from 'prop-types';

import listingProps from '../../helpers/propz/listingProp';
import ListingItem from '../ListingItem/ListingItem';

import './Listings.scss';

class Listings extends React.Component {
  static propTypes = {
    listings: PropTypes.arrayOf(listingProps.listingShape),
    deleteSingleListing: PropTypes.func,
    onListingSelection: PropTypes.func,
    passListingToEdit: PropTypes.func,
  };

  render() {
    const { listings, onListingSelection, passListingToEdit } = this.props;
    const listingsItemComponents = listings.map((listing, index) => (
      <ListingItem
        listing={listing}
        key={listing.id}
        deleteSingleListing={this.props.deleteSingleListing}
        onSelect={onListingSelection}
        passListingToEdit={passListingToEdit}
      />
    ));
    return (
      <div className="listings col">
        <h2>Listings</h2>
        <ul>{listingsItemComponents}</ul>
      </div>
    );
  }
}

export default Listings;
