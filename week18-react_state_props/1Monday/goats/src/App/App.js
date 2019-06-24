import React from 'react';

import GoatCoral from '../components/GoatCoral/GoatCoral';
import './App.scss';

const goats = [
  {id: 'goat1', name: 'Billy the Kid', age: 2, description:'I like Yoga!', imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Hausziege_04.jpg'},
  {id: 'goat2', name: 'Wooly', age: 85, description:'I like eating grass.', imgUrl: 'https://pbs.twimg.com/profile_images/980547001166295041/eBs20xF4.jpg'},
  {id: 'goat3', name: 'Vincent van Goat', age: 18, description:'SHHHHHHH', imgUrl: 'https://goatyoga.com/wp-content/uploads/goat-yoga-goat-in-pink-tutu-with-unicorn-horn.jpg'},
  {id: 'goat4', name: 'Butter', age: 1, description:'RAWRRRR', imgUrl: 'https://i.ytimg.com/vi/cEJy2q27hVk/maxresdefault.jpg'},
  {id: 'goat5', name: 'Ramsey', age: .5, description:'Nope', imgUrl: 'https://www.psephizo.com/wp-content/uploads/2018/09/1438297793139.jpeg'},
];

class App extends React.Component {
  state = {
    goats: [],
  }

  componentDidMount() {
    this.setState({ goats });
  }

  render() {
    const { goats } = this.state;
    return (
      <div className="App">
        <h1>GOAT YOGA</h1>
        <GoatCoral goats={goats} />
      </div>
    );
  }
}

export default App;