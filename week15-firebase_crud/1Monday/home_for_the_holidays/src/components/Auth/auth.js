import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';

import googleImage from './Sign-in-with-Google.png';
import './auth.scss';

const loginButton = () => {
  const domString = `
    <button id="google-auth" class="btn btn-secondary">
      <img src="${googleImage}"/>
    </button>
  `;
  $('#auth').html(domString);
  $('#google-auth').on('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider);
  });
};

export default loginButton;
