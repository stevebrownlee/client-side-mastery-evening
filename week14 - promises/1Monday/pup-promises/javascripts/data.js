const printToDom = require('./dom');

// const getAllPups = () => {
//   let pups = [];
//   return $.ajax('/db/pup1.json').done((data1) => {
//     pups = data1.pup1;
//     $.ajax('/db/pup2.json').done((data2) => {
//       pups = [...pups, ...data2.pup2,];
//       $.ajax('/db/pup3.json').done((data3) => {
//         pups = [...pups, ...data3.pup3,];
//         printToDom(pups);
//       }).fail((error3) => {
//         console.error('there was an error in pup3', error3);
//       });
//     }).fail((error2) => {
//       console.error(error2);
//     });
//   }).fail((error1) => {
//     console.error(error1);
//   });
// };

const firstPupJSON = () => {
  return new Promise((resolve, reject) => {
    $.ajax('/db/pup1.json')
      .done((data) => {
        resolve(data.pup1);
      })
      .fail((xhr, status, error) => {
        reject(error);
      });
  });
};

const secondPupJSON = () => {
  return new Promise((resolve, reject) => {
    $.ajax('/db/pup2.json')
      .done((data) => {
        resolve(data.pup2);
      })
      .fail((xhr, status, error) => {
        reject(error);
      });
  });
};

const thirdPupJSON = () => {
  return new Promise((resolve, reject) => {
    $.ajax('/db/pup3.json')
      .done((data) => {
        resolve(data.pup3);
      })
      .fail((xhr, status, error) => {
        reject(error);
      });
  });
};

// const getAllPups = () => {
//   let pups = [];
//   firstPupJSON().then((results) => {
//     pups = [...results,];
//     secondPupJSON().then((results2) => {
//       pups = [...pups, ...results2,];
//       thirdPupJSON().then((results3) => {
//         pups = [...pups, ...results3,];
//         printToDom(pups);
//       }).catch((error) => {
//         console.error('error', error);
//       });
//     });
//   });
// };

// const getAllPups = () => {
//   let pups = [];
//   return firstPupJSON().then((results) => {
//     pups = [...results,];
//     return secondPupJSON();
//   }).then((results2) => {
//     pups = [...pups, ...results2,];
//     return thirdPupJSON();
//   }).then((results3) => {
//     pups = [...pups, ...results3,];
//     // printToDom(data);
//     return Promise.resolve(pups);
//   }).catch((error) => {
//     console.error('error', error);
//   });
// };

const getAllPups = () => {
  return Promise.all([firstPupJSON(), secondPupJSON(), thirdPupJSON(),])
    .then((result) => {
      const pups = [...result[0], ...result[1], ...result[2],];
      return Promise.resolve(pups);
    }).catch((error) => {
      console.error(error);
    });
};

const initializer = () => {
  // get initial data
  getAllPups().then((data) => {
    printToDom(data);
  });
};

module.exports = {
  initializer,
};
