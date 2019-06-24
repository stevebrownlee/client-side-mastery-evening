import firebase from 'firebase';
import firebaseConfig from '../apiKeys.json';

const firebaseApp = () => {
  // check if firebase app exists.  If not create one.
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig.firebaseKeys);
  }
};

export default firebaseApp;