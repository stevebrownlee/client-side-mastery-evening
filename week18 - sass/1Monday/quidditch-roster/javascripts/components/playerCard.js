const createPlayerCard = (player) => {
  const playerCard = document.createElement('li');
  playerCard.classList.add(`player-team-${(player.team).toLowerCase()}`);

  if (player.subsitute) {
    playerCard.classList.add(`player-card-subsitute`);
  }

  const imageHolder = document.createElement('div');
  imageHolder.classList.add('img-holder');

  const playerImage = document.createElement('img');
  playerImage.classList.add('player-img');
  playerImage.setAttribute('src', player.picture);

  const playerName = document.createElement('h3');
  playerName.classList.add('player-name');
  playerName.textContent = player.name;

  const playerPosition = document.createElement('h5');
  playerPosition.classList.add(`player-position-${(player.position).toLowerCase()}`);
  playerPosition.textContent = player.position;

  imageHolder.appendChild(playerImage);
  playerCard.appendChild(imageHolder);
  playerCard.appendChild(playerName);
  playerCard.appendChild(playerPosition);

  return playerCard;
};

module.exports = {
  createPlayerCard,
};
