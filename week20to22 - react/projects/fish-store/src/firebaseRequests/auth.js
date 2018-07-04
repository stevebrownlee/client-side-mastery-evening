import firebase from 'firebase';

const isAuthenticated = () => {
  return firebase.auth().onAuthStateChanged(user => user);
};

const registerUser = (user) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(user.email, user.password);
};

const loginUser = (user) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password);
};

export default { isAuthenticated, registerUser, loginUser };
