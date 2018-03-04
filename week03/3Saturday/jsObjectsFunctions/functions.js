console.log("functions");


// function expressions
var a = function(){
 console.log("a", 3);
};

//function declarations
function b(){
  console.log("b", 2)
}



var num = 3;

function numPrinter(monkeyButt){
  //monkeyButt = num =3
  console.log("my number: ", monkeyButt);
}

numPrinter(num);
numPrinter(4);
numPrinter(6);
numPrinter("turtle");

function cat(){
  return "love them";
  // numPrinter("love them");
  // div.innerHTML = "love them";
}

var message = cat();
console.log("message", message);

var instructorPets = [
  {
    instructorName: "Zoe",
    petName: "Biff",
    animalType: "evil cat",
    isFavorite: false
  },
  {
    instructorName: "Zoe",
    petName: "Whiskey",
    animalType: "cat",
    isFavorite: true
  },
  {
    instructorName: "Lauren",
    petName: "Frankie",
    animalType: "sweet dog",
    isFavorite: true
  },
  {
    instructorName: "Callan",
    petName: "Seymour",
    animalType: "one eyed dog",
    isFavorite: true
  },
  {
    instructorName: "Callan",
    petName: "Wiley",
    animalType: "destructive dog",
    isFavorite: false
  }
];

/* <div class="pet isFavorite">
<h1>Whiskey</h1>
<h3>Owner: Zoe</h3>
<h3>Type: Cat</h3>
</div> */


// display each pet as card
function domStringMaker(animalArray){
// take pet names and create dom string
//call printToDom function
  for(var i=0; i<animalArray.length; i++){
    var animalString = "";
    if(animalArray[i].isFavorite){
      animalString += '<div class="pet isFavorite">';
    } else if(!animalArray[i].isFavorite){
      animalString += '<div class="pet isNotFavorite">';
    } else {
      animalString += '<div class="pet">';
    }
    animalString +=   "<h1>" + animalArray[i].petName + "</h1>";
    animalString +=   "<h3> Owner: " + animalArray[i].instructorName + "</h3>";
    animalString +=   "<h3> Type: " + animalArray[i].animalType + "</h3>";
    animalString += '</div>';
    
    // console.log("animalString", animalString);
    printToDom(animalString, "pet-names");
  }
}

function printToDom(stringToPrint, divId){
// take string and innerHTML to the divId
var myDiv = document.getElementById(divId);
console.log("myDiv", myDiv);
myDiv.innerHTML += stringToPrint;
}

domStringMaker(instructorPets);
