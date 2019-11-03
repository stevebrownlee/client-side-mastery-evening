import format from '../../helpers/format';

import './stockCard.scss';

const makeASnack = (snack) => {
  let domString = `
    <div class="card col-2 snack-card">
      <div class="card-body">
        <h5 class="card-title">${snack.name}</h5>
        <p class="card-text">${format.formatPrice(snack.price)}</p>
      </div>`;
  if (snack.snackPositionId) {
    domString += `<div class="card-footer text-center"><button id="${snack.snackPositionId}" class="btn btn-danger delete-snack-position">Remove from ${snack.position.position}</button></div>`;
  } else {
    domString += '<div class="card-footer text-center"><button class="btn btn-success add-snack-position">Add to Machine</button></div>';
  }
  domString += '</div>';

  return domString;
};

export default { makeASnack };
