"use strict";

var printToDom = require('./dom');

var dinosaurs = [];



var dinoGetter = function(){
  $.ajax("./db/dinosaurs1.json").done(function(data1) {
	  dinosaurs = data1.dinosaurs1;
	  $.ajax("./db/dinosaurs2.json").done(function(data2) {
	    data2.dinosaurs2.forEach(function(dino){
	      dinosaurs.push(dino);
	    });
	    $.ajax("./db/dinosaurs3.json").done(function(data3) {
	      data3.dinosaurs3.forEach(function(dino){
	        dinosaurs.push(dino);
	      });
	      // console.log("dinos", dinosaurs);
				makeDinos();
	    }).fail(function(error3) {
	      console.log("there was an error in dino3", error3);
	    });
	  }).fail(function(error2) {
	    console.log("there was an error in dino2", error2);
	  });
	}).fail(function(error1) {
	  console.log("there was an error in dino1", error1);
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
