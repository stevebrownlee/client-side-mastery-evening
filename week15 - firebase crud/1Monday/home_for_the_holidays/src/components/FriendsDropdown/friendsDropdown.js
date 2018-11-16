import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';
import friendsData from '../../helpers/data/friendsData';
import singleFriend from '../SingleFriend/singleFriend';
import './friendsDropdown.scss';

const buildDomString = (friends) => {
  let domString = '';
  friends.forEach((friend) => {
    domString += `<button class="btn btn-info friend" id="${friend.id}">${friend.name}</button>`;
  });
  return domString;
};

const friendsDropdown = () => {
  let strang = '';
  const { uid } = firebase.auth().currentUser;
  friendsData.getFriends(uid).then((friends) => {
    strang = buildDomString(friends);
    $('#friendsDropdown').html(strang);
    $('.friend').on('click', singleFriend);
  }).catch((err) => {
    console.error('problem with getFriends', err);
  });
};

export default friendsDropdown;
