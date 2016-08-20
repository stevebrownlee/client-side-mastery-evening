// Break now for a class exercise. Have students create a new directory named modules where they will create an HTML and a JS file. The JS file should create an IIFE module named SolarSystem. Have the student create properties and methods for the following:

// 1. Getter for an array of planets that cannot be modified.
// 2. Getter/setter for number of planets that humans have landed people or robots on.
// 3. Public property for holding a last modified date.
// 4. Getter/setter for spacecraft currently exploring solar system. These should be stored in a private array.
// 5. Any other fun/related data that the student wants to add.


  var SolarSystem = (function() {
    var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
    var activeSpacecraft = [];
    var planetsLandedOn = 0;

    return {
      getPlanets: function() {
        return planets;
      },
      // Public property for holding a last modified date.
      last_modified: Date.now(),
      // Getter/setter for spacecraft currently exploring solar system. These should be stored in a private array.
      addSpacecraft: function(spacecraft) {
        activeSpacecraft.push(spacecraft);
        this.last_modified = Date.now();
      },
      getSpacecraft: function() {
        return activeSpacecraft;
      },
      // Getter/setter for number of planets that humans have landed people or robots on.
      setPlanetsLandedOn: function(count) {
        if (count < 0 || count > planets.length) {
          throw `I don't think so. There are only ${planets.length} planets.`;
        } else {
          planetsLandedOn = count;
          this.last_modified = Date.now();
        }
      },
       // Do they all have to be getters and setters? Nope
      wreckSpacecraft: function() {
        spacecraft.pop();
      },
      getPlanetsLandedOn: function() {
        return planetsLandedOn;
      }
    };
}());