console.log("inside main");
"use strict";

var interval = null;
var counter = 1;
// var outputDiv = document.getElementById("output");

// root function in a prototype chain
function Plant() {
  this.height = 0;
};

Plant.prototype.increaseHeight = function(growth) {
  for (let i = 0; i < growth; i++) {
    this.height += 1;
    if (this.height%10 === 0) {
      this.branches++;
    };
  };
};

Plant.prototype.decreaseHeight = function(growth) {
  this.height -= growth;
};
// ***********************

function Tree() {
  this.branches = 0;
};

Tree.prototype = new Plant();

Tree.prototype.grow = function(amount) {
  this.increaseHeight(amount);
};

Tree.prototype.trim = function(amount) {
  this.decreaseHeight(amount);
  this.branches -= 1;
};
// **************************************
// Instances of Tree
var PearTree = new Tree();
var OakTree = new Tree();

interval = setInterval(function () {
  PearTree.grow(2);
  OakTree.grow(3);

  let output = `<p>Pear tree is now ${PearTree.height}cm tall and has ${PearTree.branches} branches<br>`;
  output += `Oak tree is now ${OakTree.height}cm tall and has ${OakTree.branches} branches</p>`;
  $("#output").append(output);

  if (counter % 10 === 0) {
    PearTree.trim(3);
    OakTree.trim(5);
    $("#output").innerHTML += `<p class="trim">Trim #${counter/10}</p>`;
  };

  counter++;

  if (counter >= 30) {
    clearInterval(interval);
    console.log("finished");
  };
}, 1000);