import firebase from 'firebase/app';
import 'firebase/auth';

import util from '../../helpers/util';

import googleImage from './Sign-in-with-Google.png';
import './Auth.scss';

const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const loginButton = () => {
  let domString = '<button id="google-auth" class="btn btn-secondary">';
  domString += `<img src="${googleImage}"/>`;
  domString += '</button>';
  util.printToDom('auth', domString);
  document.getElementById('google-auth').addEventListener('click', signMeIn);
};

export default { loginButton };
