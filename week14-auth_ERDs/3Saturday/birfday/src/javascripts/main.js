import firebase from 'firebase/app';
// import 'bootstrap';

import apiKeys from './helpers/apiKeys.json';

import myNav from './components/MyNav/MyNav';
import auth from './components/Auth/Auth';
import authData from './helpers/data/authData';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  myNav.navbarEvents();
  authData.checkLoginStatus();
  auth.loginButton();
};

init();
