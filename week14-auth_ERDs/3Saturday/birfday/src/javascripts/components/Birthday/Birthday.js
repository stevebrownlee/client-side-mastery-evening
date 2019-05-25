import util from '../../helpers/util';
import birfdayData from '../../helpers/data/birfdayData';

import './Birthday.scss';

const showBirthday = (uid) => {
  birfdayData.getBirfdayByUid(uid)
    .then((birthday) => {
      let domString = '<div>';
      domString += '<h1>My Birfday</h1>';
      domString += `<h2>${birthday.date}</h2>`;
      domString += `<img src=${birthday.imageUrl} />`;
      domString += `<h3>${birthday.location} @ ${birthday.time}</h3>`;
      domString += '</div>';
      util.printToDom('event', domString);
    })
    .catch(err => console.error('no birthday', err));
};

export default { showBirthday };
