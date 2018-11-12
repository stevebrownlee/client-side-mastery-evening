import firebase from 'firebase/app';
import 'firebase/auth';
import $ from 'jquery';

// const {setUID,} = require('./firebaseApi');
const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      // setUID(user.uid);
      // User is signed in.
      $('#guests').hide();
      $('#auth').hide();
      $('#holidays').show();
      // call the getMoviesEvent
      // getAllMoviesEvent();
    } else {
      // No user is signed in.
      $('#guests').hide();
      $('#auth').show();
      $('#holidays').hide();
    }
  });
};

export default checkLoginStatus;
