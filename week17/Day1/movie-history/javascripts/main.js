"use strict";

const apiKeys = require('./apiKeys');
const events = require('./events');

apiKeys.retrieveKeys();
events.init();



/* 1. Visualizing things on Hover - See next part for action on click */
$('#stars li').on('mouseover', function(){
    let onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
   
    // Now highlight all the stars that's not after the current hovered star
    $(this).parent().children('li.star').each(function(e){
      if (e < onStar) {
        $(this).addClass('hover');
      }
      else {
        $(this).removeClass('hover');
      }
    });
    
}).on('mouseout', function(){
    $(this).parent().children('li.star').each(function(e){
      $(this).removeClass('hover');
    });
});
  
  
 /* 2. Action to perform on click */
 $('#stars li').on('click', function(){
    let onStar = parseInt($(this).data('value'), 10); // The star currently selected
    let stars = $(this).parent().children('li.star');
    
    for (let i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('selected');
    }
    
    for (let i = 0; i < onStar; i++) {
      $(stars[i]).addClass('selected');
    }

        // JUST RESPONSE (Not needed)
    let ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
    let msg = "";
    if (ratingValue > 1) {
        msg = "Thanks! You rated this " + ratingValue + " stars.";
    } else {
        msg = "We will improve ourselves. You rated this " + ratingValue + " stars.";
    }
    
});