const {createTeamButton,} = require('./teamButton');

const createTeamButtonGroup = (teams, teamButtonEvent) => {
  const teamButtonGroup = document.createElement('div');
  teamButtonGroup.classList.add('team-button-group');
  console.log(teams);
  teams.forEach((team) => {
    const teamButton = createTeamButton(team, teamButtonEvent);
    teamButtonGroup.appendChild(teamButton);
  });

  return teamButtonGroup;
};

module.exports = {
  createTeamButtonGroup,
};
