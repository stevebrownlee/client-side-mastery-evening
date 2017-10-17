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