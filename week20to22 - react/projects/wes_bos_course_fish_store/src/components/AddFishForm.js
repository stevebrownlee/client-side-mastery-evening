import React from 'react';

class AddFishForm extends React.Component {
nameRef = React.createRef();
priceRef = React.createRef();
statusRef = React.createRef();
descRef = React.createRef();
imageRef = React.createRef();

  createFish = (e) => {
    // stop form from submitting
    e.preventDefault();
    const fish = {
      nameRef: this.nameRef.value.value,
      priceRef: parseFloat(this.priceRef.value.value),
      statusRef: this.statusRef.value.value,
      descRef: this.descRef.value.value,
      imageRef: this.imageRef.value.value,
    }
    this.props.addFish(fish);

    // refresh the form
    e.currentTarget.reset();
  }

  render() {
    return (
      <form className="fish-edit" onSubmit={this.createFish}>
        <input type="text" ref={this.nameRef} name="name" placeholder="Name"/>
        <input type="text" ref={this.priceRef} name="price" placeholder="Price"/>
        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out</option>
        </select>
        <textarea name="desc" ref={this.descRef} placeholder="Desc"></textarea>
        <input type="text" name="image" ref={this.imageRef} placeholder="Image"/>
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;