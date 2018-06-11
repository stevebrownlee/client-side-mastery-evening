// ********* FIREBASE CONFIG ********* //

let firebaseConfig = {};

const setConfig = () => {
  return new Promise ((resolve, reject) => {
    $.ajax('../db/apiKeys.json')
      .done((config) => {
        firebaseConfig = config.firebaseKeys;
        resolve(config.firebaseKeys);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

// ********* FIREBASE DATA RETRIEVAL ********* //

const getAllPlayersFromDb = () => {
  return new Promise((resolve, reject) => {
    $.get(`${firebaseConfig.databaseURL}/players.json`)
      .done((allPlayersObj) => {
        const allPlayers = [];
        if (allPlayersObj != null) {
          Object.keys(allPlayersObj).forEach((playerId) => {
            allPlayersObj[playerId].id = playerId;
            allPlayers.push(allPlayersObj[playerId]);
          });
        };
        resolve(allPlayers);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const getPlayersByTeam = (teamId) => {
  return new Promise((resolve, reject) => {
    $.get(`${firebaseConfig.databaseURL}/players.json?orderBy="team"&equalTo=${teamId}`)
      .done((playersOnDatTeamObj) => {
        const playersOnDatTeamArray = [];
        if (playersOnDatTeamObj != null) {
          Object.keys(playersOnDatTeamObj).forEach((playerId) => {
            playersOnDatTeamObj[playerId].id = playerId;
            playersOnDatTeamArray.push(playersOnDatTeamObj[playerId]);
          });
        };
        resolve(playersOnDatTeamArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const getAllTeamsFromDb = () => {
  return new Promise((resolve, reject) => {
    $.get(`${firebaseConfig.databaseURL}/teams.json`)
      .done((allTeamsObj) => {
        const allTeams = [];
        if (allTeamsObj != null) {
          Object.keys(allTeamsObj).forEach((teamId) => {
            allTeams.push(allTeamsObj[teamId]);
          });
        };
        resolve(allTeams);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const getAllPositionsFromDb = () => {
  return new Promise((resolve, reject) => {
    $.get(`${firebaseConfig.databaseURL}/positions.json`)
      .done((allPositionsObj) => {
        const allPositions = [];
        if (allPositionsObj != null) {
          Object.keys(allPositionsObj).forEach((positionId) => {
            allPositions.push(allPositionsObj[positionId]);
          });
        };
        resolve(allPositions);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const getFullPlayerInfo = (players) => {
  return Promise.all([getAllTeamsFromDb(), getAllPositionsFromDb(),])
    .then((dataArray) => {
      const playersFromDb = players;
      const teamsFromDb = dataArray[0];
      const positionsFromDb = dataArray[1];
      playersFromDb.forEach((player) => {
        teamsFromDb.forEach((team) => {
          if (player.team === team.teamId) {
            player.team = team.name;
          }
        });
        positionsFromDb.forEach((position) => {
          if (player.position === position.positionId) {
            player.position = position.name;
          }
        });
      });
      return Promise.resolve(playersFromDb);
    })
    .catch((error) => {
      console.error({error,});
    });
};

module.exports = {
  setConfig,
  getAllPlayersFromDb,
  getPlayersByTeam,
  getAllTeamsFromDb,
  getFullPlayerInfo,
};
