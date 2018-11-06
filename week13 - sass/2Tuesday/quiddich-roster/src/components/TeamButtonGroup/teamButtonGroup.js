import createTeamButton from '../TeamButton/teamButton';

import './teamButtonGroup.scss';

const createTeamButtonGroup = (teams, teamButtonEvent) => {
  let domString = '<div class="team-button-group">';
  teams.forEach((team) => {
    domString += createTeamButton(team, teamButtonEvent);
  });
  domString += '</div>';

  return domString;
};

export default createTeamButtonGroup;
