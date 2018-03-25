const printToDom = (domString, divId) => {
  const printTo = document.getElementById(divId);
  printTo.innerHTML = domString;
};

const buildDomString = (studentArray) => {
  let domString = '';
  studentArray.forEach((animal) => {
      if(animal.isCarnivore){
        domString += `<div class="animal carnivore">`;
      } else {
        domString += `<div class="animal vegetable">`;
      }
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
    escapedButtons[i].addEventListener('click', animalEscaped);
  }
};

const animalEscaped = (e) => {
  const badAnimal = e.target.parentNode.children[0];
  showCarnivores();
  showVegetables();
};

const showCarnivores = () => {
  const carnivores = document.getElementsByClassName('carnivore');
  for (let i = 0; i < carnivores.length; i++) {
    carnivores[i].classList.add('red');
  }
};

const showVegetables = () => {
  const vegetables = document.getElementsByClassName('vegetable');
  for (let i = 0; i < vegetables.length; i++) {
    vegetables[i].classList.add('green');
  }
}

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