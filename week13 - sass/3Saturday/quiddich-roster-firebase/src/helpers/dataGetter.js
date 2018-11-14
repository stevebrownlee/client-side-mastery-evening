import axios from 'axios';
import apiKeys from '../../db/apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllPlayersFromDb = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/players.json`)
    .then((result) => {
      const allPlayersObj = result.data;
      const allPlayers = [];
      if (allPlayersObj != null) {
        Object.keys(allPlayersObj).forEach((playerId) => {
          const newPlayer = allPlayersObj[playerId];
          newPlayer.id = playerId;
          allPlayers.push(newPlayer);
        });
      }
      resolve(allPlayers);
    })
    .catch((err) => {
      reject(err);
    });
});

const getPlayersByTeam = teamId => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/players.json?orderBy="teamId"&equalTo="${teamId}"`)
    .then((result) => {
      // const allPlayers = data.data;
      // const correctPlayers = allPlayers.filter(x => x.teamId === teamId);
      // resolve(correctPlayers);
      const playersOnDatTeamObj = result.data;
      const playersOnDatTeamArray = [];
      if (playersOnDatTeamObj != null) {
        Object.keys(playersOnDatTeamObj).forEach((playerId) => {
          playersOnDatTeamObj[playerId].id = playerId;
          playersOnDatTeamArray.push(playersOnDatTeamObj[playerId]);
        });
      }
      resolve(playersOnDatTeamArray);
    })
    .catch((err) => {
      reject(err);
    });
});

const getAllTeamsFromDb = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/teams.json`)
    .then((result) => {
      const allTeamsObj = result.data;
      const allTeams = [];
      if (allTeamsObj != null) {
        Object.keys(allTeamsObj).forEach((teamId) => {
          const newTeam = allTeamsObj[teamId];
          newTeam.id = teamId;
          allTeams.push(newTeam);
        });
      }
      resolve(allTeams);
    })
    .catch((err) => {
      reject(err);
    });
});

const getAllPositionsFromDb = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/positions.json`)
    .then((result) => {
      const allPositionsObj = result.data;
      const allPositions = [];
      if (allPositionsObj != null) {
        Object.keys(allPositionsObj).forEach((positionId) => {
          const newPosition = allPositionsObj[positionId];
          newPosition.id = positionId;
          allPositions.push(newPosition);
        });
      }
      resolve(allPositions);
    })
    .catch((err) => {
      reject(err);
    });
});

const getFullPlayerInfo = players => Promise.all([getAllTeamsFromDb(), getAllPositionsFromDb()])
  .then((dataArray) => {
    const playersFromDb = players;
    const teamsFromDb = dataArray[0];
    const positionsFromDb = dataArray[1];
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
  getPlayersByTeam,
  getAllTeamsFromDb,
  getFullPlayerInfo,
};
