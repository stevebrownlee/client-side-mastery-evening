const printToDom = (domString, divId) => {
  const printTo = document.getElementById(divId);
  printTo.innerHTML = domString;
};

const buildDomString = (studentArray) => {
  let domString = '';
  studentArray.forEach((animal) => {
      domString += `<div class="card">`;
     domString +=     `<h1>${animal.name}</h1>`;
     domString +=     `<h3>${animal.number}</h3>`;
     domString +=     `<img class="animal-image" src="${animal.imageUrl}" alt="">`;
     domString +=     `<button class="escaped">Escaped</button>`;
     domString +=  `</div>`;
  });
  printToDom(domString, 'animals');
};

const addedEscapedEventListeners = () => {
  const escapedButtons = document.getElementsByClassName('escaped');
  
  for (let i = 0; i < escapedButtons.length; i++) {
    escapedButtons[i].addEventListener('click', changeNameToGreen);
  }
};

const changeNameToGreen = (e) => {
  const nameOfStudent = e.target.parentNode.children[0];
  nameOfStudent.classList.add('green');
};

function executeThisCodeIfXHRFails () {
  console.log("An error occurred while transferring");
}

function executeThisCodeAfterFileLoaded () {
  const data = JSON.parse(this.responseText); //must parse because it comes back as a string and we want to use it like an object
  buildDomString(data.animals);
  addedEscapedEventListeners();
}

const startApplication = () => {
  var myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
  myRequest.addEventListener("error", executeThisCodeIfXHRFails);
  myRequest.open("GET", "animals.json");
  myRequest.send();
};

startApplication(); 