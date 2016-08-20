// Markup for dev tools hacking example
 // <div id="book-sale">
 //    <h2>Harry Potter Does Stuff</h2>
 //    Buy now for only <h3 id="book-price"></h3>
 //    <img src="book.jpg" alt="">
 //    <button id="btn">add to cart</button>
 //  </div>

 //  <div id="cart" class="is-hidden">
 //    <h3>My Cart</h3>
 //    <div id="cart-thumb"><img src="book.jpg" alt=""></div>
 //    <div id="cart-price"></div>
 //    <button id="checkout">Checkout</button>
 //  </div>

// Basic scope example:
// var outside = "global";

// function scopeStuff (){
//   var inside = "local";
//   console.log("outside from inside func ", outside );
//   console.log("inside from inside func ", inside );
// }

// console.log("outside global: ", outside);
// // console.log("inside global? ", inside );
// scopeStuff();

var global_base = 500;

// This function is not immediately executed
function throwAway() {
  global_base += 500;
}

// You have to explicitly execute the function
throwAway();
console.log("global_base", global_base);
// ++++++++++++++++
var tree = {};
tree.height = "8";
tree.char = "*"

console.log("tree object", tree );

function addStuffToTree(smell) {
  tree.color = "green";
  tree.scent = smell;
}

addStuffToTree("piney");
console.log("Tree after adding new props", tree );

// All of the above works because we defined `tree` on the global scope. It would not work if tree was defined inside a function
function makeATree( ) {
  var tree2 = {
    height: "8",
    char: "#"
  };
  return tree2;
}
var myTree = makeATree();
console.log("my tree", myTree );

tree2.height = "10";
myTree.height = "10";

console.log("tree2 height", tree2.height );
console.log("myTree height", myTree.height );

//*****************************

var basicCarModule = {

  color: "blue",
  size: "sedan",

  options: {
    sunRoof: true,
    racingStripes: false,
    spoiler: false,
    leatherSeats: true,
    heatedSeats: true,
    underLighting: false
  },

  setSpoilerOption: function (spoiler) {
    this.options.spoiler = spoiler;
  },

  setColor: function (color) {
    this.color = color;
  },

  setOptions: function (options) {
    this.options = options;
  }

}

console.log('basicCarModule', basicCarModule);

// You can call methods on the object
basicCarModule.setColor("green");

// You can also modify other keys, even without a setter function (bad)
basicCarModule.size = "minivan";
console.log('basicCarModule', basicCarModule);

// *************** BASIC IIFE COMPARISON****************
var global_base = 500;

This function is not immediately executed
function throwAway() {
  global_base += 500;
}

You have to explicitly execute the function
throwAway();
console.log("global_base", global_base);

This function expression is immediately executed
(function () {
  var _internal_base = 100;
  var _internal_sum = _internal_base + global_base;
  console.log("_internal_sum",_internal_sum)
}());

/*
  Just like any other function, any variables
  declared inside its scope are not available in
  the global scope.
 */
console.log("_internal_base",_internal_base)

// ************************ ADDING PRIVATE ATTRIBUTES **********************
var Sedan = (function() {
  var color = "black";
  var type = "sedan";

  return {
    manufacture_date: new Date(),
    getColor: function() {
      return color;
    },
    setColor: function(newColor) {
      color = newColor;
    },
    getType: function() {
      return type;
    }
  };
})();

/*
  Now, code that uses this module can call methods, and access
  properties that are in the public interface, but cannot change
  any private variables.
*/
Sedan.setColor("green");  // this works

/*
 This adds the property to the public interface, but the
 existing, internal type property remains unchanged.
*/
Sedan.type = "minivan";
// console.log(Sedan.getType());

// // console.log("Sedan new color", Sedan.setColor("purple")); //undefined, because setter
// // console.log("sedan new color gotten", Sedan.getColor() );

// Classroom livecoding exercise
// Create an IIFE module named SolarSystem. Have the student create properties and methods for the following:
var SolarSystem = (function(){
  // Getter for an array of planets that cannot be modified.
  var planets = ["Saturn", "Earth", "Mercury", "Naboo", "Tatooine"];
  var planetsLandedOn = 5;
  var spacecraft = ["Hubble", "Voyager1", "Voyager2", "SS Enterprise", "Voyager20" ];

  return {
    // Public property for holding a last modified date.
    last_modified: Date.now(),
    name: "SolarSystem",
    getArray: function() {
      return planets;
    },
    // Getter/setter for number of planets that humans have landed people or robots on.
    getPlanetsLandedOn: function() {
      return planetsLandedOn;
    },
    addSpacecraft: function(num) {
      planetsLandedOn = num;
    },
    // Getter/setter for spacecraft currently exploring solar system. These should be stored in a private array.
    getSpacecraft: function() {
      return spacecraft;
    },
    setSpacecraft: function(craft) {
      spacecraft.push(craft);
    },
    // Do they all have to be getters and setters? Nope
    wreckSpacecraft: function() {
      spacecraft.pop();
    }
  };
}());
// Homework: array methods again:
// https://github.com/nashville-software-school/front-end-milestones/blob/master/single-page-applications/exercises/IIFE_SOLAR_SYSTEM.md
//Watch iife vids

// SolarSystem augmentor functions
oldSolarSystem.getClosestStars = function() {
    return closestStars;
  };

oldSolarSystem.getAge = function() {
  return ageOfSolarSystem;
};

oldSolarSystem.setAge = function(age) {
  ageOfSolarSystem = age;
  this.last_modified = Date.now();
};

oldSolarSystem.getDwarfPlanets = function() {
  return dwarfPlanets;
};

oldSolarSystem.addDwarfPlanet = function(planetoid) {
  dwarfPlanets.push(planetoid);
  this.last_modified = Date.now();
};

