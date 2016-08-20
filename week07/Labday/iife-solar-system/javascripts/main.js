console.log("last modified", SolarSystem.last_modified);

SolarSystem.addSpacecraft("New Horizon");
SolarSystem.addSpacecraft("Voyager 1");
SolarSystem.addSpacecraft("Voyager 2");
SolarSystem.setPlanetsLandedOn(34);

console.log("last modified", SolarSystem.last_modified);
console.log("planets", SolarSystem.getPlanets());
console.log("active spacecraft", SolarSystem.getSpacecraft());

