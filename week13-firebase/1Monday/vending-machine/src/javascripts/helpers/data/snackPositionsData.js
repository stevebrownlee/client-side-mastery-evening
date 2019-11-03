import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getSnackPositionsByMachineId = (machineId) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/snackPositions.json?orderBy="machineId"&equalTo="${machineId}"`).then((response) => {
    const positions = [];
    Object.keys(response.data).forEach((fbId) => {
      response.data[fbId].id = fbId;
      positions.push(response.data[fbId]);
    });
    resolve(positions);
  }).catch((error) => reject(error));
});

const deleteSnackPosition = (snackPositionId) => axios.delete(`${baseUrl}/snackPositions/${snackPositionId}.json`);

export default { getSnackPositionsByMachineId, deleteSnackPosition };
