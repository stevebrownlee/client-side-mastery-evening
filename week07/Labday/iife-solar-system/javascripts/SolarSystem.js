  var SolarSystem = (function() {
    var planets = [];
    var activeSpacecraft = [];
    var planetsLandedOn = 0;

    planets.push("mercury", "venus", "earth", "mars");
    planets.push("jupiter", "saturn", "uranus", "neptune");
    planets.push("mnemosyne");

    return {
      getPlanets: function() {
        return planets;
      },
      last_modified: Date.now(),
      addSpacecraft: function(spacecraft) {
        activeSpacecraft.push(spacecraft);
        this.last_modified = Date.now();
      },
      getSpacecraft: function() {
        return activeSpacecraft;
      },
      setPlanetsLandedOn: function(count) {
        if (count < 0 || count > planets.length) {
          throw `I don't think so. There are only ${planets.length} planets.`;
        } else {
          planetsLandedOn = count;
          this.last_modified = Date.now();
        }
      },
      getPlanetsLandedOn: function() {
        return planetsLandedOn;
      }
    };
}());

console.log("last modified", SolarSystem.last_modified);

SolarSystem.addSpacecraft("New Horizon");
// SolarSystem.addSpacecraft("Voyager 1");
// SolarSystem.addSpacecraft("Voyager 2");
SolarSystem.setPlanetsLandedOn(34);

// console.log("last modified", SolarSystem.last_modified);
// console.log("planets", SolarSystem.getPlanets());
console.log("active spacecraft", SolarSystem.getSpacecraft());

