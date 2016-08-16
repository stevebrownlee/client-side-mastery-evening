var Sedan = (function(){
	var color = "black";
	var type = "sedan";
	//console.log("inside Sedan color", color);
	return{
		manufactureDate: new Date(),
		getColor: function(){
			return color;
		}, 
		setColor: function(newColor){
			color = newColor
		},
		getType: function() {
      return type;
    }
	}
})();
// console.log("outside sedan color", Sedan.color); //prints undefined because color is private variable

/* 
	see manufacture date
*/
// console.log("Sedan Manufactured on: ", Sedan.manufactureDate);

/*
  Now, code that uses this module can call methods, and access
  properties that are in the public interface, but cannot change
  any private variables.
*/
// console.log("Sedan color: ", Sedan.getColor()); // black

/*
 This adds the green color property to the public interface, but the
 existing, internal type property remains unchanged.
*/
// Sedan.setColor("green");
// console.log("Sedan color: ", Sedan.getColor());
// console.log("main Sedan", Sedan.color);

/*
	can set color using setColor property
*/
// console.log("Sedan new color", Sedan.setColor("purple")); //undefined because its a setter
// console.log("sedan new color gotten", Sedan.getColor() );

/*
	We can use the getType method to see the type property but because
	we don't have a setType method we can't change the type property
*/
// console.log('original type', Sedan.getType());
// Sedan.type = "minivan";
// console.log('New type', Sedan.getType());  //still returns sedan
