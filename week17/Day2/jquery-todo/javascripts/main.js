"use strict";

let apiKeys = {};
let todoItems = [];
let uid = "";
let username = "";

function putTodoInDOM(){
  FbAPI.getTodos(apiKeys, uid).then(function(items){
      todoItems = items;
      $('#completed-tasks').html("");      
      $('#incomplete-tasks').html("");  
      items.forEach(function(item){
        if(item.isCompleted === true){
          let newListItem = `<li data-completed="${item.isCompleted}">`;
          newListItem+=`<div class="col-xs-8" data-fbid="${item.id}">`;
          newListItem+='<input class="checkboxStyle" type="checkbox" checked>';
          newListItem+=`<label class="inputLabel">${item.task}</label>`;
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

function createLogoutButton(){
    FbAPI.getUser(apiKeys, uid).then(function(user){
      $('#logout-container').html("");
      username=user.username;
      let logoutButton = `<button class="btn btn-danger" id="logoutButton"> LOGOUT ${username}</button> `;
      $('#logout-container').append(logoutButton);
    })    
}

$(document).ready(function(){
  FbAPI.firebaseCredentials().then(function(keys){
    apiKeys = keys;
    firebase.initializeApp(apiKeys);
  });

  //watches input - on keyup event enables button if input has content.
    $('#add-todo-text').keyup(function(){
        $('#add-todo-button').prop('disabled', this.value === "" ? true : false);     
    });

  // ADD a new item
  $('#add-todo-button').on('click',function(){
    let newItem = {
      "task" : $('#add-todo-text').val(),
      "isCompleted": false,
      "uid":uid
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
    var parent = $(this).closest("li");
    if (!parent.hasClass('editMode')) {
      parent.addClass('editMode');
    }else if (parent.hasClass('editMode')) {  
      let itemId = $(this).data("fbid");
      let newItem = {
        "task" : parent.find(".inputTask").val(),
        "isCompleted": false,
        "uid": uid
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
    let itemId = $(this).parent().data("fbid");
    let newItem = {
      "task" : task,
      "isCompleted": !updatedIsCompleted,
      "uid": uid
    };
    FbAPI.editTodo(apiKeys, itemId, newItem).then(function(response){
      putTodoInDOM();  
    });
  });

  $('#registerButton').on('click', function(){
    let email = $('#inputEmail').val();
    let password = $('#inputPassword').val();
    let username = $('#inputUsername').val();
    let user = {
      email : email,
      password : password
    }
    FbAPI.registerUser(user).then(function(response){
      let newUser = {
        username: username,
        uid:response.uid
      }
      return FbAPI.addUser(apiKeys, newUser);
    }).then(function(response){
        return FbAPI.loginUser(user);
    }).then(function(response){
      uid = response.uid;
      putTodoInDOM();  
      $('#login-container').addClass("hide");
      $('#todo-container').removeClass("hide");
    });
  });

  $('#loginButton').on('click', function(){
    let email = $('#inputEmail').val();
    let password = $('#inputPassword').val();
    let user = {
      email : email,
      password : password
    }
    FbAPI.loginUser(user).then(function(response){
      uid = response.uid;
      createLogoutButton();
      putTodoInDOM();  
      $('#login-container').addClass("hide");
      $('#todo-container').removeClass("hide");
    });
  });

$('#logout-container').on('click', '#logoutButton', function(){
    let todoItems = [];
    let uid = "";
    let username = "";
    FbAPI.logoutUser();
    $('#login-container').removeClass("hide");
    $('#todo-container').addClass("hide");
  });
});




