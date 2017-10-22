"use strict";

const domString = (movieArray, config, divName) => {
	console.log("movieArray", movieArray);
	console.log("config", config);
	console.log("divName", divName);
	let domStrang = ``;
		for(let i=0; i<movieArray.length; i++){	
			if(i % 3 === 0){
				domStrang +=`<div class="row">`;
			}

			domStrang +=`  <div class="col-sm-6 col-md-4 movie">`;
			domStrang +=`    <div class="thumbnail">`;
			domStrang +=`      <img class="poster_path" src="${config.base_url}/w342/${movieArray[i].poster_path}" alt="...">`;
			domStrang +=`      <div class="caption">`;
			domStrang +=`        <h3 class="title">${movieArray[i].title}</h3>`;
			domStrang +=`        <p class="overview">${movieArray[i].overview}</p>`;
			domStrang +=`        <p><a class="btn btn-primary review" role="button">Review</a> <a class="btn btn-default wishlist" role="button">Wishlist</a></p>`;
			domStrang +=`      </div>`;
			domStrang +=`    </div>`;
			domStrang +=`  </div>`;

			if(i % 3 === 2){
				domStrang +=`</div>`;		
			}	
		}
	printToDom(domStrang, divName);
};


const printToDom = (strang, divName) => {
	$('#' + divName).append(strang);
};

const clearDom = (divName) => {
	$('#' + divName).empty();
};

module.exports = {domString, clearDom};