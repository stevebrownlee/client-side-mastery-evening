var SolarSystem = (function (oldSolarSystem) {
  var closestStars = ["Alpha Centauri", "Barnard's Star", "Luhman 16", "WISE 0855−0714", "Wolf 359"];
  var ageOfSolarSystem = 0;
  var dwarfPlanets = [];

  oldSolarSystem.getClosestStars = function() {
    return closestStars;
  };

  oldSolarSystem.addDwarfPlanet = function(lumpOfRock) {
    dwarfPlanets.push(lumpOfRock);
  };

  return oldSolarSystem;

})(SolarSystem || {});






















// var SolarSystem = (function(originalSolarSystem) { //<-----make this take arg of oldSolarSystem
//   var closestStars = ["Alpha Centauri", "Barnard's Star", "Luhman 16", "WISE 0855−0714", "Wolf 359"];
//   var ageOfSolarSystem = 0;
//   var dwarfPlanets = [];

//   // add methods to the orignal SolarSystem using object dot notation
//   originalSolarSystem.getClosestStars = function() {
//     return closestStars;
//   };
//   originalSolarSystem.addDwarfPlanet = function(tinyPlanet) {
//     dwarfPlanets.push(tinyPlanet);
//   };
//   originalSolarSystem.getDwarfPlanets = function() {
//     return dwarfPlanets;
//   };
//   // return the old solar system to the world with its new methods attached
//   return originalSolarSystem;

// }( SolarSystem || {} )); //<-----pass in the original SolarSystem object

// SolarSystem.addDwarfPlanet("Makemake");
// SolarSystem.addDwarfPlanet("Pluto");
// console.log("dwarf planets", SolarSystem.getDwarfPlanets());
// // console.log("last modified", SolarSystem.last_modified);

