import format from '../../helpers/format';

import './stockCard.scss';

const makeASnack = (snack) => {
  let domString = `
    <div class="card col-3 snack-card" id="stock_${snack.id}">
      <div class="card-body">
        <h5 class="card-title">${snack.name}</h5>
        <p class="card-text">${format.formatPrice(snack.price)} each</p>
        <p class="card-text">Lifetime Profit: ${format.formatPrice(snack.price * snack.lifetimeNum)}</p>
        <button class="btn btn-secondary quick-stock">Stock 5</button>
      </div>`;
  if (snack.snackPositionId) {
    domString += `<div class="card-footer text-center"><button id="${snack.snackPositionId}" class="btn btn-danger delete-snack-position">Remove from ${snack.position.position}</button></div>`;
  } else {
    domString += `<div class="card-footer text-center row">
      <input type=text placeholder='A1' class="col-6"/>
      <button id="${snack.id}" class="btn btn-success add-snack-position col-6">Add to Machine</button>
    </div>`;
  }
  domString += '</div>';

  return domString;
};

export default { makeASnack };
