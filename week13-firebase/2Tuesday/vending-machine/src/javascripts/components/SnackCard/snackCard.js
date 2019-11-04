import format from '../../helpers/format';
import './snackCard.scss';

const makeASnack = (position) => {
  let domString = '';
  if (position.snack.name) {
    domString += `
    <div class="card col-4 snack-card" id="${position.snack.id}">
      <img src=${position.snack.imageUrl} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${position.snack.name}</h5>
        <p class="card-text">${format.formatPrice(position.snack.price)}</p>
        <p class="card-text">${position.snack.currentStocked} available</p>
      </div>
      <div class="card-footer text-center"><button class="btn btn-info buy-snack ${position.snack.currentStocked < 1 ? 'disabled' : ''}">Purchase ${position.position}</button></div>
    </div>`;
  } else {
    domString += `
    <div class="card col-4 snack-card" id="${position.snack.id}">
      <div class="card-body">
        <h5 class="card-title">EMPTY</h5>
      </div>
      <div class="card-footer text-center">${position.position}</div>
    </div>`;
  }

  return domString;
};

export default { makeASnack };
