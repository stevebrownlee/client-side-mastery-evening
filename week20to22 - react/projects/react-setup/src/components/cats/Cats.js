import React from 'react';

import './Cats.css';

class Cats extends React.Component {
  render () {
    const {cats} = this.props;
    const catComponets = cats.map((cat) => {
      return (
        <div key={cat.id} className="cat">
          <div className="col-sm-6 col-md-4">
            <div className="thumbnail">
              <img src={cat.imageUrl} alt="..."/>
              <div className="caption">
                <h3>{cat.name}</h3>
                <p>{cat.description}</p>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="cats">
        {catComponets}
      </div>
    );
  }
}

export default Cats;
