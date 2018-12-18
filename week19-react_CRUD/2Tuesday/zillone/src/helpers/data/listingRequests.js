import axios from 'axios';
import constants from '../../constants';

const firebaseUrl = constants.firebaseConfig.databaseURL;

const getRequest = () => new Promise((resolve, reject) => {
  axios
    .get(`${firebaseUrl}/listings.json`)
    .then((res) => {
      const listings = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((key) => {
          res.data[key].id = key;
          listings.push(res.data[key]);
        });
      }
      resolve(listings);
    })
    .catch((err) => {
      reject(err);
    });
});

const getSingleListing = listingId => axios.get(`${firebaseUrl}/listings/${listingId}.json`);

const deleteListing = listingId => axios.delete(`${firebaseUrl}/listings/${listingId}.json`);

const postRequest = listing => axios.post(`${firebaseUrl}/listings.json`, listing);

const updateRequest = (listingId, listing) => axios.put(`${firebaseUrl}/listings/${listingId}.json`, listing);

export default {
  getRequest,
  getSingleListing,
  deleteListing,
  postRequest,
  updateRequest,
};
