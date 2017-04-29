var FbAPI = (function(oldFirebase) {

  oldFirebase.writeDom = () => {
    let todos = FbAPI.todoGetter();
    console.log("write dom", todos);
    let doneString = "";
    let notDoneString = "";

    todos.forEach((todo) => {
      if (todo.isCompleted) {
        doneString += `<li>`;
        doneString += `<div class="col-xs-8">`;
        doneString += `<input class="checkboxStyle" id="${todo.id}" type="checkbox" checked>`;
        doneString += `<label class="inputLabel">${todo.task}</label>`;
        doneString += `<input type="text" class="inputTask">`;
        doneString += `</div>`;
        doneString += `<div class="col-xs-4">`;
        doneString += `<button class="btn btn-default col-xs-6 edit">Edit</button>`;
        doneString += `<button class="btn btn-danger col-xs-6 delete">Delete</button>`;
        doneString += `</div>`;
        doneString += `</li>`;
      } else {
        notDoneString += `<li>`;
        notDoneString += `<div class="col-xs-8">`;
        notDoneString += `<input class="checkboxStyle" id="${todo.id}" type="checkbox">`;
        notDoneString += `<label class="inputLabel">${todo.task}</label>`;
        notDoneString += `<input type="text" class="inputTask">`;
        notDoneString += `</div>`;
        notDoneString += `<div class="col-xs-4">`;
        notDoneString += `<button class="btn btn-default col-xs-6 edit">Edit</button>`;
        notDoneString += `<button class="btn btn-danger col-xs-6 delete">Delete</button> `;
        notDoneString += `</div>`;
        notDoneString += `</li>`;
      }
    });

    $('#completed-tasks').html(doneString);
    $('#incomplete-tasks').html(notDoneString);
  };

  return oldFirebase;

})(FbAPI || {});
