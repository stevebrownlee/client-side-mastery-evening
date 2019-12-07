// import snackPositionsData from './snackPositionsData';
// import positionData from './positionData';
// import snackData from './snackData';
import machineData from './machineData';
import positionData from './positionData';
import snackPositionsData from './snackPositionsData';
import snackData from './snackData';

const getCompleteMachine = () => new Promise((resolve, reject) => {
  machineData.getMachines()
    .then((machine) => positionData.getPositionsByMachineId(machine.id))
    .then((positions) => {
      snackPositionsData.getSnackPositionsByMachineId(positions[0].machineId)
        .then((snackPositions) => {
          snackData.getSnacksByUid(positions[0].uid)
            .then((snacks) => {
              const newPositions = [];
              positions.forEach((position) => {
                const newPosition = { ...position };
                const getSnackPosition = snackPositions.find((x) => x.positionId === newPosition.id);
                if (getSnackPosition) {
                  const snack = snacks.find((x) => x.id === getSnackPosition.snackId);
                  newPosition.snack = snack;
                } else {
                  newPosition.snack = {};
                }
                newPositions.push(newPosition);
              });
              resolve(newPositions);
            });
        });
    })
    .catch((error) => reject(error));
});

const getSnacksWithPositions = (uid) => new Promise((resolve, reject) => {
  machineData.getMachines()
    .then((machine) => positionData.getPositionsByMachineId(machine.id))
    .then((positions) => {
      snackPositionsData.getSnackPositionsByMachineId(positions[0].machineId)
        .then((snackPositions) => {
          snackData.getSnacksByUid(uid)
            .then((snacks) => {
              const newSnacks = [];
              const availablePositions = [];
              positions.forEach((position) => {
                const newPosition = { ...position };
                const getSnackPosition = snackPositions.find((x) => x.positionId === newPosition.id);
                if (!getSnackPosition) {
                  availablePositions.push(newPosition);
                }
              });
              snacks.forEach((snack) => {
                const newSnack = { ...snack };
                const getSnackPosition = snackPositions.find((x) => x.snackId === newSnack.id);
                if (getSnackPosition) {
                  const position = positions.find((x) => x.id === getSnackPosition.positionId);
                  newSnack.snackPositionId = getSnackPosition.id;
                  newSnack.position = position;
                  newSnack.availablePositions = [];
                } else {
                  newSnack.position = {};
                  newSnack.snackPositionId = '';
                  newSnack.availablePositions = availablePositions;
                }
                newSnacks.push(newSnack);
              });
              resolve(newSnacks);
            });
        });
    })
    .catch((error) => reject(error));
});

const getAvailablePositions = () => new Promise((resolve, reject) => {
  machineData.getMachines().then((machine) => {
    positionData.getPositionsByMachineId(machine.id).then((positions) => {
      snackPositionsData.getSnackPositionsByMachineId(positions[0].machineId).then((snackPositions) => {
        const newPositions = [];
        positions.forEach((position) => {
          const newPosition = { ...position };
          const getSnackPosition = snackPositions.find((x) => x.positionId === newPosition.id);
          if (!getSnackPosition) {
            newPosition.machineId = machine.id;
            newPositions.push(newPosition);
          }
        });
        resolve(newPositions);
      });
    });
  })
    .catch((error) => reject(error));
});

export default { getCompleteMachine, getSnacksWithPositions, getAvailablePositions };