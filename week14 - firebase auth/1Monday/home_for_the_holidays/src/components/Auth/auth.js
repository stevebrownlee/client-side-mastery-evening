import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';

const loginButton = () => {
  const domString = `
    <button id="googleAuth" class="btn btn-danger">Login</button>
  `;
  $('#auth').html(domString);
  $('#googleAuth').on('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider);
  });
};

export default loginButton;
