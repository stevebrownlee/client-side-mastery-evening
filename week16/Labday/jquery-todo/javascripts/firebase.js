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
    },
    setChecked: (id) => {
      const position = id.split("item")[1];
      todos[position].isCompleted = !todos[position].isCompleted;
    }
  };
})();
