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
      $('#navbar-button-auth').hide();
      $('#holidays').show();
      $('#navbar-button-holidays').show();
      $('#navbar-button-guests').show();
      $('#navbar-button-logout').show();
      // call the getMoviesEvent
      // getAllMoviesEvent();
    } else {
      // No user is signed in.
      $('#navbar-button-auth').show();
      $('#auth').show();
      $('#guests').hide();
      $('#holidays').hide();
      $('#navbar-button-holidays').hide();
      $('#navbar-button-guests').hide();
      $('#navbar-button-logout').hide();
    }
  });
};

export default checkLoginStatus;
