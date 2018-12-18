import React from 'react';
import PropTypes from 'prop-types';

import authRequests from '../../helpers/data/auth';
import listingProps from '../../helpers/propz/listingProp';
import formatPrice from '../../helpers/formatPrice';
import './ListingItem.scss';

class ListingItem extends React.Component {
  static propTypes = {
    listing: listingProps.listingShape,
    deleteSingleListing: PropTypes.func,
    onSelect: PropTypes.func,
    passListingToEdit: PropTypes.func,
  }

  deleteListing = (e) => {
    e.preventDefault();
    const { deleteSingleListing } = this.props;
    deleteSingleListing(this.props.listing.id);
  }

  editListing = (e) => {
    e.preventDefault();
    const { passListingToEdit, listing } = this.props;
    passListingToEdit(listing.id);
  }

  listingClick = (e) => {
    e.stopPropagation();
    const { listing, onSelect } = this.props;
    onSelect(listing.id);
  }

  render() {
    const { listing } = this.props;
    const uid = authRequests.getCurrentUid();
    const makeButtons = () => {
      if (listing.uid === uid) {
        return (
          <div>
            <span className="col"><button className="btn btn-default" onClick={this.editListing}><i className="fas fa-pencil-alt"></i></button></span>
            <span className="col"><button className="btn btn-default" onClick={this.deleteListing}><i className="fas fa-trash-alt"></i></button></span>
          </div>
        );
      }
      return <span className="col-2"></span>;
    };

    return (
      <li className='listing-item text-center' onClick={this.listingClick}>
        <span className="col-7">{listing.address}</span>
        <span className="col-3">{formatPrice(listing.price)}</span>
        {makeButtons()}
      </li>
    );
  }
}

export default ListingItem;
