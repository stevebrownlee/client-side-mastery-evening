import 'jquery';
import 'bootstrap';

import './index.scss';

// const locationFile = require('./db/locations.json');
// console.log('locationFile', locationFile);

import events from './javascripts/helpers/events';
import movieView from './javascripts/components/movies';
import locationView from './javascripts/components/locations';


const initializeApp = () => {
  events();
  movieView.initializeMoviesView();
  locationView.initializeLocationsView();
};

initializeApp();
