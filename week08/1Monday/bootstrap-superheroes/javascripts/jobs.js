let selectedHero = "";

const printToDom = (domString, divId) => {
  document.getElementById(divId).innerHTML = domString;
};

const buildSuperheroDropdown = heroes => {
  let domString = "";
  for (let i = 0; i < heroes.length; i++) {
    domString += `<li>`;
    domString += `<a class="hero-name" data-hero-id="${heroes[i].id}">${
      heroes[i].name
    }</a>`;
    domString += `</li>`;
  }
  printToDom(domString, "superhero-dropdown-ul");
  addheroSelectionEventListeners();
};

const displaySuperhero = heroes => {
  let domString = "";
  for (let i = 0; i < heroes.length; i++) {
    if (heroes[i].id === selectedHero) {
      domString += `<div class='row'>`;
      domString += `<div class="col-xs-4">`;
      if (heroes[i].gender === "Male") {
        domString += `<img class="maleCharImage" src=${heroes[i].image}>`;
      } else if (heroes[i].gender === "Female") {
        domString += `<img class="femaleCharImage" src=${heroes[i].image}>`;
      } else {
        domString += `<img class="charImage" src=${heroes[i].image}>`;
      }
      domString += `</div>`;
      domString += `<div class="col-xs-6">`;
      domString += `<h2>Selected hero: ${heroes[i].name}</h2>`;
      domString += `<p class="charDescription">${heroes[i].description}</p>`;
      domString += `</div></div>`;
    }
  }
  printToDom(domString, "selected-hero");
};

const selectHero = e => {
  selectedHero = e.target.dataset.heroId;
  const heroDropdownContainer = document.getElementById("superhero-dropdown");
  heroDropdownContainer.classList.add("hide");
  genericHeroRequest(loadFileforSingleHero);
};

const addheroSelectionEventListeners = () => {
  const heroNames = document.getElementsByClassName("hero-name");

  for (let i = 0; i < heroNames.length; i++) {
    heroNames[i].addEventListener("click", selectHero);
  }
};

function executeThisCodeIfXHRFails() {
  console.log("something broke");
}

function loadFileforSingleHero() {
  const data = JSON.parse(this.responseText);
  displaySuperhero(data.superheroes);
}

function loadFileforHeroDropdown() {
  const data = JSON.parse(this.responseText);
  buildSuperheroDropdown(data.superheroes);
}

const genericHeroRequest = successFunction => {
  let myRequest = new XMLHttpRequest();
  myRequest.addEventListener("load", successFunction);
  myRequest.addEventListener("error", executeThisCodeIfXHRFails);
  myRequest.open("GET", "../db/superheroes.json");
  myRequest.send();
};

const startApplication = () => {
  genericHeroRequest(loadFileforHeroDropdown);
};

startApplication();
