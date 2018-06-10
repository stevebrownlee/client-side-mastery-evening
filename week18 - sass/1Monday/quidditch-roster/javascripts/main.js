const firebaseApi = require('./firebaseApi');
const dom = require('./dom');

firebaseApi.setConfig().then((config) => {
  firebase.initializeApp(config);
  getAndPrintTeamButtonGroup();
  getAndPrintAllPlayers();
});

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

const teamButtonEvent = (e) => {
  const teamId = $(e.target).data('teamId');
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
