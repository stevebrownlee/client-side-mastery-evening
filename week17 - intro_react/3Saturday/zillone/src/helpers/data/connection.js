import firebase from 'firebase/app';
import 'firebase/auth';
import constants from '../../constants';

const firebaseApp = () => {
  // check if firebase app exists.  If not create one.
  if (!firebase.apps.length) {
    firebase.initializeApp(constants.firebaseConfig);
  }
};

export default firebaseApp;
