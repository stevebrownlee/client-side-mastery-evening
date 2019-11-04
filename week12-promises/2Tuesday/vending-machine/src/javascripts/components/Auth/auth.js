import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';

import utilities from '../../helpers/utilities';

import googleImage from './Sign-in-with-Google.png';
import './auth.scss';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const loginButton = () => {
  let domString = '<button id="google-auth" class="btn btn-secondary">';
  domString += `<img src="${googleImage}"/>`;
  domString += '</button>';

  utilities.printToDom('auth', domString);
  $('#google-auth').click(signMeIn);
};

export default { loginButton };
