var FbAPI = (function() {
  let todos = [];
  return {
    todoGetter: function() {
      return todos;
    }
  };
})();
