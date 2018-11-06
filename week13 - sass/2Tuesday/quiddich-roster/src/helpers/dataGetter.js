import axios from 'axios';

const getAllPlayersFromDb = () => axios.get('http://localhost:3003/players');

// const getPlayersByTeam = teamId => new Promise((resolve, reject) => {
//   $.get(`${firebaseConfig.databaseURL}/players.json?orderBy="team"&equalTo=${teamId}`)
//     .done((playersOnDatTeamObj) => {
//       const playersOnDatTeamArray = [];
//       if (playersOnDatTeamObj != null) {
//         Object.keys(playersOnDatTeamObj).forEach((playerId) => {
//           playersOnDatTeamObj[playerId].id = playerId;
//           playersOnDatTeamArray.push(playersOnDatTeamObj[playerId]);
//         });
//       }
//       resolve(playersOnDatTeamArray);
//     })
//     .fail((error) => {
//       reject(error);
//     });
// });

const getAllTeamsFromDb = () => axios.get('http://localhost:3003/teams');

const getAllPositionsFromDb = () => axios.get('http://localhost:3003/positions');

const getFullPlayerInfo = players => Promise.all([getAllTeamsFromDb(), getAllPositionsFromDb()])
  .then((dataArray) => {
    const playersFromDb = players;
    const teamsFromDb = dataArray[0].data;
    const positionsFromDb = dataArray[1].data;
    const newPlayers = [];
    playersFromDb.forEach((player) => {
      const newPlayer = player;
      teamsFromDb.forEach((team) => {
        if (player.teamId === team.id) {
          newPlayer.team = team.name;
        }
      });
      positionsFromDb.forEach((position) => {
        if (player.positionId === position.id) {
          newPlayer.position = position.name;
        }
      });
      newPlayers.push(newPlayer);
    });
    return Promise.resolve(newPlayers);
  })
  .catch((error) => {
    console.error({ error });
  });

export default {
  getAllPlayersFromDb,
  // getPlayersByTeam,
  getAllTeamsFromDb,
  getFullPlayerInfo,
};
