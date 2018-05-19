let nouns = [];
let descriptors = [];

const nounsJSON = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/nouns.json')
      .done(data => {
        resolve(data.nouns);
      })
      .fail(err => {
        reject(`Oi got an error!`, err);
      });
  });
};

const descriptorsJSON = () => {
  return new Promise((resolve, reject) => {
    $.get('../db/descriptors.json')
      .done(data => {
        resolve(data.descriptors);
      })
      .fail(err => {
        reject(`Oi got an error!`, err);
      });
  });
};

const getAllData = () => {
  return Promise.all([nounsJSON(), descriptorsJSON(),])
    .then(results => {
      nouns = results[0];
      descriptors = results[1];
      return Promise.resolve();
    })
    .catch(error => {
      console.error(error);
    });
};

const getNoun = () => {
  return nouns[Math.floor(Math.random() * nouns.length)].text;
};

const getDescriptors = () => {
  return descriptors[Math.floor(Math.random() * descriptors.length)].text;
};

const initializer = () => {
  getAllData();
};

module.exports = {
  initializer,
  getNoun,
  getDescriptors,
};
