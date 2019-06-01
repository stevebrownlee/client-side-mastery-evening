import firebase from 'firebase/app';
import 'firebase/auth';

import util from '../../helpers/util';
import SMASH from '../../helpers/smash';

import friendsData from '../../helpers/data/friendsData';
import birfdayData from '../../helpers/data/birfdayData';
import rsvpData from '../../helpers/data/rsvpData';

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
      getFriends(firebase.auth().currentUser.uid); // eslint-disable-line no-use-before-define
    })
    .catch(err => console.error('no friends for you', err));
};

const newFriendButton = () => {
  birfdayDiv.classList.add('hide');
  newFriendDiv.classList.remove('hide');
  saveNewFriendButton.addEventListener('click', createNewFriend);
};

const deleteFriendButton = (e) => {
  const friendId = e.target.id;
  friendsData.deleteFriend(friendId)
    .then(() => getFriends(firebase.auth().currentUser.uid)) // eslint-disable-line no-use-before-define
    .catch(err => console.error('friend no delete', err));
};

const radioButtonEvent = ((e) => {
  const rsvpId = e.target.closest('td').id;
  const newRsvp = {
    friendId: e.target.id.split('_')[1],
    statusId: e.target.value,
    birthdayId: e.target.closest('table').id,
  };
  if (rsvpId) {
    rsvpData.editRsvp(rsvpId, newRsvp)
      .then(() => getFriends(firebase.auth().currentUser.uid)) // eslint-disable-line no-use-before-define
      .catch(err => console.error('no rsvp', err));
  } else {
    rsvpData.addRsvp(newRsvp)
      .then(() => getFriends(firebase.auth().currentUser.uid)) // eslint-disable-line no-use-before-define
      .catch(err => console.error('no rsvp', err));
  }
});

const addEvents = () => {
  document.getElementById('add-friend-button').addEventListener('click', newFriendButton);
  const deleteButtons = document.getElementsByClassName('delete-friend');
  for (let i = 0; i < deleteButtons.length; i += 1) {
    deleteButtons[i].addEventListener('click', deleteFriendButton);
  }

  const radioButtons = document.getElementsByClassName('radio');
  for (let j = 0; j < radioButtons.length; j += 1) {
    radioButtons[j].addEventListener('click', radioButtonEvent);
  }
};

const showList = (birthdayId, friends) => {
  let domString = '<div class="col-6 offset-3">';
  domString += '<h2>Friends</h2>';
  domString += '<button id="add-friend-button" class="btn btn-info">Add Friend</button>';
  domString += `<table class="table table-striped" id=${birthdayId}>`;
  domString += '<thead>';
  domString += '<tr>';
  domString += '<th scope="col">Name</th>';
  domString += '<th scope="col">Email</th>';
  domString += '<th scope="col">RSVP</th>';
  domString += '<th scope="col"></th>';
  domString += '</tr>';
  domString += '</thead>';
  domString += '<tbody>';
  friends.forEach((friend) => {
    domString += '<tr>';
    domString += `<td>${friend.name}</td>`;
    domString += `<td>${friend.email}</td>`;
    domString += `<td id=${friend.rsvpId}>`;
    domString += '<div class="custom-control custom-radio custom-control-inline">';
    domString += `<input type="radio" id="radio1_${friend.id}" name="radio-buttons_${friend.id}" class="custom-control-input radio" value="status2" ${friend.status === 'status2' ? 'checked' : ''}>`;
    domString += `<label class="custom-control-label" for="radio1_${friend.id}">YES</label>`;
    domString += '</div>';
    domString += '<div class="custom-control custom-radio custom-control-inline">';
    domString += `<input type="radio" id="radio2_${friend.id}" name="radio-buttons_${friend.id}" class="custom-control-input radio" value="status3" ${friend.status === 'status3' ? 'checked' : ''}>`;
    domString += `<label class="custom-control-label" for="radio2_${friend.id}">NO</label>`;
    domString += '</div>';
    domString += '<div class="custom-control custom-radio custom-control-inline">';
    domString += `<input type="radio" id="radio3_${friend.id}" name="radio-buttons_${friend.id}" class="custom-control-input radio" value="status1" ${friend.status === 'status1' ? 'checked' : ''}>`;
    domString += `<label class="custom-control-label" for="radio3_${friend.id}">Unknown</label>`;
    domString += '</div>';
    domString += '</td>';
    domString += `<th scope="col"><button id=${friend.id} class="btn btn-danger delete-friend">X</button></th>`;
    domString += '</tr>';
  });
  domString += '</tbody>';
  domString += '</table>';
  domString += '</div>';
  util.printToDom('friends', domString);
  addEvents();
};

const getFriends = (uid) => {
  friendsData.getFriendsByUid(uid)
    .then((friends) => {
      birfdayData.getBirfdayByUid(uid).then((bday) => {
        rsvpData.getRsvpsByBirthdayId(bday.id).then((rsvps) => {
          const finalFriends = SMASH.friendRsvps(friends, rsvps);
          showList(bday.id, finalFriends);
        });
      });
    })
    .catch(err => console.error('no friends', err));
};

export default { getFriends };
