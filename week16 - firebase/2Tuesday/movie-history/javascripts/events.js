/* eslint camelcase: 0 */

const tmdb = require('./tmdb');
const firebaseApi = require('./firebaseApi');

const myLinks = () => {
  $(document).click((e) => {
    if (e.target.id === 'authenticate') {
      $('#myMovies').addClass('hide');
      $('#search').addClass('hide');
      $('#authScreen').removeClass('hide');
    } else if (e.target.id === 'mine') {
      $('#myMovies').removeClass('hide');
      $('#search').addClass('hide');
      $('#authScreen').addClass('hide');
    } else if (e.target.id === 'navSearch') {
      $('#myMovies').addClass('hide');
      $('#search').removeClass('hide');
      $('#authScreen').addClass('hide');
    }
  });
};

const pressEnter = () => {
  // big old keypress event
  $(document).keypress((e) => {
    if (e.key === 'Enter') {
      const searchWords = $('#searchBar').val().replace(' ', '%20');
      tmdb.showResults(searchWords);
    }
  });
};

const addMovieToWishlistEvent = () => {
  $(document).on('click', '.addToWishlist', (e) => {
    const movieCard = $(e.target).closest('.movie');
    const movieToAdd = {
      title: movieCard.find('.mv-title').text(),
      poster_path: movieCard.find('.mv-poster_path')[0].dataset['poster_path'],
      overview: movieCard.find('.mv-overview').text(),
      rating: 0,
      isWatched: false,
    };
    firebaseApi.addMovieToDB(movieToAdd)
      .then((singleMovieKey) => {
        movieCard.remove();
      })
      .catch((error) => {
        console.error(error);
      });
  });
};

const initializer = () => {
  addMovieToWishlistEvent();
  myLinks();
  pressEnter();
};

module.exports = {
  initializer,
};
