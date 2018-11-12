import firebase from 'firebase/app';
import 'firebase/auth';

// const {setUID,} = require('./firebaseApi');
const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // setUID(user.uid);
      // User is signed in.
      $('#guests').removeClass('hide');
      $('#auth').addClass('hide');
      // call the getMoviesEvent
      // getAllMoviesEvent();
    } else {
      // No user is signed in.
      $('#auth').removeClass('hide');
      $('#guests').addClass('hide');
    }
  });
};

export default checkLoginStatus;
