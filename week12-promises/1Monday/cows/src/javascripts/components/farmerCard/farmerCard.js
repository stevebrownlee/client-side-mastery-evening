import './farmerCard.scss';

const buildFarmerCard = (farmer) => {
  const domString = `<div class="card farmerCard col-4">
  <div class="card-body">
    <h5 class="card-title">${farmer.name}</h5>
    <p class="card-text">Hometown: ${farmer.location}</p>
  </div>
</div>`;
  return domString;
};

export default { buildFarmerCard };
