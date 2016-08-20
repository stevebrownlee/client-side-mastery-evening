var Sedan = (function(sedan) {
  var max_occupancy = 6;
  var current_occupancy = 0;

  sedan.setOccupancy = function(occupancy) {
    if (occupancy <= max_occupancy) {
      current_occupancy = occupancy;
    } else {
      throw "Cannot exceed maximum occupancy of " + max_occupancy;
    }
  };

  sedan.getOccupancy = function() {
    return current_occupancy;
  };

  return sedan;

})(Sedan);