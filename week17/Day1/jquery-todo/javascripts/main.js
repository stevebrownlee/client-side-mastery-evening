$(document).ready(function() {

  $('#new-item').click(() => {
    $('.list-container').addClass("hide");
    $('.new-container').removeClass("hide");

  });

  $('#list-items').click(() => {
    $('.new-container').addClass("hide");
    $('.list-container').removeClass("hide");
  });

  //Get todos
  FbAPI.getTodos().then(() => {
 		FbAPI.writeDom();
 		countTask();
  }).catch((error) => {
    console.log("error in getTodos", error);
  });

  //add todo
	$('#add-todo-button').click(() => {
    let newTodo = {
			isCompleted: false, 
			task: $('#add-todo-text').val()
		};
		FbAPI.addTodo(newTodo).then(() => {
			$('#add-todo-text').val("");
			$('.new-container').addClass("hide");
    	$('.list-container').removeClass("hide");
    	FbAPI.writeDom();
    	countTask();
	  }).catch((error) => {
	    console.log("error in addTodos", error);
	  });
  });

  //delete todos
	$('.main-container').on('click', '.delete', (event) => {
		FbAPI.deleteTodo(event.currentTarget.id).then(() => {
    	FbAPI.writeDom();
    	countTask();
	  }).catch((error) => {
	    console.log("error in deleteTodo", error);
	  });
	});

  //edit todos - really hard to fake, going to delete and add a new one
	$('.main-container').on('click', '.edit', (event) => {
		let editText = $(event.target).closest('.col-xs-4').siblings('.col-xs-8').find('.task').html();
		FbAPI.editTodo(event.currentTarget.id).then(() => {
			$('.list-container').addClass("hide");
    	$('.new-container').removeClass("hide");
    	$('#add-todo-text').val(editText);
	  }).catch((error) => {
	    console.log("error in deleteTodo", error);
	  });
	});

  //complete todos
  $('.main-container').on('click', 'input[type="checkbox"]', (event) => {
  	FbAPI.checker(event.currentTarget.id).then(() => {
    	FbAPI.writeDom();
    	countTask();
	  }).catch((error) => {
	    console.log("error in checker", error);
	  });
  });

   let countTask = () => {
    var remainTask = $('#incomplete-tasks li').length;
    $('#counter').hide().fadeIn(300).html(remainTask);
  };
});