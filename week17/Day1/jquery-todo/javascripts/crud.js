var FbAPI = ((oldFirebase) => {

  oldFirebase.getTodos = (apiKeys) => {
    let items = [];
    return new Promise((resolve, reject) => {
      $.ajax(`${apiKeys.databaseURL}/items.json`)
      .done((data) => {
        let response = data;
        Object.keys(response).forEach((key) => {
          response[key].id = key;
          items.push(response[key]);
        });
        resolve(items);
      })
      .fail((error) => reject(error));
    });
  };

  oldFirebase.addTodo = (apiKeys, newTodo) => {
    console.log("apiKeys", apiKeys)
    return new Promise((resolve, reject) => {
      $.ajax({
        method: 'POST',
        url: `${apiKeys.databaseURL}/items.json`,
        data: JSON.stringify(newTodo),
      }).done((data) => resolve())
      .fail((error) => reject(error));
    });
  };

  oldFirebase.deleteTodo = (apiKeys, id) => {
    return new Promise((resolve, reject) => {
      $.ajax({
        method: 'DELETE',
        url: `${apiKeys.databaseURL}/items/${id}.json`
      }).done((data) => resolve())
      .fail((error) => reject(error));
    });
  };

  oldFirebase.editTodo = (apiKeys, id) => {
    return new Promise((resolve, reject) => {
      oldFirebase.deleteTodo(id);
      resolve();
    });
  };

  oldFirebase.checker = (apiKeys, id) => {
    return new Promise((resolve, reject) => {
      FbAPI.setChecked(id);
      resolve();
    });
  };

  
  return oldFirebase;

})(FbAPI || {});
