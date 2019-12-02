import PropTypes from 'prop-types';

const goatShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
});

export default { goatShape };
