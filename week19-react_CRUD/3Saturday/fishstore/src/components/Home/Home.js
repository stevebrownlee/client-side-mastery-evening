import React from 'react';

import NewOrder from '../NewOrder/NewOrder';
import Orders from '../Orders/Orders';
import Inventory from '../Inventory/Inventory';

import './Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="row">
          <div className="col">
            <Inventory />
          </div>
          <div className="col">
            <div className="menu">
              <header className="top">
                <h1>
                  Catch
                  <span className="ofThe">
                    <span className="of">Of</span>
                    <span className="the">The</span>
                  </span>
                  Day
                </h1>
                <h3 className="tagline">
                  <span>Fresh Seafood Market</span>
                </h3>
              </header>
            </div>
            <NewOrder />
          </div>
          <div className="col">
            <Orders />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
