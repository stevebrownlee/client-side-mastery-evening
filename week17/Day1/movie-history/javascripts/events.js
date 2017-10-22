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