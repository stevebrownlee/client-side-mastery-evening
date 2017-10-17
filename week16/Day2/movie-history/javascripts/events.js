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

const myLinks = () =>{
	$(document).click((e) => {
		console.log(e.target.id);
		if(e.target.id === "navSearch"){
			$("#search").removeClass("hide");
			$("#myMovies").addClass("hide");
		} else if(e.target.id === "mine"){
			$("#myMovies").removeClass("hide");
			$("#search").addClass("hide");
		}
	});
};

module.exports = {pressEnter, myLinks};