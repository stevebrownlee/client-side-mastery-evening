var FbAPI = ((oldFirebase) => {

  oldFirebase.getTodos = (apiKeys) => {
    let items = [];
    return new Promise((resolve, reject) => {
      let uid=FbAPI.credentialsCurrentUser().uid;
      $.ajax(`${apiKeys.databaseURL}/items.json?orderBy="uid"&equalTo="${uid}"`)
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
    newTodo.uid = FbAPI.credentialsCurrentUser().uid;
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

  oldFirebase.editTodo = (apiKeys, updatedItem, itemId) => {
    updatedItem.uid = FbAPI.credentialsCurrentUser().uid;
    return new Promise((resolve, reject) => {
      $.ajax({
        method: 'PUT',
        url: `${apiKeys.databaseURL}/items/${itemId}.json`,
        data: JSON.stringify(updatedItem),
      }).done((data) => resolve())
      .fail((error) => reject(error));
    });
  };
  
  return oldFirebase;

})(FbAPI || {});
