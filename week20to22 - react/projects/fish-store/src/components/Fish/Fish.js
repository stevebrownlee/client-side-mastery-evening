import React from 'react';
import PropTypes from 'prop-types';

import formatPrice from '../../helpers';

class Fish extends React.Component {
  static propTypes = {
    details: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      desc: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number,
    }),
  };
  render () {
    const { details } = this.props;
    const isAvailable = details.status === 'available';
    const image = require(`${details.image}`);
    return (
      <li className="menu-fish">
        <img src={image} alt={details.name} />
        <h3 className="fish-name">
          {details.name}
          <span className="price">{formatPrice(details.price)}</span>
        </h3>
        <p>{details.desc}</p>
        <button disabled={!isAvailable} >
          {isAvailable ? 'Add To Order' : 'Sold Out!'}
        </button>
      </li>
    );
  }
}

export default Fish;
