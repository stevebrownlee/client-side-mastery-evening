import firebase from 'firebase/app';
// import 'bootstrap';

import apiKeys from './helpers/apiKeys.json';

// import createNavbar from './components/Navbar/navbar';
// import loginButton from './components/Auth/Auth';
import authData from './helpers/data/authData';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  console.error(firebase);
  // createNavbar();
  authData.checkLoginStatus();
  // loginButton();
};

init();
