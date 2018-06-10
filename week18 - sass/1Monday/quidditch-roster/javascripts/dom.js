const {createPlayerList,} = require('./components/playerList');
const {createTeamButtonGroup,} = require('./components/teamButtonGroup');

const printPlayerList = (players) => {
  $('#main-container').html(createPlayerList(players));
};

const printTeamButtonGroup = (teams, teamsEvent) => {
  $('#button-container').html(createTeamButtonGroup(teams, teamsEvent));
};

module.exports = {
  printPlayerList,
  printTeamButtonGroup,
};
