import format from '../../helpers/format';
import './snackCard.scss';

const makeASnack = (snack) => {
  let domString = '';
  if (snack.snack.name) {
    domString += `
    <div class="card col-4 snack-card">
      <img src=${snack.snack.imageUrl} class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${snack.snack.name}</h5>
        <p class="card-text">${format.formatPrice(snack.snack.price)}</p>
      </div>
      <div class="card-footer text-center">${snack.position}</div>
    </div>`;
  } else {
    domString += `
    <div class="card col-4 snack-card">
      <div class="card-body">
        <h5 class="card-title">EMPTY</h5>
      </div>
      <div class="card-footer text-center">${snack.position}</div>
    </div>`;
  }

  return domString;
};

export default { makeASnack };
