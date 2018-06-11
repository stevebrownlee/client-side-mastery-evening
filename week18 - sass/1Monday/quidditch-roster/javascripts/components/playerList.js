const {createPlayerCard,} = require('./playerCard');

const createPlayerList = (players) => {
  const playerList = document.createElement('ul');
  playerList.classList.add('player-list');

  players.forEach((player) => {
    playerList.appendChild(createPlayerCard(player));
  });
  return playerList;
};

module.exports = {
  createPlayerList,
};
