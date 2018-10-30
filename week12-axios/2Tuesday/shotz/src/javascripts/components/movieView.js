import $ from 'jquery';

const setMovieViewEvents = () => {
  $('.movie').on('click', (e) => {
    const movieId = e.target.closest('.movie').id;

  });
};

export default setMovieViewEvents;
