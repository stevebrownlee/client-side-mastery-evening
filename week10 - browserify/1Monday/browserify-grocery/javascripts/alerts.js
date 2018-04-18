const alertLocation = document.getElementById('alerts');

const successAlert = (message) => {
  let domString = '';
  domString +=  `<div class="alert alert-success alert-dismissible" role="alert">`;
  domString +=    `<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>`;
  domString +=    `<strong>SUCCESS!</strong> ${message}`;
  domString +=  `</div>`;
  printAlert(domString);
};

const failAlert = (message) => {
  let domString = '';
  domString +=  `<div class="alert alert-danger alert-dismissible" role="alert">`;
  domString +=    `<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>`;
  domString +=    `<strong>ERROR!</strong> ${message}`;
  domString +=  `</div>`;
  printAlert(domString);
};

const printAlert = (domString) => {
  alertLocation.innerHTML = domString;
};

module.exports = {
  successAlert,
  failAlert,
};
