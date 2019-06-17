import React from 'react';
import PropTypes from 'prop-types';

import goatShape from '../../helpers/propz/goatShape.js';
import Goat from '../Goat/Goat';

import './GoatCoral.scss';

class GoatCoral extends React.Component {
  static propTypes = {
    goats: PropTypes.arrayOf(goatShape.goatShape),
  }

  render() {
    const {goats} = this.props;
    const makeGoats = goats.map(goat => (
      <Goat key={goat.id} goat={goat}/>
    ));
    return (
      <div className="GoatCoral d-flex flex-wrap">
        {makeGoats}
      </div>
    );
  }
}

export default GoatCoral;