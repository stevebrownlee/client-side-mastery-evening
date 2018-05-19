const outputDiv = $('#insult');

const domString = (word1, word2, noun) => {
  let strang = '';
  strang += `<div class="col-sm-6">`;
  strang +=   `<div class="thumbnail">`;
  strang +=     `<div class="caption">`;
  strang +=       `<h3>${word1} ${word2} ${noun}</h3>`;
  strang +=     `</div>`;
  strang +=   `</div>`;
  strang += `</div>`;
  printToDom(strang);
};

const printToDom = (insultz) => {
  outputDiv.html(insultz);
};

module.exports = {
  domString,
};
