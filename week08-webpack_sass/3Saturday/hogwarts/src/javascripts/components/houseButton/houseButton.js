// import $ from 'jquery';

// import dataGetter from '../../helpers/dataGetter';
// import createPlayerList from '../PlayerList/playerList';

import './houseButton.scss';

const createHouseButton = (house) => {
  const domString = `
    <button id="${house.id}" class="house-button house-button-${house.name.toLowerCase()}">
      <div>${house.name}</div>
      <img src="${house.picture}">
    </button>
  `;
  return domString;
};

// const buttonEventFunction = (e) => {
//   const houseId = e.target.closest('button').id;
//   dataGetter
//     .getPlayersByHouse(houseId)
//     .then((players) => {
//       dataGetter
//         .getFullPlayerInfo(players)
//         .then((filteredPlayerArray) => {
//           $('#main-container').html(createPlayerList(filteredPlayerArray));
//         });
//     })
//     .catch((error) => {
//       console.error('Error in getting filtered players', error);
//     });
// };

export default { createHouseButton };
