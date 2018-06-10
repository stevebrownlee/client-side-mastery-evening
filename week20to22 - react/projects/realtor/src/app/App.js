import React from 'react';

import Listings from '../components/Listings/Listings';
import ListingForm from '../components/ListingForm/ListingForm';
import Building from '../components/Building/Building';

// css file
import './App.css';

class App extends React.Component {
  render () {
    return (
      <div className="App">
        <div class="row">
          <div class="col-xs-6">
            <Listings />
          </div>
          <div class="col-xs-6">
            <Building />
          </div>
        </div>
        <div class="row">
          <div class="col-xs-12">
            <ListingForm />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
