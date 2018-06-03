const {getAllMoviesEvent,} = require('./events');
const {setUid,} = require('./firebaseApi');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      setUid(user.uid);
      $('#myMovies').removeClass('hide');
      $('#search').addClass('hide');
      $('#authScreen').addClass('hide');
      $('#logOut, #mine, #navSearch').removeClass('hide');
      $('#authenticate').addClass('hide');
      getAllMoviesEvent();
    } else {
      $('#myMovies').addClass('hide');
      $('#search').addClass('hide');
      $('#authScreen').removeClass('hide');
      $('#logOut, #mine, #navSearch').addClass('hide');
      $('#authenticate').removeClass('hide');
    }
  });
};

module.exports = {
  checkLoginStatus,
};
