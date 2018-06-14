import axios from 'axios';

const getRequest = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`https://realtor-test.firebaseio.com/listings.json`)
      .then(res => {
        const listings = [];
        if (res.data !== null) {
          Object.keys(res.data).forEach(fbKey => {
            res.data[fbKey].id = fbKey;
            listings.push(res.data[fbKey]);
          });
        }
        resolve(listings);
      })
      .catch(err => {
        reject(err);
      });
  });
};

const postRequest = listing => {
  return new Promise((resolve, reject) => {
    axios
      .post(`https://realtor-test.firebaseio.com/listings.json`, listing)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
};

export default { getRequest, postRequest };
