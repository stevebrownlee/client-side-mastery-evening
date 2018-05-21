'use strict';

const dom = require('./dom');

let tmdbKey = '';
let imgConfig = {};

const searchTMDB = (txt) => {
  return new Promise((resolve, reject) => {
    $.ajax(`https://api.themoviedb.org/3/search/movie?api_key=${tmdbKey}&language=en-US&query=${txt}&page=1&include_adult=false`).done((data) => {
      resolve(data.results);
    }).fail((error) => {
      reject(error);
    });
  });
};

const tmdbConfiguration = () => {
  return new Promise((resolve, reject) => {
    $.ajax(`https://api.themoviedb.org/3/configuration?api_key=${tmdbKey}`).done((data) => {
      resolve(data);
    }).fail((error) => {
      reject(error);
    });
  });
};

const searchMovies = (searchText) => {
  searchTMDB(searchText).then((result) => {
    showResults(result);
  }).catch((err) => {
    console.log('err', err);
  });

};

const getConfig = () => {
  tmdbConfiguration().then((result) => {
    imgConfig = result.images;
  }).catch((err) => {
    console.log('err', err);
  });
};

const getImageConfig = () => {
  return imgConfig;
};

// START WITH THIS TO SHOW YOU CAN DO THE ASSIGNMENT WITHOUT WAITING FOR SOMEONE TO COME UP WITH the API CALLS
// const showResults = () => {
// let singleMovie = {
// adult:false,
// backdrop_path:'/c2Ax8Rox5g6CneChwy1gmu4UbSb.jpg',
// genre_ids:[28, 12, 878, 14],
// id:140607,
// original_language:'en',
// original_title:'Star Wars: The Force Awakens',
// overview:'Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.',
// popularity:49.408373,
// poster_path:'/weUSwMdQIa3NaXVzwUoIIcAi85d.jpg',
// release_date:'2015-12-15',
// title:'Star Wars: The Force Awakens',
// video:false,
// vote_average:7.5,
// vote_count:7965
// };
// dom.domString([singleMovie, singleMovie, singleMovie, singleMovie, singleMovie, singleMovie], imgConfig);
// };

const showResults = (movieArray) => {
  dom.clearDom('movies');
  dom.domString(movieArray, imgConfig, 'movies');
};

const setKey = (key) => {
  tmdbKey = key;
  getConfig();
};

module.exports = {
  setKey,
  getConfig,
  searchMovies,
  getImageConfig,
};
