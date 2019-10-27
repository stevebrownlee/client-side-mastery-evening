import './cowCard.scss';

const buildCowCard = (cow) => {
  const domString = `<div class="card cowCard col-4">
  <div class="card-body">
    <h5 class="card-title">${cow.name}</h5>
    <p class="card-text">${cow.breed}</p>
    <p class="card-text">Weighing in at ${cow.weight}lbs</p>
  </div>
</div>`;
  return domString;
};

export default { buildCowCard };
