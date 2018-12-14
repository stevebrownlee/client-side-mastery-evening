import React from 'react';
import PropTypes from 'prop-types';

import listingProps from '../../helpers/propz/listingProp';
import formatPrice from '../../helpers/formatPrice';
import './ListingItem.scss';


class ListingItem extends React.Component {
  static propTypes = {
    listing: listingProps.listingShape,
    index: PropTypes.number,
    onSelect: PropTypes.func,
  }

  render() {
    const { listing } = this.props;
    return (
      <li className='listing-item text-center'>
        <span className="col-8">{listing.address}</span>
        <span className="col">{formatPrice(listing.price)}</span>
        <span className="col"><button className="btn btn-default">X</button></span>
      </li>
    );
  }
}

export default ListingItem;
