var FbAPI = (function(oldFirebase) {

  oldFirebase.getTodos = () => {
    let items = [];
    return new Promise((resolve, reject) => {
      $.ajax("./database/seeder.json")
      .done((data) => {
        let response = data.items;
        Object.keys(response).forEach((key) => {
          response[key].id = key;
          items.push(response[key]);
        });
        FbAPI.setTodos(items);
        resolve();
      })
      .fail((error) => reject(error));
    });
  };


  oldFirebase.addTodo = function(newTodo) {
    return new Promise((resolve, reject) => {
      newTodo.id = `item${FbAPI.todoGetter().length}`;
      FbAPI.addSingleTodo(newTodo);
      resolve();
    });
  };

  oldFirebase.deleteTodo = function() {};

  oldFirebase.editTodo = function() {};

  return oldFirebase;

})(FbAPI || {});
