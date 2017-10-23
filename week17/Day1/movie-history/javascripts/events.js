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