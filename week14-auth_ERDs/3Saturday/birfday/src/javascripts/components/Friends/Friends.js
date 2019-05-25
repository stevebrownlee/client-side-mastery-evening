import util from '../../helpers/util';
import friendsData from '../../helpers/data/friendsData';

import './Friends.scss';

const showList = (uid) => {
  friendsData.getFriendsByUid(uid)
    .then((friends) => {
      let domString = '<div class="col-6 offset-3">';
      domString += '<h2>Friends</h2>';
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
    })
    .catch(err => console.error('no friends', err));
};

export default { showList };
