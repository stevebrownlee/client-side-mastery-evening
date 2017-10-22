(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

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
		firebase.initializeApp(results.firebaseKeys);
		// console.log("firebase apps?", firebase.apps);
	}).catch((err) => {
		console.log("err", err);
	});
};


module.exports = {retrieveKeys};
},{"./firebaseApi":4,"./tmdb":6}],2:[function(require,module,exports){
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
			domStrang +=`      <img src="${config.base_url}/w342/${movieArray[i].poster_path}" alt="...">`;
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

let firebaseApi = require('./firebaseApi');
let tmdb = require('./tmdb');

const searchBar = $('#searchBar');

const pressEnter = () => {
	$(document).keypress((e) =>{
		if(e.key === "Enter"){
			let searchNoSpaces =searchBar.val().replace(" ", "%20");
				tmdb.searchMovies(searchNoSpaces);
		}
	});
};

const myLinks = () =>{
	$(document).click((e) => {
		if(e.target.id === "navSearch"){
			$("#search").removeClass("hide");
			$("#myMovies").addClass("hide");
			$("#authScreen").addClass("hide");
		} else if(e.target.id === "mine"){
			$("#myMovies").removeClass("hide");
			$("#search").addClass("hide");
			$("#authScreen").addClass("hide");
			firebaseApi.getMovieList().then((result) => {
				console.log("getMovieList", result);
			}).catch((err) => {
				console.log("error in getMovieList", err);
			});
		} else {
			$("#myMovies").addClass("hide");
			$("#search").addClass("hide");
			$("#authScreen").removeClass("hide");
		}
	});
};

const googleAuth = () => {
	$('#googleButton').click(() => {
		firebaseApi.authenticateGoogle().then((result) =>{
			console.log("authenticateGoogle", result);
		}).catch((error) =>{
			console.log("googleAuth", error);
		});
	});
};

module.exports = {pressEnter, myLinks, googleAuth};
},{"./firebaseApi":4,"./tmdb":6}],4:[function(require,module,exports){
"use strict";

let firebaseKey = "";
let userUid = "";

const setKey = (key) => {
    firebaseKey = key;
};

//Firebase: GOOGLE - Use input credentials to authenticate user.
let authenticateGoogle = () => {
    return new Promise((resolve, reject) => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((authData) => {
                userUid = authData.user.uid;
                resolve(authData.user);
            }).catch((error) => {
                reject(error);
            });
    });
};

let getMovieList = () => {
    let movies = [];
    return new Promise((resolve, reject) => {
        $.ajax(`${firebaseKey.databaseURL}/movies.json?orderBy="uid"&equalTo="${userUid}"`)
            .then((fbMovies) => {
                if (fbMovies !== null) {
                    Object.keys(fbMovies).forEach((key) => {
                        fbMovies[key].id = key;
                        movies.push(fbMovies[key]);
                    });
                }
                resolve(movies);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

module.exports = {
    setKey,
    authenticateGoogle,
    getMovieList
};
},{}],5:[function(require,module,exports){
"use strict";

const apiKeys = require('./apiKeys');
const events = require('./events');


apiKeys.retrieveKeys();
events.myLinks();
events.googleAuth();
events.pressEnter();
},{"./apiKeys":1,"./events":3}],6:[function(require,module,exports){
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
},{"./dom":2}]},{},[5]);
