import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';

const authDiv = $('#auth');
const stockDiv = $('#stock');
const logoutNavbar = $('#navbar-button-logout');

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      stockDiv.removeClass('hide');
      logoutNavbar.removeClass('hide');
    } else {
      authDiv.removeClass('hide');
      stockDiv.addClass('hide');
      logoutNavbar.addClass('hide');
    }
  });
};

export default { checkLoginStatus };
