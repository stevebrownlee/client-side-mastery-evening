import React from 'react';

import './ListingItem.scss';

class ListingItem extends React.Component {
  render() {
    const { listing } = this.props;
    return (
      <li className='listing-item text-center'>
        <span className="col">{listing.address}</span>
        <span className="col">{listing.price}</span>
      </li>
    );
  }
}

export default ListingItem;
