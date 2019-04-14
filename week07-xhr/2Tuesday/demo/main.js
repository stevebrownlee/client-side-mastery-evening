// XHR - XmlHttpRequest
let rides = [];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.getElementById(divId);
  selectedDiv.innerHTML = textToPrint;
};

const domStringBuilder = (arrayToPrint) => {
  let domString = '';
  arrayToPrint.forEach((ride) => {
    domString += `<h3>${ride.name}</h3>`;
  })
  printToDom('ride-container', domString);
};

function executeThisCodeAfterFileLoads(){
  const data = JSON.parse(this.responseText);
  rides = data.rides;
  domStringBuilder(data.rides);
}

function executeThisCodeifXHRFails(){
  console.error('oh shit');
}

const getRidesData = () => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', executeThisCodeAfterFileLoads);
  myRequest.addEventListener('error', executeThisCodeifXHRFails);
  myRequest.open('GET', './db/rides.json');
  myRequest.send();
};

const init = () => {
  getRidesData();
};

init();