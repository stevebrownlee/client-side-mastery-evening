import firebase from 'firebase/app';
import 'firebase/auth';

import util from '../../helpers/util';
import friendsData from '../../helpers/data/friendsData';

import './Friends.scss';

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const birfdayDiv = document.getElementById('birfday');
const newFriendDiv = document.getElementById('new-friend');
const saveNewFriendButton = document.getElementById('saveNewFriend');

const createNewFriend = (e) => {
  e.preventDefault();
  const newFriend = {
    name: nameInput.value,
    email: emailInput.value,
    uid: firebase.auth().currentUser.uid,
  };
  friendsData.addNewFriend(newFriend)
    .then(() => {
      nameInput.value = '';
      emailInput.value = '';
      birfdayDiv.classList.remove('hide');
      newFriendDiv.classList.add('hide');
      showList(firebase.auth().currentUser.uid); // eslint-disable-line no-use-before-define
    })
    .catch(err => console.error('no friends for you', err));
};

const newFriendButton = () => {
  birfdayDiv.classList.add('hide');
  newFriendDiv.classList.remove('hide');
  saveNewFriendButton.addEventListener('click', createNewFriend);
};

const showList = (uid) => {
  friendsData.getFriendsByUid(uid)
    .then((friends) => {
      let domString = '<div class="col-6 offset-3">';
      domString += '<h2>Friends</h2>';
      domString += '<button id="add-friend-button" class="btn btn-info">Add Friend</button>';
      domString += '<table class="table table-striped">';
      domString += '<thead>';
      domString += '<tr>';
      domString += '<th scope="col">Name</th>';
      domString += ' <th scope="col">Email</th>';
      domString += '</tr>';
      domString += '</thead>';
      domString += '<tbody>';
      friends.forEach((friend) => {
        domString += '<tr>';
        domString += `<td>${friend.name}</td>`;
        domString += `<td>${friend.email}</td>`;
        domString += '</tr>';
      });
      domString += '</tbody>';
      domString += '</table>';
      domString += '</div>';
      util.printToDom('friends', domString);
      document.getElementById('add-friend-button').addEventListener('click', newFriendButton);
    })
    .catch(err => console.error('no friends', err));
};

export default { showList };
