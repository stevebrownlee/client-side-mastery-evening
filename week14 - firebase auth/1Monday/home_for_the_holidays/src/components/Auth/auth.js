import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';
import checkLoginStatus from '../../helpers/authEvents';

import './auth.scss';

const loginButton = () => {
  const domString = `
    <button id="googleAuth" class="btn btn-danger">Login</button>
  `;
  $('#auth').html(domString);
  $('#googleAuth').on('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
    checkLoginStatus();
  });
};

export default loginButton;
