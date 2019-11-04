import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getPositionsByMachineId = (machineId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/positions.json?orderBy="machineId"&equalTo="${machineId}"`).then((response) => {
    const positions = [];
    Object.keys(response.data).forEach((fbId) => {
      response.data[fbId].id = fbId;
      positions.push(response.data[fbId]);
    });

    const sortedPositions = positions.sort((a, b) => a.position.localeCompare(b.position, 'en', { numeric: true }));
    resolve(sortedPositions);
  }).catch((error) => reject(error));
});

export default { getPositionsByMachineId };
