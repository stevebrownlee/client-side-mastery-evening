'use strict';

const tmdb = require('./tmdb');

const searchBar = $('#searchBar');

const pressEnter = () => {
  $(document).keypress((e) => {
    if (e.key === 'Enter') {
      const searchNoSpaces = searchBar.val().replace(' ', '%20');
      tmdb.searchMovies(searchNoSpaces);
    }
  });
};

module.exports = {
  pressEnter,
};
