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
    }).catch((err) => {
        console.log("err", err);
    });
};


module.exports = {
    retrieveKeys
};
},{"./firebaseApi":4,"./tmdb":6}],2:[function(require,module,exports){
"use strict";
let firebaseApi = require('./firebaseApi');


const domString = (movieArray, config, divName, search) => {
    let domStrang = ``;
    for (let i = 0; i < movieArray.length; i++) {
        if (i % 3 === 0) {
            domStrang += `<div class="row">`;
        }
        domStrang += `      <div class="col-sm-6 col-md-4 movie">`;
        domStrang += `        <div class="thumbnail">`;
        if (!search) {
            domStrang += `<a class="btn btn-default delete" data-firebase-id="${movieArray[i].id}">X</a>`;
        }
        domStrang += `            <img class="poster_path" src="${config.base_url}/w342/${movieArray[i].poster_path}" alt="...">`;
        domStrang += `            <div class="caption">`;
        domStrang += `                <h3 class="title">${movieArray[i].title}</h3>`;
        domStrang += `                <p class="overview">${movieArray[i].overview}</p>`;
        if (search) {
            domStrang += `            <p><a class="btn btn-primary review" role="button">Review</a> <a class="btn btn-default wishlist" role="button">Wishlist</a></p>`;
        } else {
        	domStrang += `<label for="stars_${movieArray[i].id}" class="control-label">Rate This</label>`;
			domStrang += `<input id="stars_${movieArray[i].id}" name="stars_${movieArray[i].id}"  class="stars" value="${movieArray[i].rating}" class="rating-loading">`;
        }
        domStrang += `            </div>`;
        domStrang += `         </div>`;
        domStrang += `        </div>`;

        if (i % 3 === 2) {
            domStrang += `</div></section>`;
        }
    }
    if(!search){
    	printToDom(domStrang, divName, movieArray);
    } else{
    	printToDom(domStrang, divName);	
    }

};

const initializeStars = (starArray) =>{
	starArray.forEach((star) =>{
		$('#stars_' + star.id).rating({min: 0, max: 5, step: 1, stars: 5}).on("rating.change", (e, value) => {
        	let movieId = $(e.target.closest('.thumbnail')).find('.delete').data('firebase-id');
        	let mommy = e.target.closest('.movie');
        	let modifiedMovie = {
	            "title": $(mommy).find('.title').html(),
	            "overview": $(mommy).find('.overview').html(),
	            "poster_path": $(mommy).find('.poster_path').attr('src').split('/').pop(),
	            "rating": value,
	            "isWatched": true,
	            "uid": ""
	        };
	        firebaseApi.editMovie(modifiedMovie, movieId).then((results) => {
	        	console.log(results);
	        }).catch((err) =>{
	        	console.log("editMovie error", err);
	        });
    	});
	});
};

const printToDom = (strang, divName, starsArray) => {
    $('#' + divName).append(strang);

    if(starsArray){
    	initializeStars(starsArray);
    }
};

const clearDom = (divName) => {
    $('#' + divName).empty();
};

module.exports = {
    domString,
    clearDom
};
},{"./firebaseApi":4}],3:[function(require,module,exports){
"use strict";

let firebaseApi = require('./firebaseApi');
let tmdb = require('./tmdb');
let dom = require('./dom');

const searchBar = $('#searchBar');

const pressEnter = () => {
    $(document).keypress((e) => {
        if (e.key === "Enter") {
            let searchNoSpaces = searchBar.val().replace(" ", "%20");
            tmdb.searchMovies(searchNoSpaces);
        }
    });
};


const getMahMovies = () => {
    firebaseApi.getMovieList().then((result) => {
        dom.clearDom('moviesMine');
        dom.domString(result, tmdb.getImgConfig(), 'moviesMine');
    }).catch((err) => {
        console.log("error in getMovieList", err);
    });
};

const myLinks = () => {
    $(document).click((e) => {
        if (e.target.id === "navSearch") {
            $("#search").removeClass("hide");
            $("#myMovies").addClass("hide");
            $("#authScreen").addClass("hide");
        } else if (e.target.id === "mine") {
            $("#myMovies").removeClass("hide");
            $("#search").addClass("hide");
            $("#authScreen").addClass("hide");
            getMahMovies();
        } else if (e.target.id === 'authenticate') {
            $("#myMovies").addClass("hide");
            $("#search").addClass("hide");
            $("#authScreen").removeClass("hide");
        }
    });
};

const googleAuth = () => {
    $('#googleButton').click(() => {
        firebaseApi.authenticateGoogle().then((result) => {}).catch((error) => {
            console.log("googleAuth", error);
        });
    });
};


const wishlistEvents = () => {
    $('body').on('click', '.wishlist', (e) => {
        let mommy = e.target.closest('.movie');
        let newMovie = {
            "title": $(mommy).find('.title').html(),
            "overview": $(mommy).find('.overview').html(),
            "poster_path": $(mommy).find('.poster_path').attr('src').split('/').pop(),
            "rating": 0,
            "isWatched": false,
            "uid": ""
        };

        firebaseApi.saveMovie(newMovie).then(() => {
            $(mommy).remove();
        }).catch((err) => {
            console.log("watchlist didn't save", err);
        });
    });
};


const reviewEvents = () => {
    $('body').on('click', '.review', (e) => {
        let mommy = e.target.closest('.movie');
        let newMovie = {
            "title": $(mommy).find('.title').html(),
            "overview": $(mommy).find('.overview').html(),
            "poster_path": $(mommy).find('.poster_path').attr('src').split('/').pop(),
            "rating": 0,
            "isWatched": true,
            "uid": ""
        };

        firebaseApi.saveMovie(newMovie).then(() => {
            $(mommy).remove();
        }).catch((err) => {
            console.log("watchlist didn't save", err);
        });
    });
};

const deleteMovie = () => {
    $('body').on('click', '.delete', (e) => {
        let movieId = $(e.target).data('firebase-id');
        firebaseApi.deleteMovie(movieId).then((result) => {
            getMahMovies();
        }).catch((err) => {
            console.log("error deleting movie", err);
        });
    });
};

// const starChange = () => {
// 	$('body').on('change', '.stars', (e) =>{
// 		console.log(change,);
// 	});
// };




const init = () => {
    myLinks();
    googleAuth();
    pressEnter();
    wishlistEvents();
    reviewEvents();
    deleteMovie();
};

module.exports = {
    init
};
},{"./dom":2,"./firebaseApi":4,"./tmdb":6}],4:[function(require,module,exports){
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

let saveMovie = (movie) => {
    movie.uid = userUid;
    return new Promise((resolve, reject) => {
        $.ajax({
                method: "POST",
                url: `${firebaseKey.databaseURL}/movies.json`,
                data: JSON.stringify(movie)
            }).then((fbMovies) => {
                resolve(fbMovies);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

let deleteMovie = (movieId) => {
    return new Promise((resolve, reject) => {
        $.ajax({
                method: "DELETE",
                url: `${firebaseKey.databaseURL}/movies/${movieId}.json`
            }).then((fbMovies) => {
                resolve(fbMovies);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

let editMovie = (modifiedMovie, movieId) =>{
    modifiedMovie.uid = userUid;
    return new Promise((resolve, reject) => {
        $.ajax({
                method: "PUT",
                url: `${firebaseKey.databaseURL}/movies/${movieId}.json`,
                data: JSON.stringify(modifiedMovie)
            }).then((fbMovies) => {
                resolve(fbMovies);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

module.exports = {
    setKey,
    authenticateGoogle,
    getMovieList,
    saveMovie,
    deleteMovie,
    editMovie
};
},{}],5:[function(require,module,exports){
"use strict";

const apiKeys = require('./apiKeys');
const events = require('./events');

apiKeys.retrieveKeys();
events.init();



/* 1. Visualizing things on Hover - See next part for action on click */
$('#stars li').on('mouseover', function(){
    let onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
   
    // Now highlight all the stars that's not after the current hovered star
    $(this).parent().children('li.star').each(function(e){
      if (e < onStar) {
        $(this).addClass('hover');
      }
      else {
        $(this).removeClass('hover');
      }
    });
    
}).on('mouseout', function(){
    $(this).parent().children('li.star').each(function(e){
      $(this).removeClass('hover');
    });
});
  
  
 /* 2. Action to perform on click */
 $('#stars li').on('click', function(){
    let onStar = parseInt($(this).data('value'), 10); // The star currently selected
    let stars = $(this).parent().children('li.star');
    
    for (let i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('selected');
    }
    
    for (let i = 0; i < onStar; i++) {
      $(stars[i]).addClass('selected');
    }

        // JUST RESPONSE (Not needed)
    let ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
    let msg = "";
    if (ratingValue > 1) {
        msg = "Thanks! You rated this " + ratingValue + " stars.";
    } else {
        msg = "We will improve ourselves. You rated this " + ratingValue + " stars.";
    }
    
});
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
    dom.clearDom('moviesSearch');
    dom.domString(movieArray, imgConfig, 'moviesSearch', true);
};

const setKey = (key) => {
    tmdbKey = key;
    getConfig();
};

const getImgConfig = () => {
    return imgConfig;
};

module.exports = {
    setKey,
    getConfig,
    searchMovies,
    getImgConfig
};
},{"./dom":2}]},{},[5]);
