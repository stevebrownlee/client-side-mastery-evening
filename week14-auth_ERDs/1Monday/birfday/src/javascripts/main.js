import firebase from 'firebase/app';
// import 'bootstrap';

import apiKeys from './helpers/apiKeys.json';

// import createNavbar from './components/Navbar/navbar';
import auth from './components/Auth/Auth';
import authData from './helpers/data/authData';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  console.error(firebase);
  // createNavbar();
  authData.checkLoginStatus();
  auth.loginButton();
};

init();
