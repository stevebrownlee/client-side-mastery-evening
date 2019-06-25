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

const postRequest = newOrder => new Promise((resolve, reject) => {
  axios
    .post(`${baseUrl}/orders.json`, newOrder)
    .then(res => resolve(res))
    .catch(err => reject(err));
});

const deleteRequest = orderId => new Promise((resolve, reject) => {
  axios.delete(`${baseUrl}/orders/${orderId}.json`)
    .then(res => resolve(res))
    .catch(err => reject(err));
});

const putRequest = (orderId, updatedOrder) => new Promise((resolve, reject) => {
  axios.put(`${baseUrl}/orders/${orderId}.json`, updatedOrder)
    .then(res => resolve(res))
    .catch(err => reject(err));
});

export default {
  deleteRequest,
  getRequest,
  getSingleRequest,
  postRequest,
  putRequest,
};
