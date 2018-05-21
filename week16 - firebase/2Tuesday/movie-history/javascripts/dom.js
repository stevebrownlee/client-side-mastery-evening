'use strict';

const domString = (movieArray, config, whereToPrint, myMovieMode = null) => {
  let domStrang = ``;
  for (let i = 0; i < movieArray.length; i++) {
    if (i % 3 === 0) {
      domStrang += `<div class='row'>`;
    }

    domStrang += `  <div class='col-sm-6 col-md-4 movie'>`;
    domStrang += `    <div class='thumbnail'>`;
    domStrang += `      <img class='poster_path' src='${config.base_url}/w342/${movieArray[i].poster_path}' alt='...'>`;
    domStrang += `      <div class='caption'>`;
    domStrang += `        <h3 class='title'>${movieArray[i].title}</h3>`;
    domStrang += `        <p class='overview'>${movieArray[i].overview}</p>`;
    if (!myMovieMode) {
      domStrang += `      <p><a class='btn btn-primary' role='button'>Review</a> <a class='btn btn-default wishlist' role='button'>Wishlist</a></p>`;
    }
    domStrang += `      </div>`;
    domStrang += `    </div>`;
    domStrang += `  </div>`;

    if (i % 3 === 2) {
      domStrang += `</div>`;
    }
  }
  printToDom(whereToPrint, domStrang);
};

const printToDom = (outputDiv, strang) => {
  $(`#${outputDiv}`).append(strang);
};

const clearDom = (divToEmpty) => {
  $(`#${divToEmpty}`).empty();
};

module.exports = {
  domString,
  clearDom,
};
