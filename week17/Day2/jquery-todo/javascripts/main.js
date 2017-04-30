$(document).ready(function() {
  let apiKeys;
  let editId = "";

  $('#new-item').click(() => {
    $('.list-container').addClass("hide");
    $('.new-container').removeClass("hide");

  });

  $('#list-items').click(() => {
    $('.new-container').addClass("hide");
    $('.list-container').removeClass("hide");
  });

  //initialize firebase
  FbAPI.firebaseCredentials().then((keys) => {
    apiKeys = keys;
    firebase.initializeApp(apiKeys);
  });

  //add todo
  $('#add-todo-button').click(() => {
    let newTodo = {
      isCompleted: false,
      task: $('#add-todo-text').val()
    };
    if (editId.length > 0) {
      FbAPI.editTodo(apiKeys, newTodo, editId).then(() => {
        $('#add-todo-text').val("");
        editId = "";
        $('.new-container').addClass("hide");
        $('.list-container').removeClass("hide");
        FbAPI.writeDom(apiKeys);
      }).catch((error) => {
        console.log("error in addTodos", error);
      });
    } else {
      FbAPI.addTodo(apiKeys, newTodo).then(() => {
        $('#add-todo-text').val("");
        $('.new-container').addClass("hide");
        $('.list-container').removeClass("hide");
        FbAPI.writeDom(apiKeys);
      }).catch((error) => {
        console.log("error in addTodos", error);
      });
    }
  });

  //delete todos
  $('.main-container').on('click', '.delete', (event) => {
    FbAPI.deleteTodo(apiKeys, event.currentTarget.id).then(() => {
      FbAPI.writeDom(apiKeys);
    }).catch((error) => {
      console.log("error in deleteTodo", error);
    });
  });

  //edit todos - really hard to fake, going to delete and add a new one
  $('.main-container').on('click', '.edit', (event) => {
    let editText = $(event.target).closest('.col-xs-4').siblings('.col-xs-8').find('.task').html();
    editId = event.currentTarget.id;
    $('.list-container').addClass("hide");
    $('.new-container').removeClass("hide");
    $('#add-todo-text').val(editText);
  });

  //complete todos
  $('.main-container').on('click', 'input[type="checkbox"]', (event) => {
    let modifiedTodo = {
      isCompleted: event.target.checked,
      task: $(event.target).siblings('.task').html()
    };
    FbAPI.editTodo(apiKeys, modifiedTodo, event.target.id).then(() => {
      FbAPI.writeDom(apiKeys);
    }).catch((error) => {
      console.log("error in addTodos", error);
    });
  });

  let clearLogin = () => {
    let email = $('#inputEmail').val("");
    let password = $('#inputPassword').val("");
    let username = $('#inputUsername').val("");
  };

  //register and login new user
  $('#registerButton').on('click', () => {
    let email = $('#inputEmail').val();
    let password = $('#inputPassword').val();
    let username = $('#inputUsername').val();
    let user = {
      "email": email,
      "password": password
    };
    FbAPI.registerUser(user).then((response) => {
      let newUser = {
        username: username,
        uid: response.uid
      };
      return FbAPI.addUser(apiKeys, newUser);
    }).then((response) => {
      return FbAPI.loginUser(user);
    }).then((response)  => {
      clearLogin();
      FbAPI.writeDom(apiKeys);
      $('#login-container').addClass("hide");
      $('.main-container').removeClass("hide");
    });
  });

  let createLogoutButton = () => {
    let uid=FbAPI.credentialsCurrentUser().uid;
    FbAPI.getUser(apiKeys, uid).then((user) => {
      $('#logout-container').html("");
      let logoutButton = `<button class="btn btn-danger" id="logoutButton"> LOGOUT ${user.username}</button> `;
      $('#logout-container').append(logoutButton);
    });  
  };

  //login
  $('#loginButton').on('click', () => {
    let email = $('#inputEmail').val();
    let password = $('#inputPassword').val();
    let user = {
      email: email,
      password: password
    };
    FbAPI.loginUser(user).then((response) => {
      clearLogin();
      createLogoutButton();
      FbAPI.writeDom(apiKeys);
      $('#login-container').addClass("hide");
      $('.main-container').removeClass("hide");
    });
  });

  //logout
  $('#logout-container').on('click', '#logoutButton', () => {
    clearLogin();
    FbAPI.logoutUser();
    $('#login-container').removeClass("hide");
    $('.main-container').addClass("hide");
  });
});
