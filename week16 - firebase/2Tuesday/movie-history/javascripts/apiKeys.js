'use strict';

const tmdb = require('./tmdb');
const firebaseApi = require('./firebaseApi');

const apiKeys = () => {
  return new Promise((resolve, reject) => {
    $.ajax('./db/apiKeys.json').done((data) => {
      resolve(data.apiKeys);
    }).fail((error) => {
      reject(error);
    });
  });
};

const retrieveKeys = () => {
  apiKeys().then((results) => {
    tmdb.setKey(results.tmdb.apiKey);
    firebaseApi.setKey(results.firebaseKeys);
    // This is the magic firebase stuff that allows you to use firebase methods within your application
    firebase.initializeApp(results.firebaseKeys);
  }).catch((err) => {
    console.log('err', err);
  });
};

module.exports = {
  retrieveKeys,
};
