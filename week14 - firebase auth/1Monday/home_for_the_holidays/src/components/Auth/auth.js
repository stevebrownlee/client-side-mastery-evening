import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';
import googleLogin from './glogin.png';
import checkLoginStatus from '../../helpers/authEvents';

import './auth.scss';

const loginButton = () => {
  const domString = `
    <button id="googleAuth" class="btn btn-secondary"><img src='${googleLogin}'></button>
  `;
  $('#auth').html(domString);
  $('#googleAuth').on('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
    checkLoginStatus();
  });
};

export default loginButton;
