var FbAPI = ((oldFirebase) => {

  oldFirebase.registerUser = (credentials) => {
    return new Promise((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(credentials.email, credentials.password)
      .then((authData) =>{
        resolve(authData);
      })
      .catch((error)=>{
        reject(error);
      });
    });
  };

  oldFirebase.loginUser = (credentials) => {
    return new Promise((resolve, reject) => {
      firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
      .then((authData) =>{
        resolve(authData);
      })
      .catch((error)=>{
        reject(error);
      });
    });
  };

  oldFirebase.credentialsCurrentUser = () => {
    return firebase.auth().currentUser;
  };

  oldFirebase.logoutUser = (email, password) => {
     firebase.auth().signOut();
  };

  
  return oldFirebase;

})(FbAPI || {});
