import React from 'react';
import PropTypes from 'prop-types';

// import css
import './BuildingTile.css';

class BuildingTile extends React.Component {
  static propTypes = {
    imageSrc: PropTypes.string,
    atlText: PropTypes.string,
    pTagText: PropTypes.string,
  };

  render () {
    const { imageSrc, atlText, pTagText } = this.props;
    // import logo
    const image = require(`./images/${imageSrc}.png`);

    return (
      <div className="col-xs-3 BuildingTile">
        <div className="image-detail">
          <img src={image} alt={atlText} />
          <p>{pTagText}</p>
        </div>
      </div>
    );
  }
}

export default BuildingTile;
