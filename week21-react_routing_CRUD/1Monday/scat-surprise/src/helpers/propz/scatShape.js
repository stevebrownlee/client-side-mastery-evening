import PropTypes from 'prop-types';

const scatCardShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { scatCardShape };
