import React, { Component } from 'react';
import './App.css';

import Cats from '../components/cats/Cats';

const myCats = [
  {id: 'cat1', name: 'Fluffy', imageUrl: 'https://www.telegraph.co.uk/content/dam/pets/2017/01/06/1-JS117202740-yana-two-face-cat-news_trans_NvBQzQNjv4BqJNqHJA5DVIMqgv_1zKR2kxRY9bnFVTp4QZlQjJfe6H0.jpg?imwidth=450', description: 'SO FLUFFY'},
  {id: 'cat2', name: 'George', imageUrl: 'https://www.telegraph.co.uk/content/dam/pets/2017/01/06/1-JS117202740-yana-two-face-cat-news_trans_NvBQzQNjv4BqJNqHJA5DVIMqgv_1zKR2kxRY9bnFVTp4QZlQjJfe6H0.jpg?imwidth=450', description: 'SO FLUFFY'},
  {id: 'cat3', name: 'Steve', imageUrl: 'https://www.telegraph.co.uk/content/dam/pets/2017/01/06/1-JS117202740-yana-two-face-cat-news_trans_NvBQzQNjv4BqJNqHJA5DVIMqgv_1zKR2kxRY9bnFVTp4QZlQjJfe6H0.jpg?imwidth=450', description: 'SO FLUFFY'},
  {id: 'cat4', name: 'Ralph', imageUrl: 'https://www.telegraph.co.uk/content/dam/pets/2017/01/06/1-JS117202740-yana-two-face-cat-news_trans_NvBQzQNjv4BqJNqHJA5DVIMqgv_1zKR2kxRY9bnFVTp4QZlQjJfe6H0.jpg?imwidth=450', description: 'SO FLUFFY'},
  {id: 'cat5', name: 'Killer', imageUrl: 'https://www.telegraph.co.uk/content/dam/pets/2017/01/06/1-JS117202740-yana-two-face-cat-news_trans_NvBQzQNjv4BqJNqHJA5DVIMqgv_1zKR2kxRY9bnFVTp4QZlQjJfe6H0.jpg?imwidth=450', description: 'SO FLUFFY'},
];

class App extends Component {
  state = {
    cats: [],
  };

  componentDidMount () {
    this.setState({cats: myCats});
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My Kitties</h1>
        </header>
        <Cats
          cats={this.state.cats}
        />
      </div>
    );
  }
}

export default App;
