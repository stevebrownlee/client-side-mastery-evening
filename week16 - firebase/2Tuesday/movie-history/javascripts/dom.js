const domString = (movieArray, config, idToPrintIn, myCollectionMode = false) => {
  let strang = '';
  movieArray.forEach((movie, index) => {
    if (index % 3 === 0) {
      strang += `<div class="row">`;
    }
    strang += `<div class="col-sm-6 col-md-4 movie" data-firebase-id=${movie.id}>`;
    strang +=   `<div class="thumbnail">`;
    if (myCollectionMode) {
      strang += `<a class="btn btn-default deleteMovieFromCollection">X</a>`;
    }
    strang +=     `<img class="mv-poster_path" data-poster_path="${movie.poster_path}" src="${config.base_url}/w342/${movie.poster_path}" alt="Movie Poster">`;
    strang +=     `<div class="caption">`;
    strang +=       `<h3 class="mv-title">${movie.original_title ? movie.original_title : movie.title}</h3>`;
    strang +=       `<p class="mv-overview">${movie.overview}</p>`;

    if (myCollectionMode) {
      strang +=       `<p>This is where star rating will go eventually.</p>`;
    } else {
      strang +=       `<p><a class="btn btn-primary" role="button">Review</a> <a class="btn btn-default addToWishlist" role="button">Wishlist</a></p>`;
    }
    strang +=     `</div>`;
    strang +=   `</div>`;
    strang += `</div>`;

    if (index % 3 === 2) {
      strang += `</div>`;
    }
  });

  printToDom(strang, idToPrintIn);
};

const printToDom = (stringz, idToPrintIn) => {
  $(`#${idToPrintIn}`).html(stringz);
};

module.exports = {
  domString,
};
