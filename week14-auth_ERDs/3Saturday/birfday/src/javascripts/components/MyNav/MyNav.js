// import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';
import './MyNav.scss';

const authDiv = document.getElementById('auth');
const birfdayLink = document.getElementById('birfday');

const navbarEvents = () => {
  const navLinks = document.getElementsByClassName('nav-link');
  for (let i = 0; i < navLinks.length; i += 1) {
    navLinks[i].addEventListener('click', (e) => {
      if (e.target.id === 'navbar-button-logout') {
        firebase.auth().signOut().then(() => {
          authDiv.classList.add('hide');
          birfdayLink.classList.remove('hide');
        }).catch((err) => {
          console.error('you still logged in', err);
        });
      } else if (e.target.id === 'navbar-button-birfday') {
        authDiv.classList.add('hide');
        birfdayLink.classList.remove('hide');
      } else {
        // click authentication
        authDiv.classList.remove('hide');
        birfdayLink.classList.add('hide');
      }
    });
  }
};

export default { navbarEvents };
