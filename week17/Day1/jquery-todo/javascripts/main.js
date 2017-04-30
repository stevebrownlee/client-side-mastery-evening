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

  //Get todos
  FbAPI.firebaseCredentials().then(function(keys){
    console.log("keys", keys);
    apiKeys = keys;
    firebase.initializeApp(apiKeys);
    FbAPI.writeDom(apiKeys);
    countTask(); 
  });

  //add todo
	$('#add-todo-button').click(() => {
    let newTodo = {
			isCompleted: false, 
			task: $('#add-todo-text').val()
		};
    if(editId.length > 0){
      FbAPI.editTodo(apiKeys, newTodo, editId).then(() => {
        $('#add-todo-text').val("");
        editId = "";
        $('.new-container').addClass("hide");
        $('.list-container').removeClass("hide");
        FbAPI.writeDom(apiKeys);
        countTask();
      }).catch((error) => {
        console.log("error in addTodos", error);
      }); 
    } else {
      FbAPI.addTodo(apiKeys, newTodo).then(() => {
        $('#add-todo-text').val("");
        $('.new-container').addClass("hide");
        $('.list-container').removeClass("hide");
        FbAPI.writeDom(apiKeys);
        countTask();
      }).catch((error) => {
        console.log("error in addTodos", error);
      });      
    }
  });

  //delete todos
	$('.main-container').on('click', '.delete', (event) => {
		FbAPI.deleteTodo(apiKeys, event.currentTarget.id).then(() => {
    	FbAPI.writeDom(apiKeys);
    	countTask();
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
  	FbAPI.checker(event.currentTarget.id).then(() => {
    	FbAPI.writeDom(apiKeys);
    	countTask();
	  }).catch((error) => {
	    console.log("error in checker", error);
	  });
  });

   let countTask = () => {
    let remainTask = $('#incomplete-tasks li').length;
    $('#counter').hide().fadeIn(300).html(remainTask);
  };
});