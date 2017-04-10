$(document).ready(function() {
  var dinosaurs = [];

  $.ajax("./db/dinosaurs.json").done(function(data) {
    dinosaurs = data.dinosaurs;
    makeDom(dinosaurs);
  }).fail(function(error) {
    console.log("there was an error", error);
  });

  function makeDom(dinosaurs) {
    var buildString = "";
    for (var i = 0; i < dinosaurs.length; i++) {
      buildString += `<person class='person'>`;
      buildString += `<header> ${dinosaurs[i].type}</header>`;
      buildString += `<section><p class="person-bio">${dinosaurs[i].bio}</p> <img src="${dinosaurs[i].img}"></section> `;
      buildString += `<footer>${dinosaurs[i].info}</footer> `;
      buildString += `</person>`;
    }
    $("#dinosaurs").append(buildString);
  }

  $("body").on("click", ".person", function(e) {
    $(".person").removeClass("dottedBorder");
    $(this).addClass("dottedBorder");
    $("#textBox").val("");
    $("#textBox").focus();
  });

  $("#textBox").on("keyup", changeBio);

  function changeBio(e) {
    var selectedCard = $(".dottedBorder");
    if (selectedCard !== undefined) {
      var userText = $("#textBox").value;
      var bio = $(".dottedBorder").find(".person-bio").html($('#textBox').val());
    }

    if (e.code === "Enter") {
      $("#textBox").val("");
    }
  }
});
