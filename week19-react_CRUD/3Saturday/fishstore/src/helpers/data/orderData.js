import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getRequest = uid => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/orders.json?orderBy="uid"&equalTo="${uid}"`)
    .then((res) => {
      const orders = [];
      if (res.data !== null) {
        Object.keys(res.data).forEach((fbKey) => {
          res.data[fbKey].id = fbKey;
          orders.push(res.data[fbKey]);
        });
      }
      resolve(orders);
    })
    .catch(err => reject(err));
});

const getSingleRequest = id => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/orders/${id}.json`)
    .then(res => resolve(res.data))
    .catch(err => reject(err));
});

const postRequest = newOrder => axios.post(`${baseUrl}/orders.json`, newOrder);

const deleteRequest = orderId => axios.delete(`${baseUrl}/orders/${orderId}.json`);

const putRequest = (orderId, updatedOrder) => axios.put(`${baseUrl}/orders/${orderId}.json`, updatedOrder);

export default {
  deleteRequest,
  getRequest,
  getSingleRequest,
  postRequest,
  putRequest,
};
