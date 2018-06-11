const firebaseApi = require('./firebaseApi');
const dom = require('./dom');

// ********* Initialize Application ********* //
firebaseApi.setConfig().then((config) => {
  firebase.initializeApp(config);
  getAndPrintTeamButtonGroup();
  getAndPrintAllPlayers();
});

// ********* Populate Dom ********* //
const getAndPrintAllPlayers = () => {
  firebaseApi.getAllPlayersFromDb()
    .then((players) => {
      firebaseApi.getFullPlayerInfo(players)
        .then((allPlayersArray) => {
          dom.printPlayerList(allPlayersArray);
        })
        .catch((error) => {
          console.error('Error in getting full player info', error);
        });
    })
    .catch((error) => {
      console.error('Error in getting players', error);
    });
};

const getAndPrintTeamButtonGroup = () => {
  firebaseApi.getAllTeamsFromDb()
    .then((teams) => {
      dom.printTeamButtonGroup(teams, teamButtonEvent);
    })
    .catch((error) => {
      console.error('Error in getting teams', error);
    });
};

// ********* Register an event to be passed down to the button ********* //
const teamButtonEvent = (e) => {
  const teamId = $(e.target).closest('button').data('teamId');
  firebaseApi.getPlayersByTeam(teamId)
    .then((players) => {
      firebaseApi.getFullPlayerInfo(players)
        .then((filteredPlayerArray) => {
          dom.printPlayerList(filteredPlayerArray);
        })
        .catch((error) => {
          console.error('Error in getting full player info', error);
        });
    })
    .catch((error) => {
      console.error('Error in getting filtered players', error);
    });
};
