import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();
  goToStore = (event) => {
    // 1. Stop form from submitting
    event.preventDefault();
    // 2. get text from input
    console.log(this.myInput.value.value);
    const storeName = this.myInput.value.value;
    // 3. change page to /store/whatever-entered
    this.props.history.push(`/store/${storeName}`);

  }
  // You can only ever return one element from a render
  //  If you need to return siblings use React.Fragment
  render () {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        { /* This is a comment in JSX */ }
        <h2>Please enter a store</h2>
        <input
          type="text"
          ref={this.myInput}
          required placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

export default StorePicker;