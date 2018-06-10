const createPlayerCard = (player) => {
  const playerCard = document.createElement('li');
  playerCard.classList.add(`player-team-${(player.team).toLowerCase()}`);
  playerCard.classList.add(`player-card`);

  if (player.subsitute) {
    playerCard.classList.add(`player-card-subsitute`);
  }

  const playerImage = document.createElement('img');
  playerImage.classList.add('player-img');
  playerImage.setAttribute('src', player.picture);

  const playerName = document.createElement('h3');
  playerName.classList.add('player-name');
  playerName.textContent = player.name;

  const playerPosition = document.createElement('h5');
  playerPosition.classList.add(`player-position-${(player.position).toLowerCase()}`);
  playerPosition.textContent = player.position;

  playerCard.appendChild(playerImage);
  playerCard.appendChild(playerName);
  playerCard.appendChild(playerPosition);

  return playerCard;
};

module.exports = {
  createPlayerCard,
};
