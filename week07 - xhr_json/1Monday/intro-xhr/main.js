console.log("First line in JS file");
console.log(Date.now());

const printToDom = (domString, divId) => {
  const printTo = document.getElementById(divId);
  printTo.innerHTML = domString;
};

function executeThisCodeIfXHRFails () {  //NO ES6
  console.log("An error occurred while transferring");
}

function executeThisCodeAfterFileLoaded () {   //NO ES6
  console.log("executeThisCodeAfterFileLoaded time:", Date.now()); //should be about 40ms after last one.
  console.log("this:", this); //return XHR request
  console.log("this.responseText:", this.responseText);//return json data
  var data = JSON.parse(this.responseText); //must parse because it comes back as a string and we want to use it like an object
  console.log("data", data);//object ready to go

  let domString = "";
  for (var i = 0; i < data.cats.length; i++) {
    currentCat = data.cats[i];

    domString += `<h3>${currentCat.name}</h3>`
  };
  printToDom(domString, 'cat-box');
}

var myRequest = new XMLHttpRequest();  //new constructor - has all methods available
myRequest.addEventListener("load", executeThisCodeAfterFileLoaded); //when the file loads call this function
myRequest.addEventListener("error", executeThisCodeIfXHRFails); //if the file fails to load call this function
myRequest.open("GET", "cats.json"); //initializes the request;  what action are you trying to perform (get) on what file (songs.json)
myRequest.send();//sends the request - aka gets the json;


console.log("Last line in JS file");
console.log(Date.now()); //should be about 1 ms after first one