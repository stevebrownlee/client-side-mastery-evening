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

export default { getCompleteMachine };
