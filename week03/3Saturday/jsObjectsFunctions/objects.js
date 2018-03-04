var favAnimal = {
  name: "zoe",
  animal: "cat"
};

console.log("favAnimal", favAnimal.animal);
console.log("favAnimal", favAnimal['animal']);

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
console.log("instructorPets", instructorPets);

// div with id="pet-names"
//loop through instructorPets and print petName as h1 tag to that div
var petDiv = document.getElementById("pet-names");
for(var i=0; i<instructorPets.length;  i++){
  console.log("animal", instructorPets[i].petName); 
  petDiv.innerHTML += '<h1>'+ instructorPets[i].petName + '</h1>';
}