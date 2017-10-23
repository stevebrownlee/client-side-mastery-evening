"use strict";

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
			domStrang += `<input id="stars_${movieArray[i].id}" name="stars_${movieArray[i].id}" value="${movieArray[i].rating}" class="rating-loading">`;
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
	console.log("starArray", starArray);
	starArray.forEach((star) =>{
		$('#stars_' + star.id).rating({min: 0, max: 5, step: 1, stars: 5});
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