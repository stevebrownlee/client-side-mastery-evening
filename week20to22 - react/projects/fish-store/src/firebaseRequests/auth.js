import firebase from 'firebase';

const logoutUser = () => {
  return firebase.auth().signOut();
};

const registerUser = user => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(user.email, user.password);
};

const loginUser = user => {
  return firebase.auth().signInWithEmailAndPassword(user.email, user.password);
};

export default { logoutUser, registerUser, loginUser };
