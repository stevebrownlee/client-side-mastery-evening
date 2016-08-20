// Have the student create properties and methods for the following:
// Any other fun/related data that the student wants to add.
var SolarSystem = (function (originalSS) {
  var planets = ["Mercury", "Venus", "Earth", "Mars", "Xenon6", "Claire"];
  var planetsLandedUpon = 234;
  var spacecraft = ["U.S.S. Enterprise", "Voyager", "Cassini", "Yo Mama"];

  return {
    //Getter for an array of planets that cannot be modified.
    getPlanets: function() {
      return planets;
    },
    // Getter/setter for number of planets that humans have landed people or robots on.
    getPlanetsLandedOn: function() {
      return planetsLandedUpon;
    },
    setPlanetsLandedOnNumber: function(num) {
      planetsLandedUpon = num;
    },
    //Public property for holding a last modified date.
    lastModified: Date.now(),
    //Getter/setter for spacecraft currently exploring solar system. These should be stored in a private array.
    getSpacecraft: function() {
      return spacecraft;
    },
    addSpacecraft: function(newShip) {
      spacecraft.push(newShip);
    }
  }
})();


// function gimmiePrice(meat) {
//   var toppings = {"turkey": 0.90, "salami": 1.00};
//   var price = toppings[meat];
//   return price;
// }

// console.log("toppings.turkey", gimmiePrice("salami"));












































