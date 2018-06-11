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
  };

  componentDidMount () {
    axios.get(`https://realtor-test.firebaseio.com/listings.json`).then(res => {
      const listings = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((fbKey) => {
          res.data[fbKey].id = fbKey;
          listings.push(res.data[fbKey]);
        });
      }
      this.setState({ listings });
    });
  }
  render () {
    return (
      <div className="App">
        <div className="row">
          <div className="col-xs-6">
            <Listings
              listings={this.state.listings}
            />
          </div>
          <div className="col-xs-6">
            <Building />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <ListingForm />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
