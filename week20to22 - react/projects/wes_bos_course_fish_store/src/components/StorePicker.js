import React from 'react';

class StorePicker extends React.Component {
  // You can only ever return one element from a render
  //  If you need to return siblings use React.Fragment
  render () {
    return (
      <form className="store-selector">
        { /* This is a comment in JSX */ }
        <h2>Please enter a store</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker;