import React from 'react';
import PropTypes from 'prop-types';

import goatShape from '../../helpers/propz/goatShape';
import Goat from '../Goat/Goat';

import './GoatCoral.scss';

class GoatCoral extends React.Component {
  static propTypes = {
    goats: PropTypes.arrayOf(goatShape.goatShape),
    freeAGoat: PropTypes.func,
  }

  render() {
    const { goats, freeAGoat } = this.props;
    const makeGoats = goats.map((goat) => (
      <Goat key={goat.id} goat={goat} freeAGoat={freeAGoat}/>
    ));
    return (
      <div className="GoatCoral d-flex flex-wrap">
        {makeGoats}
      </div>
    );
  }
}

export default GoatCoral;
