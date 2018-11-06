import $ from 'jquery';
import 'bootstrap';

import loadNavbar from './components/Navbar/navbar';
import dataGetter from './helpers/dataGetter';
import createTeamButtonGroup from './components/TeamButtonGroup/teamButtonGroup';
import createPlayerList from './components/PlayerList/playerList';

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

// const getAndPrintAllPlayers = () => {
//   dataGetter.getAllPlayersFromDb()
//     .then((data) => {
//       $('#main-container').html(createPlayerList(data.data));
//     })
//     .catch((error) => {
//       console.error('Error in getting teams', error);
//     });
// };


const getAndPrintAllPlayers = () => {
  dataGetter.getAllPlayersFromDb()
    .then((players) => {
      dataGetter.getFullPlayerInfo(players.data)
        .then((allPlayersArray) => {
          $('#main-container').html(createPlayerList(allPlayersArray));
        });
    })
    .catch((error) => {
      console.error('Error in getting players', error);
    });
};

const initializeApp = () => {
  loadNavbar();
  getAndPrintTeamButtonGroup();
  getAndPrintAllPlayers();
};

initializeApp();
