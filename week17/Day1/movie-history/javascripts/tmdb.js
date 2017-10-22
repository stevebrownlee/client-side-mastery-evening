"use strict";

var dom = require('./dom');

let tmdbKey = "";
let imgConfig = {};

const searchTMDB = (txt) => {
	return new Promise((resolve, reject) => {
		$.ajax(`https://api.themoviedb.org/3/search/movie?api_key=${tmdbKey}&language=en-US&query=${txt}&page=1&include_adult=false`).done((data) => {
			resolve(data.results);
		}).fail((error) => {
			reject(error);
		});
	});
};

const tmdbConfiguration = () => {
		return new Promise((resolve, reject) => {
		$.ajax(`https://api.themoviedb.org/3/configuration?api_key=${tmdbKey}`).done((data) => {
			resolve(data);
		}).fail((error) => {
			reject(error);
		});
	});
};

const searchMovies = (searchText) => {
	searchTMDB(searchText).then((result) => {
		showResults(result);
	}).catch((err) => {
		console.log("err", err);
	});

};

const getConfig = () => {
	tmdbConfiguration().then((result) => {
		imgConfig = result.images;
	}).catch((err) => {
		console.log("err", err);
	});
};

const showResults = (movieArray) => {
	dom.clearDom();
	dom.domString(movieArray, imgConfig);
};

const setKey = (key) => {
	tmdbKey=key;
	getConfig();
};

module.exports = {setKey, getConfig, searchMovies};