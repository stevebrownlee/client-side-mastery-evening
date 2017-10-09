"use strict";

var printToDom = require('./dom');

var dinosaurs = [];


// #### OLD WAY ####
// var dinoGetter = function(){
//   $.ajax("./db/dinosaurs1.json").done(function(data1) {
// 	  dinosaurs = data1.dinosaurs1;
// 	  $.ajax("./db/dinosaurs2.json").done(function(data2) {
// 	    data2.dinosaurs2.forEach(function(dino){
// 	      dinosaurs.push(dino);
// 	    });
// 	    $.ajax("./db/dinosaurs3.json").done(function(data3) {
// 	      data3.dinosaurs3.forEach(function(dino){
// 	        dinosaurs.push(dino);
// 	      });
// 	      // console.log("dinos", dinosaurs);
// 				makeDinos();
// 	    }).fail(function(error3) {
// 	      console.log("there was an error in dino3", error3);
// 	    });
// 	  }).fail(function(error2) {
// 	    console.log("there was an error in dino2", error2);
// 	  });
// 	}).fail(function(error1) {
// 	  console.log("there was an error in dino1", error1);
// 	});
// };




  var firstDinosaurJSON = function() {
    return new Promise(function(resolve, reject){
      $.ajax("./db/dinosaurs1.json").done(function(data) {
        resolve(data.dinosaurs1);
      }).fail(function(xhr, status, error) {
        reject(error);
      });
    });
  };

  var secondDinosaurJSON = function() {
    return new Promise(function(resolve, reject){
      $.ajax("./db/dinosaurs2.json").done(function(data2) {
        resolve(data2.dinosaurs2);
      }).fail(function(xhr, status, error) {
        reject(error);
      });
    });
  };

  var thirdDinosaurJSON = function() {
    return new Promise(function(resolve, reject){
      $.ajax("./db/dinosaurs3.json").done(function(data3) {
        resolve(data3.dinosaurs3);
      }).fail(function(xhr, status, error) {
        reject(error);
      });
    });
  };


  // one possible way to resolve the promises - not great because still looks like pyramid
  var dinoGetter = function(){
	  firstDinosaurJSON().then(function(results){
	    // console.log("results", results);
	    results.forEach(function(dino){
	      dinosaurs.push(dino);
	    });	    
	    secondDinosaurJSON().then(function(results2){
	      // console.log("results2", results2);
	      results2.forEach(function(dino){
	      	dinosaurs.push(dino);
	    	});
	      thirdDinosaurJSON().then(function(results3){
	        // console.log("results3", results3);
	        results3.forEach(function(dino){
	      		dinosaurs.push(dino);
	    		});
	    		makeDinos();
	      });
	    });
	  });
	};

var makeDinos = function(){
	dinosaurs.forEach(function(dino){
		printToDom(dino);
	});
};

var initializer = () => {
	dinoGetter();
};

const getDinosaurs = () => {
	return dinosaurs;
};

module.exports = {initializer, getDinosaurs};
