(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
 //  var dinoGetter = function(){
	//   firstDinosaurJSON().then(function(results){
	//     // console.log("results", results);
	//     results.forEach(function(dino){
	//       dinosaurs.push(dino);
	//     });	    
	//     secondDinosaurJSON().then(function(results2){
	//       // console.log("results2", results2);
	//       results2.forEach(function(dino){
	//       	dinosaurs.push(dino);
	//     	});
	//       thirdDinosaurJSON().then(function(results3){
	//         // console.log("results3", results3);
	//         results3.forEach(function(dino){
	//       		dinosaurs.push(dino);
	//     		});
	//     		makeDinos();
	//       }).catch(function(err){
	//       	console.log("error", err);
	//       });
	//     });
	//   });
	// };


  //much better solution - chained promises.  however we don't have access to results or results2 in the final .then.
 //  var dinoGetter = function(){
	//   firstDinosaurJSON().then(function(results){
	//     // console.log("results", results);
	//     results.forEach(function(dino){
	// 	    dinosaurs.push(dino);
	// 	  });	
	//     return secondDinosaurJSON();
	//   }).then(function(results2){
	//     // console.log("results2", results2);
	//     results2.forEach(function(dino){
	// 	    dinosaurs.push(dino);
	// 	  });	
	//     return thirdDinosaurJSON();
	//   }).then(function(results3){
	//     // console.log("results2 in promise3", results2);//undefined
	//     // console.log("results3", results3);
	//     results3.forEach(function(dino){
	// 	    dinosaurs.push(dino);
	// 	  });	
	//  		makeDinos();
	//   }).catch(function(err){
 //    	console.log("error", err);
	//   });
	// };


var dinoGetter = function(){
	Promise.all([firstDinosaurJSON(), secondDinosaurJSON(), thirdDinosaurJSON()]).then(function(resultz){ 
    console.log("ALL PROMISE", resultz);
    resultz.forEach(function(dinos){
      dinos.forEach(function(dino){
        dinosaurs.push(dino);
      });
    });
    // console.log(dinosaurs);
    makeDinos();
  }).catch(function(error){ 
    console.log(error);
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

var getDinosaurs = () => {
	return dinosaurs;
};

module.exports = {initializer, getDinosaurs};

},{"./dom":2}],2:[function(require,module,exports){
"use strict";

var outputDiv = $('#dinos');

var domString = function(dinosaur) {
	var domString = '';
      domString += `<div>`;
      domString +=   `<h1>${dinosaur.type}</h1>`;
      domString += `</div>`;
	printToDom(domString);
};


var printToDom = function(strang) {
	outputDiv.append(strang);
};

module.exports = domString;
},{}],3:[function(require,module,exports){
"use strict";

var data = require('./data');

$(document).ready(function() {
	data.initializer();

});
},{"./data":1}]},{},[3]);
