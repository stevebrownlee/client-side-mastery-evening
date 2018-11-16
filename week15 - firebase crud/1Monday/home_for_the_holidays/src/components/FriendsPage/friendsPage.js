import $ from 'jquery';
import './friendsPage.scss';
import friendsDropdown from '../FriendsDropdown/friendsDropdown';

const friendsPage = () => {
  const domString = `
  <div id="friendsDropdown"></div>
  <div id="singleFriend"></div>
  `;
  $('#friends').html(domString);
  friendsDropdown();
};

export default friendsPage;
