"use strict";

let apiKeys = {};
let todoItems = [];

function putTodoInDOM(items){
  items.forEach(function(item){
    //generate and add new list item
    let newListItem = '<li>';
    newListItem+='<div class="col-xs-8">';
    newListItem+='<input class="checkboxStyle" type="checkbox">';
    newListItem+=`<label class="inputLabel">${item.task}</label>`;
    newListItem+='<input type="text" class="inputTask">';
    newListItem+='</div>';
    newListItem+='<div class="col-xs-4">';
    newListItem+=`<button class="btn btn-default col-xs-6 edit" data-fbid="${item.id}">Edit</button>`;
    newListItem+=`<button class="btn btn-danger col-xs-6 delete" data-fbid="${item.id}">Delete</button>`;
    newListItem+='</div>';
    newListItem+='</li>';
    if(item.isCompleted === true){
      $('#completed-tasks').append(newListItem);          
    } else {
      $('#incomplete-tasks').append(newListItem);        
    }
  });

}


$(document).ready(function(){
  //GET initial items from DB on page load
  FbAPI.firebaseCredentials().then(function(keys){
    apiKeys = keys;
    firebase.initializeApp(apiKeys);
    return FbAPI.getTodos(apiKeys);
  }).then(function(items){
    todoItems = items;
    putTodoInDOM(todoItems);
  });

  //watches input - on keyup event enables button if input has content.
    $('#add-todo-text').keyup(function(){
        $('#add-todo-button').prop('disabled', this.value === "" ? true : false);     
    });

  // ADD a new item
  $('#add-todo-button').on('click',function(){
    let newItem = {
      "task" : $('#add-todo-text').val(),
      "isCompleted": false
     };
     FbAPI.addTodo(apiKeys,newItem).then(function(){
      $('#add-todo-text').val('');
      $('#add-todo-button').prop('disabled',true);
        return FbAPI.getTodos(apiKeys);
     }).then(function(items){
      todoItems = items;
      $('#completed-tasks').html("");      
      $('#incomplete-tasks').html("");  
      putTodoInDOM(todoItems);
    });
  });

  //DELETE an item
  $('ul').on('click','.delete',function(){
    let itemId = $(this).data("fbid");
    FbAPI.deleteTodo(apiKeys, itemId).then(function(){
     return FbAPI.getTodos(apiKeys);
     }).then(function(items){
      console.log("NEW LOAD");
      todoItems = items;
      $('#completed-tasks').html("");      
      $('#incomplete-tasks').html("");  
      putTodoInDOM(todoItems);
    });
  });//end delete function



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
    // countTask();
  });
  

  //TASK COUNTER
  // function countTask(){
  //   var remainTask = $('#incomplete-tasks li').length;
  //   $('#counter').hide().fadeIn(300).html(remainTask);
  // }
  // countTask();

});//end dom ready




