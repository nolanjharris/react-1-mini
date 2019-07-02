import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      picture: '',
      name: ''
    };

    this.updatePicture = this.updatePicture.bind(this);
    this.updateName = this.updateName.bind(this);
  }

  updatePicture(value) {
    this.setState({ picture: value });
  }

  updateName(value) {
    this.setState({ name: value });
  }

  addFriend() {
    const { friends, picture, name } = this.state;

    let newFriends = friends.slice();
    newFriends.push({ picture, name });

    this.setState({ friends: newFriends, picture: '', name: '' });
  }

  render() {
    const friends = this.state.friends.map((friend, index) => (
      <div key={`friend-${index}-${friend.name}`}>
        <img width='100px' src={friend.picture} />
        <span>{friend.name}</span>
      </div>
    ));
    return (
      <div>
        <span>Picture:</span>
        <input onChange={e => this.updatePicture(e.target.value)} />

        <span>Name:</span>
        <input onChange={e => this.updateName(e.target.value)} />

        <button onClick={() => this.addFriend()}>Add Friend</button>
      </div>
    );
  }
}

export default App;
