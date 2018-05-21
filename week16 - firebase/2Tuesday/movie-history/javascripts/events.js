const tmdb = require('./tmdb');
const firebaseApi = require('./firebaseApi');
const dom = require('./dom');

const searchBar = $('#searchBar');

const pressEnter = () => {
  $(document).keypress((e) => {
    if (e.key === 'Enter') {
      const searchNoSpaces = searchBar.val().replace(' ', '%20');
      tmdb.searchMovies(searchNoSpaces);
    }
  });
};

const navigation = () => {
  $(document).click((e) => {
    // Search TMDB Page
    if ($(e.target).parents('#navSearch').length) {
      $('#searchPage').removeClass('hide');
      $('#myMoviesPage').addClass('hide');
      // Wishlist Page
    } else if ($(e.target).parents('#navMyMovies').length) {
      $('#myMoviesPage').removeClass('hide');
      $('#searchPage').addClass('hide');
      getMahMovies();
    }
  });
};

const getMahMovies = () => {
  firebaseApi.getMovieList().then((result) => {
    dom.clearDom('myMovies');
    dom.domString(result, tmdb.getImageConfig(), 'myMovies', true);
  }).catch((err) => {
    console.log('error in getMovieList', err);
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
      console.log(`Movie did not save to wishlist`, err);
    });
  });
};

const bindEvents = () => {
  pressEnter();
  wishlistEvents();
  navigation();
};

module.exports = {
  bindEvents,
};
