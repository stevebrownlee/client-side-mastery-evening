import firebase from 'firebase/app';

import apiKeys from './helpers/apiKeys.json';

import myNavbar from './components/MyNavbar/myNavbar';
import auth from './components/Auth/auth';
import machine from './components/Machine/machine';

import authData from './helpers/data/authData';

import '../styles/main.scss';

const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  myNavbar.logoutEvent();
  authData.checkLoginStatus();
  auth.loginButton();
  machine.buildTheMachine();
};

init();
