import firebase from 'firebase/app';
import 'firebase/auth';

const authenticate = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

const getCurrentUid = () => firebase.auth().currentUser.uid;

const logoutUser = () => firebase.auth().signOut();

export default {
  authenticate,
  getCurrentUid,
  logoutUser,
};
