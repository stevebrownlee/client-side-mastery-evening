import movieData from '../data/moviesData';

const initializeMoviesView = () => {
  movieData.loadMovies().then((movies) => {
    console.log('movies', movies);
  }).catch((error) => {
    console.error(error);
  });
};

export default { initializeMoviesView };
