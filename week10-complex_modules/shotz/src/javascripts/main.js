import events from './helpers/events';
import movies from './components/movies/movies';
import locationView from './components/locations/locations';

import '../styles/main.scss';

const init = () => {
  events();
  movies.initializeMoviesView();
  locationView.initializeLocationsView();
};

init();
