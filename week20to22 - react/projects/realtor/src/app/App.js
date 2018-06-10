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
        <div className="row">
          <div className="col-xs-6">
            <Listings />
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
