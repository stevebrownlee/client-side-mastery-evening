"use strict";

let apiKeys = {};
let todoItems = [];

function putTodoInDOM(newTodo){
      //generate and add new list item
      let newListItem = '<li>';
      newListItem+='<div class="col-xs-8">';
      newListItem+='<input class="checkboxStyle" type="checkbox">';
      newListItem+=`<label class="inputLabel">${newTodo}</label>`;
      newListItem+='<input type="text" class="inputTask">';
      newListItem+='</div>';
      newListItem+='<div class="col-xs-4">';
      newListItem+='<button class="btn btn-default col-xs-6 edit">Edit</button>';
      newListItem+='<button class="btn btn-danger col-xs-6 delete">Delete</button> ';
      newListItem+='</div>';
      newListItem+='</li>';
      //apend to list
      $('ul#incomplete-tasks').append(newListItem);
}


$(document).ready(function(){
  FbAPI.firebaseCredentials().then(function(keys){
    apiKeys = keys;
    firebase.initializeApp(apiKeys);
    FbAPI.getTodos();
  });
  
  //watches input - on keyup event enables button if input has content.
    $('#add-todo-text').keyup(function(){
        $('#add-todo-button').prop('disabled', this.value === "" ? true : false);     
    });
  //ADD ITEM
  $('#add-todo-button').on('click',function(){
    


    //get input's value
     let $newTask = $('#add-todo-text').val();

     putTodoInDOM($newTask);

      $('.inputTask').val($newTask);
      //empty input value and disable submit button
      $('#add-todo-text').val('');
      $('#add-todo-button').prop('disabled',true);
    countTask();
  });//end button click function

  //EDIT TASK
  $('ul').on('click', '.edit',function(){
    console.log("you clicked me", this);
    //get parent
    var parent = $(this).closest("li");
    //check parent class
    if (!parent.hasClass('editMode')) {
      parent.addClass('editMode');
    }else if (parent.hasClass('editMode')) {  
      //grab value entered in input and set as label
      var editTask = parent.find(".inputTask").val();
      var editLabel = parent.find('label');
      editLabel.html(editTask);
      //remove edit class
      parent.removeClass('editMode');
    }

  });

  //COMPLETE TASK
  $('ul').on('change','input[type="checkbox"]', function(){
    //get grand parent
    let grandpa = $(this).closest("li");
    let currentList = grandpa.parent().attr('id');
    var parent = $(this).parent();
    //check which ul the li is under
    if (currentList == 'incomplete-tasks') {
      $('#completed-tasks').append(grandpa); 
    }else if(currentList == 'completed-tasks'){
      $('#incomplete-tasks').append(grandpa);
    }
    countTask();
  });
  
  //DELETE TASK
  $('ul').on('click','.delete',function(){
    $(this).closest('li').remove();
    countTask();
  });//end delete function

  //TASK COUNTER
  function countTask(){
    var remainTask = $('#incomplete-tasks li').length;
    $('#counter').hide().fadeIn(300).html(remainTask);
  }
  countTask();

});//end dom ready




