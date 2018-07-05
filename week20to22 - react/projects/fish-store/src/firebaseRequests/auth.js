import firebase from 'firebase';

const isAuthenticated = () => {
  let authStatus = false;
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      authStatus = true;
    }
    return authStatus;
  });
};

const registerUser = user => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(user.email, user.password);
};

const loginUser = user => {
  return firebase.auth().signInWithEmailAndPassword(user.email, user.password);
};

export default { isAuthenticated, registerUser, loginUser };
