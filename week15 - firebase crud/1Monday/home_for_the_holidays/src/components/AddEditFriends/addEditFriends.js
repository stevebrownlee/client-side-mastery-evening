/* eslint import/no-cycle: 0 */
import $ from 'jquery';

import authHelpers from '../../helpers/authHelpers';
import friendsData from '../../helpers/data/friendsData';
import initializeFriendsPage from '../FriendsPage/friendsPage';

const formBuilder = (friendObj) => {
  const domString = `
    <h2>Add a New Friend:<h2>
    <div class="form-group">
      <label for="form-friend-name">Name:</label>
      <input type="text" value="${friendObj.name}" class="form-control" id="form-friend-name" placeholder="John Smith">
    </div>
    <div class="form-group">
      <label for="form-friend-address">Address:</label>
      <input type="text" value="${friendObj.address}" class="form-control" id="form-friend-address" placeholder="123 Main Street">
    </div>
    <div class="form-group">
      <label for="form-friend-email">Email Address:</label>
      <input type="email" value="${friendObj.email}" class="form-control" id="form-friend-email" placeholder="a@b.com">
    </div>
    <div class="form-group">
      <label for="form-friend-phone">Phone Number:</label>
      <input type="text" value="${friendObj.phoneNumber}" class="form-control" id="form-friend-phone" placeholder="1111111111">
    </div>
    <div class="form-group">
      <label for="form-friend-relationship">Relationship:</label>
      <input type="text" value="${friendObj.relationship}" class="form-control" id="form-friend-relationship" placeholder="Aunt">
    </div>
  `;

  return domString;
};

const saveNewFriend = () => {
  const friendToSave = {
    name: $('#form-friend-name').val(),
    address: $('#form-friend-address').val(),
    phoneNumber: $('#form-friend-phone').val(),
    email: $('#form-friend-email').val(),
    relationship: $('#form-friend-relationship').val(),
    isAvoiding: false,
    uid: authHelpers.getCurrentUid(),
  };

  friendsData.postFriend(friendToSave).then(() => {
    $('#add-edit-friends').hide();
    $('#friends').show();
    initializeFriendsPage();
  }).catch((err) => {
    console.error('problem with getFriends', err);
  });
};

const addButton = () => {
  const friendObject = {
    id: '',
    name: '',
    address: '',
    phoneNumber: '',
    email: '',
    relationship: '',
  };
  const domSting = `
  ${formBuilder(friendObject)}
  <button id="add-new-friend-button" class="btn btn-primary">Save New Friend</buttonid>
  `;
  $('#add-edit-friends').html(domSting);
  $('#add-new-friend-button').on('click', saveNewFriend);
};

export default { addButton };
