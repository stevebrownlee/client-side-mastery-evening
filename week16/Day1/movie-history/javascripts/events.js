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