// define it and export at the end
import PropTypes from 'prop-types';

const LISTINGS_PROPS = PropTypes.shape({
  address: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  zip: PropTypes.number.isRequired,
  squareFootage: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  numBeds: PropTypes.number.isRequired,
  numBaths: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  estimatedMonthlyMorgage: PropTypes.number.isRequired,
  lotInAcres: PropTypes.number.isRequired,
  yearBuilt: PropTypes.number.isRequired,
  heating: PropTypes.string.isRequired,
  cooling: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
});

const LISTINGS_PROPS_OPTIONAL =
PropTypes.oneOfType([
  PropTypes.object,
  PropTypes.shape({
    address: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
    zip: PropTypes.number.isRequired,
    squareFootage: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    numBeds: PropTypes.number.isRequired,
    numBaths: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    estimatedMonthlyMorgage: PropTypes.number.isRequired,
    lotInAcres: PropTypes.number.isRequired,
    yearBuilt: PropTypes.number.isRequired,
    heating: PropTypes.string.isRequired,
    cooling: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  }),
]);

export {LISTINGS_PROPS, LISTINGS_PROPS_OPTIONAL};
