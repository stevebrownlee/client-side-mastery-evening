import firebase from 'firebase/app';
import 'firebase/auth';

import birthday from '../../components/Birthday/Birthday';
import friends from '../../components/Friends/Friends';

const authDiv = document.getElementById('auth');
const birfdayDiv = document.getElementById('birfday');
const birfdayNavbar = document.getElementById('navbar-button-birfday');
const authNavbar = document.getElementById('navbar-button-auth');
const logoutNavbar = document.getElementById('navbar-button-logout');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.classList.add('hide');
      birfdayDiv.classList.remove('hide');
      birfdayNavbar.classList.remove('hide');
      authNavbar.classList.add('hide');
      logoutNavbar.classList.remove('hide');
      birthday.showBirthday(user.uid);
      friends.getFriends(user.uid);
    } else {
      authDiv.classList.remove('hide');
      birfdayDiv.classList.add('hide');
      birfdayNavbar.classList.add('hide');
      authNavbar.classList.remove('hide');
      logoutNavbar.classList.add('hide');
    }
  });
};

const getCurrentUid = () => firebase.auth().currentUser.uid;

export default { checkLoginStatus, getCurrentUid };
