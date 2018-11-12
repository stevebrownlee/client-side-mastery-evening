// import $ from 'jquery';
import firebase from 'firebase/app';
import 'bootstrap';

import apiKeys from '../db/apiKeys.json';
import loginButton from './components/Auth/auth';
import createNavbar from './components/Navbar/navbar';

import './index.scss';


const initializeApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  createNavbar();
  loginButton();
};

initializeApp();
