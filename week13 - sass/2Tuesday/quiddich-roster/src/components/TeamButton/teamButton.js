import './teamButton.scss';

const createTeamButton = (team, teamButtonEvent) => {
  const domString = `
    <button id="${team.id}" class="team-button-${team.name.toLowerCase()}">
      <div>${team.name}</div>
      <img src="${team.picture}">
    </button>
  `;

  console.log('teamButtonEvent', teamButtonEvent);
  // teamButton.addEventListener('click', teamButtonEvent);
  return domString;
};

export default createTeamButton;
