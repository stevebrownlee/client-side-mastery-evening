$(document).ready(function() {
  var dinosaurs = [];

  function makeDOM(){
    var DOMstring = "";
    for(var i =0; i<dinosaurs.length; i++){
      DOMstring += `<div>`;
      DOMstring += `<h1>${dinosaurs[i].type}</h1>`;
      DOMstring += `</div>`;
    }
    $("#promises").append(DOMstring);
  }

  // OLD WAY - VERY MESSY PYRAMID OF DOOM
  // $.ajax("./db/dinosaurs1.json").done(function(data1) {
  //   dinosaurs = data1.dinosaurs1;
  //   $.ajax("./db/dinosaurs2.json").done(function(data2) {
  //     data2.dinosaurs2.forEach(function(dino){
  //       dinosaurs.push(dino);
  //     })
  //     $.ajax("./db/dinosaurs3.json").done(function(data3) {
  //       data3.dinosaurs3.forEach(function(dino){
  //         dinosaurs.push(dino);
  //       });
  //       console.log("dinos", dinosaurs);
  //     }).fail(function(error3) {
  //       console.log("there was an error in dino3", error3);
  //     });
  //   }).fail(function(error2) {
  //     console.log("there was an error in dino2", error2);
  //   });
  // }).fail(function(error1) {
  //   console.log("there was an error in dino1", error1);
  // });

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
  // firstDinosaurJSON().then(function(results){
  //   console.log("results", results);
  //   secondDinosaurJSON().then(function(results2){
  //     console.log("results2", results2);
  //     thirdDinosaurJSON().then(function(results3){
  //       console.log("results3", results3);
  //     })
  //   })
  // })


  //much better solution - chained promises.  however we don't have access to results or results2 in the final .then.
  // firstDinosaurJSON().then(function(results){
  //   console.log("results", results);
  //   return secondDinosaurJSON();
  // }).then(function(results2){
  //   console.log("results2", results2);
  //   return thirdDinosaurJSON();
  // }).then(function(results3){
  //   // console.log("results2 in promise3", results2);//undefined
  //   console.log("results3", results3);
  // })



  Promise.all([firstDinosaurJSON(), secondDinosaurJSON(), thirdDinosaurJSON()]).then(function(resultz){ 
    console.log("ALL PROMISE", resultz);
    resultz.forEach(function(dinos){
      dinos.forEach(function(dino){
        dinosaurs.push(dino);
      });
    });
    console.log(dinosaurs);
    makeDOM();
  }).catch(function(error){ 
    console.log(error);
  });


});
