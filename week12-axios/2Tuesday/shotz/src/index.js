import 'jquery';
import 'bootstrap';

import './index.scss';

// const locationFile = require('./db/locations.json');
// console.log('locationFile', locationFile);

import movieView from './javascripts/components/movies';
import locationView from './javascripts/components/locations';


const initializeApp = () => {
  movieView.initializeMoviesView();
  locationView.initializeLocationsView();
};

initializeApp();
