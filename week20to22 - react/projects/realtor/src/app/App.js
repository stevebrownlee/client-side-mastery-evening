import React from 'react';
import axios from 'axios';

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

  listingSelect = selectedListingId => {
    this.setState({
      selectedListingId: selectedListingId,
    });
  };

  formSubmit = newListing => {
    axios
      .post(`https://realtor-test.firebaseio.com/listings.json`, newListing)
      .then(res => {
        console.error(res);
        console.error(res.data);
      });
  };

  componentDidMount () {
    axios.get(`https://realtor-test.firebaseio.com/listings.json`).then(res => {
      const listings = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach(fbKey => {
          res.data[fbKey].id = fbKey;
          listings.push(res.data[fbKey]);
        });
      }
      this.setState({ listings });
    });
  }
  render () {
    const { selectedListingId } = this.state;
    // find returns thing if it finds it.  if it doesn't it returns undefined (so will be undefined for initial state of -1)
    const selectedListing =
      this.state.listings.find(listing => listing.id === selectedListingId) ||
      {};

    return (
      <div className="App">
        <div className="col-xs-6">
          <Listings
            listings={this.state.listings}
            onListingSelect={this.listingSelect}
          />
        </div>
        <div className="col-xs-6">
          <Building listing={selectedListing} />
        </div>
        <div className="col-xs-12">
          <ListingForm onSubmit={this.formSubmit} />
        </div>
      </div>
    );
  }
}

export default App;
