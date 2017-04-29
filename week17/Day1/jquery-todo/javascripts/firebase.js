var FbAPI = (function() {
  // let todos = [];
  // return {
  //   todoGetter: () => {
  //     return todos;
  //   },
  //   setTodos: (newList) => {
  //     todos = newList;
  //   },
  //   addSingleTodo: (newTodo) => {
  //     todos.push(newTodo);
  //   },
  //   setChecked: (id) => {
  //     const position = id.split("item")[1];
  //     todos[position].isCompleted = !todos[position].isCompleted;
  //   },
  // duhlete: (id) => {
  //     const position = id.split("item")[1];
  //     todos.splice(position, 1);
  //   }
  // };
  return {
    firebaseCredentials: function() {
      return new Promise((resolve, reject) => {
        $.ajax("apiKeys.json")
        .done((data) => {
          resolve(data);
        })
        .fail((error) => reject(error));
      });
    }
  };
})();
