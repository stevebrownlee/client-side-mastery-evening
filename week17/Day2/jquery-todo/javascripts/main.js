"use strict";

let apiKeys = {};
let todoItems = [];

function putTodoInDOM(){
  FbAPI.getTodos(apiKeys).then(function(items){
      todoItems = items;
      $('#completed-tasks').html("");      
      $('#incomplete-tasks').html("");  
      items.forEach(function(item){
        if(item.isCompleted === true){
          let newListItem = `<li data-completed="${item.isCompleted}">`;
          newListItem+=`<div class="col-xs-8" data-fbid="${item.id}">`;
          newListItem+='<input class="checkboxStyle" type="checkbox" checked>';
          newListItem+=`<label class="inputLabel">${item.task}</label>`;
          newListItem+='<input type="text" class="inputTask">';
          newListItem+='</div>';
          newListItem+='</li>';
          $('#completed-tasks').append(newListItem);          
        } else {
          let newListItem = `<li data-completed="${item.isCompleted}">`;
          newListItem+=`<div class="col-xs-8" data-fbid="${item.id}">`;
          newListItem+='<input class="checkboxStyle" type="checkbox">';
          newListItem+=`<label class="inputLabel">${item.task}</label>`;
          newListItem+='<input type="text" class="inputTask">';
          newListItem+='</div>';
          newListItem+='<div class="col-xs-4">';
          newListItem+=`<button class="btn btn-default col-xs-6 edit" data-fbid="${item.id}">Edit</button>`;
          newListItem+=`<button class="btn btn-danger col-xs-6 delete" data-fbid="${item.id}">Delete</button>`;
          newListItem+='</div>';
          newListItem+='</li>';
          $('#incomplete-tasks').append(newListItem);        
        }
      });
  });
}


$(document).ready(function(){
  FbAPI.firebaseCredentials().then(function(keys){
    apiKeys = keys;
    firebase.initializeApp(apiKeys);
    putTodoInDOM();  
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
        putTodoInDOM();  
    });
  });

  //DELETE an item
  $('ul').on('click','.delete',function(){
    let itemId = $(this).data("fbid");
    FbAPI.deleteTodo(apiKeys, itemId).then(function(){
      putTodoInDOM();  
    });
  });

  //EDIT TASK
  $('ul').on('click', '.edit',function(){
    console.log("you clicked me", this);
    var parent = $(this).closest("li");
    if (!parent.hasClass('editMode')) {
      parent.addClass('editMode');
    }else if (parent.hasClass('editMode')) {  
      let itemId = $(this).data("fbid");
      let newItem = {
        "task" : parent.find(".inputTask").val(),
        "isCompleted": false
      };
      FbAPI.editTodo(apiKeys, itemId, newItem).then(function(response){
        parent.removeClass('editMode');
        putTodoInDOM();  
      });
    }

  });

  //COMPLETE TASK
  $('ul').on('change','input[type="checkbox"]', function(){
    let updatedIsCompleted = $(this).closest("li").data("completed");
    let task = $(this).siblings(".inputLabel").html();
    let itemId = $(this) .parent().data("fbid");
    let newItem = {
      "task" : task,
      "isCompleted": !updatedIsCompleted
    };
    FbAPI.editTodo(apiKeys, itemId, newItem).then(function(response){
      putTodoInDOM();  
    });
  });
});




