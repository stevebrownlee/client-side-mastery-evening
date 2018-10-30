import movieData from '../data/moviesData';

const initalizeMoviesView = () => {
  movieData.loadMovies().then((movies) => {
    console.log('movies', movies);
  }).catch((error) => {
    console.error(error);
  });
};

export default { initalizeMoviesView };
