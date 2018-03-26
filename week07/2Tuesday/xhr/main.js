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
      domString +=     `<div class="button-container">`;
      domString +=       `<button class="escaped">Escaped</button>`;
      domString +=    `</div>`;
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
  const badAnimal = e.target.parentNode;
  const escapeeName = e.target.parentNode.parentNode.children[0].innerHTML;
  if(!e.target.parentNode.parentNode.classList.contains("vegetable")){
    showCarnivores(true);
    showVegetables(escapeeName, false);
  }else{
    showCarnivores(false);
    showVegetables(escapeeName, true);
  }
  showFoundButton(badAnimal);
};

const showCarnivores = (isVegetable) => {
  const carnivores = document.getElementsByClassName('carnivore');
  for (let i = 0; i < carnivores.length; i++) {
    carnivores[i].children[3].innerHTML = '';
    if(!isVegetable){
      carnivores[i].classList.add('red');
    }
  }
};

const showVegetables = (escapeeName, isVegetable) => {
  const vegetables = document.getElementsByClassName('vegetable');
  for (let i = 0; i < vegetables.length; i++) {
    if(vegetables[i].children[0].innerHTML !== escapeeName && !isVegetable){
      vegetables[i].children[3].innerHTML = `<button class="eat">EAT ME!!!!</button>`;
      vegetables[i].classList.add('green');
    } else {
      vegetables[i].children[3].innerHTML = "";
      vegetables[i].classList.add('green');
    }
  }
  initalizeEatmeButtons();
};

const showFoundButton = (runAway) => {
  runAway.innerHTML += `<button id="found">found</button>`;
  initalizeFoundButton();
};

const initalizeFoundButton = () => {
  const foundButton = document.getElementById('found');
  foundButton.addEventListener('click', () => {
    const animals = document.getElementsByClassName('animal');
    for (let i = 0; i < animals.length; i++) {
      animals[i].children[3].innerHTML = `<button class="escaped">Escaped</button>`;
      animals[i].classList.remove('green');
      animals[i].classList.remove('red');
    }
    addedEscapedEventListeners();
  });
};

const initalizeEatmeButtons = () => {
  const eatMes = document.getElementsByClassName('eat');
  for (let i = 0; i < eatMes.length; i++) {
    eatMes[i].addEventListener('click', alreadyBeenEaten);
  }
};

const alreadyBeenEaten = (e) => {
  const currentAnimal = e.target.parentNode;
  let currentNumber = currentAnimal.parentNode.children[1].innerHTML;
  let newNumber = currentNumber*1 - 1;
  if(newNumber < 1){
    currentAnimal.parentNode.children[1].innerHTML = 0;
    currentAnimal.parentNode.children[3].innerHTML = "";
    currentAnimal.parentNode.classList.remove('green');
    currentAnimal.parentNode.classList.remove('vegetable');
    currentAnimal.parentNode.innerHTML += `<div class="dead">DEAD</div>`;
  }else {
    currentAnimal.parentNode.children[1].innerHTML = newNumber;
  }
  
};

function executeThisCodeIfXHRFails () {
  console.log("An error occurred while transferring");
}

function executeThisCodeAfterFileLoaded () {
  const data = JSON.parse(this.responseText);
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