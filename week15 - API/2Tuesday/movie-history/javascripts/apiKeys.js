'use strict';

const tmdb = require('./tmdb');

const apiKeys = () => {
  return new Promise((resolve, reject) => {
    $.ajax('./db/apiKeys.json')
      .done(data => {
        resolve(data.apiKeys);
      })
      .fail(error => {
        reject(error);
      });
  });
};

const retrieveKeys = () => {
  apiKeys()
    .then(results => {
      tmdb.setKey(results.tmdb.apiKey);
    })
    .catch(err => {
      console.log('err', err);
    });
};

module.exports = {
  retrieveKeys,
};