let firebaseKey = '';

const setKey = (key) => {
  firebaseKey = key;
};

const getKey = () => {
  return firebaseKey;
};

module.exports = {
  setKey,
  getKey,
};
