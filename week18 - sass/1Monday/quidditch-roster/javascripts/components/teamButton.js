const createTeamButton = (team, teamButtonEvent) => {
  const teamButton = document.createElement('button');
  teamButton.classList.add('team-button');
  teamButton.dataset.teamId = team.teamId;
  teamButton.textContent = team.name;
  teamButton.addEventListener('click', teamButtonEvent);
  return teamButton;
};

module.exports = {
  createTeamButton,
};
