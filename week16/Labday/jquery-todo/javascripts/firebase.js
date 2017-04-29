var FbAPI = (function() {
  let todos = [];
  return {
    todoGetter: () => {
      return todos;
    },
    setTodos: (newList) => {
      todos = newList;
    },
    addSingleTodo: (newTodo) => {
      todos.push(newTodo);
    }
  };
})();
