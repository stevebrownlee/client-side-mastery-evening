import firebase from 'firebase/app';
import 'firebase/auth';

const authDiv = document.getElementById('auth');
const birfdayDiv = document.getElementById('birfday');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.error(user);
      authDiv.classList.add('hide');
      birfdayDiv.classList.remove('hide');
    //   $('#navbar-button-auth').hide();
    //   $('#navbar-button-holidays').show();
    //   $('#navbar-button-friends').show();
    //   $('#navbar-button-logout').show();
    } else {
      authDiv.classList.remove('hide');
      birfdayDiv.classList.add('hide');
    //   $('#navbar-button-auth').show();
    //   $('#navbar-button-holidays').hide();
    //   $('#navbar-button-friends').hide();
    //   $('#navbar-button-logout').hide();
    }
  });
};

export default { checkLoginStatus };
