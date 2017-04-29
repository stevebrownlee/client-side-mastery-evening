$(document).ready(function() {

  $('#new-item').click(() => {
    $('.list-container').addClass("hide");
    $('.new-container').removeClass("hide");

  });

  $('#list-items').click(() => {
    $('.new-container').addClass("hide");
    $('.list-container').removeClass("hide");
  });

  function writeDom(todos) {

  }

  //Get todos
  FbAPI.getTodos().then(() => {
 		FbAPI.writeDom();
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
	  }).catch((error) => {
	    console.log("error in addTodos", error);
	  });
  });

  //delete todos
	$('.main-container').on('click', 'delete', (event) => {
		FbAPI.checker(event.currentTarget.id).then(() => {
    	FbAPI.writeDom();
	  }).catch((error) => {
	    console.log("error in addTodos", error);
	  });
	});
  //edit todos

  //complete todos
  $('.main-container').on('click', 'input[type="checkbox"]', (event) => {
  	FbAPI.checker(event.currentTarget.id).then(() => {
    	FbAPI.writeDom();
	  }).catch((error) => {
	    console.log("error in addTodos", error);
	  });
  });
});


