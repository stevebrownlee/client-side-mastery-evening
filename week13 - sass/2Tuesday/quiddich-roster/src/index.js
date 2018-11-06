import $ from 'jquery';
import 'bootstrap';

import loadNavbar from './components/Navbar/navbar';
import dataGetter from './helpers/dataGetter';
import createTeamButtonGroup from './components/TeamButtonGroup/teamButtonGroup';

import './index.scss';

const teamButtonEvent = 'nope event';

const getAndPrintTeamButtonGroup = () => {
  dataGetter.getAllTeamsFromDb()
    .then((data) => {
      $('#button-container').html(createTeamButtonGroup(data.data, teamButtonEvent));
    })
    .catch((error) => {
      console.error('Error in getting teams', error);
    });
};

const initializeApp = () => {
  loadNavbar();
  getAndPrintTeamButtonGroup();
  // getAndPrintAllPlayers();
};

initializeApp();
