import React from 'react';

import './EditScat.scss';

class EditScat extends React.Component {
  render() {
    const editId = this.props.match.params.id;
    // this.props.match.params.id;
    return (
      <div className="EditScat col">
        <h1>EditScat</h1>
        <h2>The edit id is: {editId}</h2>
      </div>
    );
  }
}

export default EditScat;
