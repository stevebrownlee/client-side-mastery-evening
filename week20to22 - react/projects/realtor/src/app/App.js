import React from 'react';

import listingRequests from '../firebaseRequests/listings';

import fbConection from '../firebaseRequests/connection';
import Listings from '../components/Listings/Listings';
import ListingForm from '../components/ListingForm/ListingForm';
import Building from '../components/Building/Building';

// css file
import './App.css';

class App extends React.Component {
  state = {
    listings: [],
    selectedListingId: -1,
  };

  // any event funcitions end in event any non event functions end in function
  // change this to listingSelectEvent
  listingSelectEvent = selectedListingId => {
    this.setState({
      selectedListingId: selectedListingId,
    });
  };

  formSubmitEvent = newListing => {
    listingRequests.postRequest(newListing).then((response) => {
      listingRequests.getRequest().then((listings) => {
        this.setState({listings});
      });
    }).catch((err) => {
      console.error('error with get request', err);
    });
  };

  componentDidMount () {
    fbConection();
    listingRequests.getRequest().then((listings) => {
      this.setState({ listings });
    }).catch((err) => {
      console.error('error with get request', err);
    });
  }
  render () {
    const { selectedListingId } = this.state;
    // find returns thing if it finds it.  if it doesn't it returns undefined (so will be undefined for initial state of -1)
    const selectedListing =
      this.state.listings.find(listing => listing.id === selectedListingId) || {};

    return (
      <div className="App">
        <div className="col-xs-6">
          <Listings
            listings={this.state.listings}
            onListingSelection={this.listingSelectEvent}
          />
        </div>
        <div className="col-xs-6">
          <Building listing={selectedListing} />
        </div>
        <div className="col-xs-12">
          <ListingForm onSubmit={this.formSubmitEvent} />
        </div>
      </div>
    );
  }
}

export default App;
