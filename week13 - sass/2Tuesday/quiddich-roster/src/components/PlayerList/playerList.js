import createPlayerCard from '../PlayerCard/playerCard';

import './playerList.scss';

const createPlayerList = (players) => {
  let domString = '<ul>';
  players.forEach((player) => {
    domString += createPlayerCard(player);
  });
  domString += '</ul>';
  return domString;
};

export default createPlayerList;
