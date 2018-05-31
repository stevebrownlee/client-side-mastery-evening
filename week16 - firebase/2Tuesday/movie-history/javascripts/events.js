/* eslint camelcase: 0 */

const tmdb = require('./tmdb');
const firebaseApi = require('./firebaseApi');
const dom = require('./dom');

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
      getMyMovieCollection();
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

const addMovieToWatchedListEvent = () => {
  $(document).on('click', '.addToWatchedList', (e) => {
    const movieCard = $(e.target).closest('.movie');
    const movieToAdd = {
      title: movieCard.find('.mv-title').text(),
      poster_path: movieCard.find('.mv-poster_path').data('poster_path'),
      overview: movieCard.find('.mv-overview').text(),
      rating: 0,
      isWatched: true,
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

const updateMovieToWatchInCollectionEvent = () => {
  $(document).on('click', '.updateToWatched', (e) => {
    const movieToUpdate = $(e.target).closest('.movie');
    const movieToUpdateId = movieToUpdate.data('firebaseId');
    firebaseApi.updateWatchedForMovieInDb(movieToUpdateId)
      .then((updatedMovie) => {
        getMyMovieCollection();
      })
      .catch((error) => {
        console.error(error);
      });
  });
};

const getMyMovieCollection = () => {
  firebaseApi.getMoviesFromDB()
    .then((allMovies) => {
      dom.domString(allMovies, tmdb.getImageConfig(), 'myMoviesCollection', true);
      initializeStars();
    })
    .catch((error) => {
      console.error('error from get movies event', error);
    });
};

const getOnlyWatched = () => {
  firebaseApi.getWatchedFromDB()
    .then((allMovies) => {
      dom.domString(allMovies, tmdb.getImageConfig(), 'myMoviesCollection', true);
      initializeStars();
    })
    .catch((error) => {
      console.error('error from get movies event', error);
    });
};

const getOnlyWishlist = () => {
  firebaseApi.getWishlistfromDB()
    .then((allMovies) => {
      dom.domString(allMovies, tmdb.getImageConfig(), 'myMoviesCollection', true);
      initializeStars();
    })
    .catch((error) => {
      console.error('error from get movies event', error);
    });
};

const deleteMovieFromWishlistEvent = () => {
  $(document).on('click', '.deleteMovieFromCollection', (e) => {
    const movieToDelete = $(e.target).closest('.movie');
    const movieToDeleteId = movieToDelete.data('firebaseId');
    firebaseApi.deleteMovieFromDB(movieToDeleteId)
      .then(() => {
        getMyMovieCollection();
      })
      .catch((error) => {
        console.error('error in deleting movie', error);
      });
  });
};

const initializeStars = () => {
  $('.movie').each((index, movie) => {
    const movieId = $(movie).data('firebase-id');
    $('#stars_' + movieId).rating({min: 0, max: 5, step: 1, stars: 5,}).on('rating.change', (e, value) => {
      const movieToUpdate = $(movie);
      const modifiedMovie = {
        title: $(movieToUpdate).find('.mv-title').text(),
        overview: $(movieToUpdate).find('.mv-overview').text(),
        poster_path: $(movieToUpdate).find('.mv-poster_path').data('poster_path'),
        rating: value,
        isWatched: true,
      };
      firebaseApi.updateMovieWithStarRating(modifiedMovie, movieId)
        .then((results) => {
          getMyMovieCollection();
        })
        .catch((err) => {
          console.log('star rating movie error', err);
        });
    });
  });
};

const watchedAndWishlistToggle = () => {
  $(document).on('click', '.filterButtons', (e) => {
    const clickedButtonId = $(e.target)[0].id;
    console.log(clickedButtonId);
    if (clickedButtonId === 'showWatched') {
      getOnlyWatched();
    } else if (clickedButtonId === 'showWishlist') {
      getOnlyWishlist();
    } else if (clickedButtonId === 'showAll') {
      getMyMovieCollection();
    }
  });
};

const initializer = () => {
  addMovieToWishlistEvent();
  addMovieToWatchedListEvent();
  deleteMovieFromWishlistEvent();
  updateMovieToWatchInCollectionEvent();
  watchedAndWishlistToggle();
  myLinks();
  pressEnter();
};

module.exports = {
  initializer,
};
