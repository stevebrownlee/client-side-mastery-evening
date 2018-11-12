// import $ from 'jquery';
import firebase from 'firebase/app';
import 'bootstrap';


import apiKeys from '../db/apiKeys.json';
import './index.scss';

const initializeApp = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  console.log('hi');
};

initializeApp();
