var FbAPI = ((oldFirebase) => {
  
  oldFirebase.getUser = (apiKeys, uid) => {
      return new Promise((resolve, reject) => {
        $.ajax({
          method: 'GET',
          url: `${apiKeys.databaseURL}/users.json?orderBy="uid"&equalTo="${uid}"`
        }).then((response) =>  { 
            let users = [];
            Object.keys(response).forEach((key) => {
              response[key].id=key;
              users.push(response[key]);
            });
            resolve(users[0]);
        }, (errorResponse) => {
          reject(errorResponse);
        });
        
      });
  };

    oldFirebase.addUser = (apiKeys, newUser) => {
      return new Promise((resolve, reject) => {
        $.ajax({
          method: 'POST',
          url: `${apiKeys.databaseURL}/users.json`,
          data: JSON.stringify(newUser),
          dataType: 'json'
        }).then((response) =>  { 
            resolve(response);
        }, (errorResponse) => {
          reject(errorResponse);
        });
        
      });
  };
  
  return oldFirebase;

})(FbAPI || {});
