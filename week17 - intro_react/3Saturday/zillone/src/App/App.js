import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

import './App.scss';

import authRequests from '../helpers/data/auth';
import connection from '../helpers/data/connection';
import listingRequests from '../helpers/data/listingRequests';

import Auth from '../components/Auth/Auth';
import Building from '../components/Building/Building';
import Listings from '../components/Listings/Listings';
import ListingForm from '../components/ListingForm/ListingForm';
import MyNavbar from '../components/MyNavbar/MyNavbar';

class App extends Component {
  state = {
    authed: false,
    listings: [],
  };

  componentDidMount() {
    connection();
    listingRequests.getRequest()
      .then((listings) => {
        this.setState({ listings });
      })
      .catch((err) => {
        console.error('error with listing GET', err);
      });
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
        });
      } else {
        this.setState({
          authed: false,
        });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  isAuthenticated = () => {
    this.setState({ authed: true });
  };

  deleteSingleListing = (listingId) => {
    listingRequests.deleteListing(listingId)
      .then(() => {
        listingRequests.getRequest()
          .then((listings) => {
            this.setState({ listings });
          });
      })
      .catch(error => console.error('error in deleting friend', error));
  }

  render() {
    const logoutClickEvent = () => {
      authRequests.logoutUser();
      this.setState({ authed: false });
    };

    if (!this.state.authed) {
      return (
        <div className="App">
          <div className="row">
            <MyNavbar
              isAuthenticated={this.state.authed}
              logoutClickEvent={logoutClickEvent}
            />
          </div>
          <div className="row">
            <Auth isAuthenticated={this.isAuthenticated} />
          </div>
        </div>
      );
    }
    return (
      <div className="App">
          <div className="row">
            <MyNavbar
              isAuthenticated={this.state.authed}
              logoutClickEvent={logoutClickEvent}
            />
          </div>
          <div className="row row-eq-height">
            <Listings
              listings={this.state.listings}
              deleteSingleListing={this.deleteSingleListing}
            />
            <Building />
          </div>
          <div className="row">
            <ListingForm />
          </div>
      </div>
    );
  }
}

export default App;
