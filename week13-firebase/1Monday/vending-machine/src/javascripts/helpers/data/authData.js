import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';

import stock from '../../components/Stocker/stocker';

const authDiv = $('#auth');
const stockDiv = $('#stock');
const logoutNavbar = $('#navbar-button-logout');

const getCurrentUid = () => firebase.auth().currentUser.uid;

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      authDiv.addClass('hide');
      stock.buildTheStocker(getCurrentUid());
      stockDiv.removeClass('hide');
      logoutNavbar.removeClass('hide');
      stock.buildTheStocker(getCurrentUid());
      // stockDiv.addClass('show');
    } else {
      authDiv.removeClass('hide');
      stockDiv.addClass('hide');
      logoutNavbar.addClass('hide');
    }
  });
};

export default { checkLoginStatus, getCurrentUid };
