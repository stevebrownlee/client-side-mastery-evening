var Sedan = (function(originalSedan) {
  var max_occupancy = 6;
  var current_occupancy = 0;

  originalSedan.setOccupancy = function(occupancy) {
    if (occupancy <= max_occupancy) {
      current_occupancy = occupancy;
    } else {
      throw "Cannot exceed maximum occupancy of " + max_occupancy;
    }
  };

  originalSedan.getOccupancy = function() {
    return current_occupancy;
  };

  return originalSedan;

})(Sedan);

console.log("augmented sedan: ", Sedan);
// console.log(Sedan.setOccupancy(9));