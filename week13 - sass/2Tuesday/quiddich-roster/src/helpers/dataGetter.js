import axios from 'axios';

// const getAllPlayersFromDb = () => axios.get('http://localhost:3003/players');
// const getPlayersByTeam = () => axios.get('http://localhost:3003/players');
const getAllTeamsFromDb = () => axios.get('http://localhost:3003/teams');
// const getAllPositionsFromDb = () => axios.get('http://localhost:3003/positions');
// const getFullPlayerInfo = players => Promise.all([getAllTeamsFromDb(), getAllPositionsFromDb()])
//   .then((dataArray) => {
//     const playersFromDb = players;
//     const teamsFromDb = dataArray[0];
//     const positionsFromDb = dataArray[1];
//     playersFromDb.forEach((player) => {
//       teamsFromDb.forEach((team) => {
//         if (player.team === team.teamId) {
//           player.team = team.name;
//         }
//       });
//       positionsFromDb.forEach((position) => {
//         if (player.position === position.positionId) {
//           player.position = position.name;
//         }
//       });
//     });
//     return Promise.resolve(playersFromDb);
//   })
//   .catch((error) => {
//     console.error({ error });
//   });

export default {
  // getAllPlayersFromDb,
  // getPlayersByTeam,
  getAllTeamsFromDb,
  // getFullPlayerInfo,
};
