import $ from 'jquery';
// import firebase from 'firebase/app';
// import 'firebase/auth';
import friendsData from '../../helpers/data/friendsData';
import './singleFriend.scss';

const buildDomString = (friend) => {
  const domString = `
    <h1>${friend.name}<h1>
    <h3>${friend.relationship}<h3>
    <p>${friend.address}<p>
    <p>${friend.email}<p>
    <p>${friend.phoneNumber}<p>
    <p id="${friend.id}">IsAvoiding: ${friend.isAvoiding}<p>
  `;
  return domString;
};

const singleFriend = (e) => {
  const selectedFriend = e.target.id;
  let strang = '';
  friendsData.getSingleFriend(selectedFriend).then((friend) => {
    strang = buildDomString(friend);
    $('#singleFriend').html(strang);
  }).catch((err) => {
    console.error('problem with getFriends', err);
  });
};

export default singleFriend;
