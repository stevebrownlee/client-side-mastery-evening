import Rebase from 're-base';
import firebase from 'firebase';
import constant from './constants'

const firebaseApp = firebase.initializeApp(constant.firebaseConfig);

const base = Rebase.createClass(firebaseApp.database());

// this is a named export
export {firebaseApp};

// this is a default export

export default base;
