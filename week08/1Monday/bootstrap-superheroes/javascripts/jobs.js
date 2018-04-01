const printToDom = (domString, divId) => {
  document.getElementById(divId).innerHTML = domString;
};

const buildSuperheroDropdown = (heroes) => {
  let domString = "";
  for (let i = 0; i < heroes.length; i++) {
    domString += `<li>`;
    domString += `<a class="hero-name">${heroes[i].name}</a>`;
    domString += `</li>`;
  }
  printToDom(domString, "superhero-dropdown-ul");
  addheroSelectionEventListeners();
}

const selectHero = () =>{
  console.log("hero selected");
}

const addheroSelectionEventListeners = () => {
  const heroNames = document.getElementsByClassName("hero-name");

  for (let i = 0; i < heroNames.length; i++) {
    heroNames[i].addEventListener("click", selectHero);
  }
};

function executeThisCodeIfXHRFails() {
  console.log("something broke");
}

function executeThisCodeAfterFileLoaded() {
  const data = JSON.parse(this.responseText);
  buildSuperheroDropdown(data.superheroes);
}

const startApplication = () => {
  let myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", executeThisCodeAfterFileLoaded);
  myRequest.addEventListener("error", executeThisCodeIfXHRFails);
  myRequest.open("GET", "../db/superheroes.json");
  myRequest.send();
};

startApplication();
