import React from 'react';
import PropTypes from 'prop-types';
import fishShape from '../../helpers/propz/fishShapes';

import format from '../../helpers/format';

import './Fish.scss';

class Fish extends React.Component {
  static propTypes = {
    fish: fishShape.fishShape,
    addToOrder: PropTypes.func.isRequired,
  }

  addClickEvent = (e) => {
    e.preventDefault();
    this.props.addToOrder(this.props.index);
  };

  render() {
    const { details } = this.props;
    const isAvailable = details.status === 'available';
    // eslint-disable-next-line
    const image = require(`${details.image}`);
    return (
      <li className="Fish">
        <img src={image} alt={details.name} />
        <h3 className="name">
          {details.name}
          <span className="price">{format.formatPrice(details.price)}</span>
        </h3>
        <p>{details.desc}</p>
        {isAvailable ? (
          <button
            className="btn btn-outline-dark"
            disabled={!isAvailable}
            onClick={this.addClickEvent}
          >
            Add To Order
          </button>
        ) : (
          <button disabled={!isAvailable}>Sold Out!</button>
        )}
      </li>
    );
  }
}

export default Fish;
