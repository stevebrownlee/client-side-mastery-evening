const tmdb = require('./tmdb');
const firebaseApi = require('./firebaseApi');

const searchBar = $('#searchBar');

const pressEnter = () => {
  $(document).keypress((e) => {
    if (e.key === 'Enter') {
      const searchNoSpaces = searchBar.val().replace(' ', '%20');
      tmdb.searchMovies(searchNoSpaces);
    }
  });
};

const wishlistEvents = () => {
  $('body').on('click', '.wishlist', (e) => {
    const movieToAdd = e.target.closest('.movie');
    const newMovie = {
      'title': $(movieToAdd).find('.title').html(),
      'overview': $(movieToAdd).find('.overview').html(),
      'poster_path': $(movieToAdd).find('.poster_path').attr('src').split('/').pop(),
      'rating': 0,
      'isWatched': false,
    };

    firebaseApi.saveMovie(newMovie).then(() => {
      $(movieToAdd).remove();
    }).catch((err) => {
      console.log("watchlist didn't save", err);
    });
  });
};

const bindEvents = () => {
  pressEnter();
  wishlistEvents();
};

module.exports = {
  bindEvents,
};
