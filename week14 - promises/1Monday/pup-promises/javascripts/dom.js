const outputDiv = $('#dogos');

const domString = (pups) => {
  pups.forEach((pup) => {
    let domString = '';
    domString += `<div class="col-sm-6 col-md-4">`;
    domString += `<div class="thumbnail">`;
    //   <img src="..." alt="...">
    //   <div class="caption">
    domString += `<h3>${pup.name}</h3>`;
    domString += `</div>`;
    domString += `</div>`;
    printToDom(domString);
  });
};

const printToDom = (pupString) => {
  outputDiv.append(pupString);
};

module.exports = domString;
