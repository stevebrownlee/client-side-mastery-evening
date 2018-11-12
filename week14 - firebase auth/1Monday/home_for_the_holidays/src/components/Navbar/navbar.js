import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';

import './navbar.scss';

const navbarEvents = () => {
  $('.nav-item').on('click', (e) => {
    if (e.target.id === 'navbar-button-holidays') {
      $('#auth').hide();
      $('#guests').hide();
      $('#holidays').show();
    } else if (e.target.id === 'navbar-button-guests') {
      $('#auth').hide();
      $('#guests').show();
      $('#holidays').hide();
    } else if (e.target.id === 'navbar-button-logout') {
      firebase.auth().signOut().then(() => {
        $('#auth').show();
        $('#guests').hide();
        $('#holidays').hide();
      }).catch((error) => {
        // An error happened.
        console.error(error);
      });
    } else {
      $('#auth').show();
      $('#guests').hide();
      $('#holidays').hide();
    }
  });
};

const createNavar = () => {
  const domString = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Home for the Holidays</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a id="navbar-button-auth" class="nav-link">Authentication</a>
          </li>
          <li class="nav-item">
            <a id="navbar-button-holidays" class="nav-link">Holidays</a>
          </li>
          <li class="nav-item">
            <a id="navbar-button-guests" class="nav-link">Guests</a>
          </li>
          <li class="nav-item">
          <a id="navbar-button-logout" class="nav-link">Logout</a>
        </li>
        </ul>
      </div>
    </nav>
  `;
  $('#navbar').html(domString);
  navbarEvents();
};

export default createNavar;
