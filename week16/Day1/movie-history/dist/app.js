(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const tmdb = require('./tmdb');

let tmdbKey = "";

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
	}).catch((err) => {
		console.log("err", err);
	});
};

module.exports = {retrieveKeys};
},{"./tmdb":5}],2:[function(require,module,exports){
"use strict";

const outputDiv = $('#movies');

const domString = (movieArray, config) => {
	let domStrang = ``;
		for(let i=0; i<movieArray.length; i++){	
			if(i % 3 === 0){
				domStrang +=`<div class="row">`;
			}

			domStrang +=`  <div class="col-sm-6 col-md-4">`;
			domStrang +=`    <div class="thumbnail">`;
			domStrang +=`      <img src="${config.base_url}/w500/${movieArray[i].poster_path}" alt="...">`;
			domStrang +=`      <div class="caption">`;
			domStrang +=`        <h3>${movieArray[i].title}</h3>`;
			domStrang +=`        <p>${movieArray[i].overview}</p>`;
			domStrang +=`        <p><a href="#" class="btn btn-primary" role="button">Review</a> <a href="#" class="btn btn-default" role="button">Wishlist</a></p>`;
			domStrang +=`      </div>`;
			domStrang +=`    </div>`;
			domStrang +=`  </div>`;

			if(i % 3 === 2){
				domStrang +=`</div>`;		
			}	
		}
	printToDom(domStrang);
};


const printToDom = (strang) => {
	outputDiv.append(strang);
};

const clearDom = () => {
	outputDiv.empty();
};

module.exports = {domString, clearDom};
},{}],3:[function(require,module,exports){
"use strict";

var tmdb = require('./tmdb');

const searchBar = $('#searchBar');

const pressEnter = () => {
	$(document).keypress((e) =>{
		if(e.key === "Enter"){
			let searchNoSpaces =searchBar.val().replace(" ", "%20");
				tmdb.searchMovies(searchNoSpaces);
		}
	});
};

module.exports = {pressEnter};
},{"./tmdb":5}],4:[function(require,module,exports){
"use strict";

const apiKeys = require('./apiKeys');
const events = require('./events');


apiKeys.retrieveKeys();
events.pressEnter();
},{"./apiKeys":1,"./events":3}],5:[function(require,module,exports){
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



// START WITH THIS TO SHOW YOU CAN DO THE ASSIGNMENT WITHOUT WAITING FOR SOMEONE TO COME UP WITH the API CALLS
// const showResults = () => {
// 	let singleMovie = {
// 		adult:false,
// 		backdrop_path:"/c2Ax8Rox5g6CneChwy1gmu4UbSb.jpg",
// 		genre_ids:[28, 12, 878, 14],
// 		id:140607,
// 		original_language:"en",
// 		original_title:"Star Wars: The Force Awakens",
// 		overview:"Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.",
// 		popularity:49.408373,
// 		poster_path:"/weUSwMdQIa3NaXVzwUoIIcAi85d.jpg",
// 		release_date:"2015-12-15",
// 		title:"Star Wars: The Force Awakens",
// 		video:false,
// 		vote_average:7.5,
// 		vote_count:7965
// 	};
// 	dom.domString([singleMovie, singleMovie, singleMovie, singleMovie, singleMovie, singleMovie], imgConfig);
// };


const showResults = (movieArray) => {
	dom.clearDom();
	dom.domString(movieArray, imgConfig);
};

const setKey = (key) => {
	tmdbKey=key;
	getConfig();
};

module.exports = {setKey, getConfig, searchMovies};
},{"./dom":2}]},{},[4]);
