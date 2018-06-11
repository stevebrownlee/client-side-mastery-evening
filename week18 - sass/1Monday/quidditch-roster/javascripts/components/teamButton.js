const createTeamButton = (team, teamButtonEvent) => {
  const teamButton = document.createElement('button');
  teamButton.classList.add(`team-button-${(team.name).toLowerCase()}`);
  teamButton.dataset.teamId = team.teamId;

  const teamImage = document.createElement('img');
  teamImage.setAttribute('src', team.picture);
  teamButton.appendChild(teamImage);

  const teamName = document.createElement('div');
  teamName.textContent = team.name;

  teamButton.appendChild(teamName);
  teamButton.appendChild(teamImage);

  teamButton.addEventListener('click', teamButtonEvent);
  return teamButton;
};

module.exports = {
  createTeamButton,
};
