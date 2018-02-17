import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";


class App extends Component {
  state = {
    friends
  };

  removeFriend = id => {
    const friends = this.state.friends.filter(friend => friend.id !== id);
    this.setState({ friends });
  };

  render() {
    return (
      <wrapper>
        <title>Friends List</title>
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.img}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
        </wrapper>
    );
  }
}

// const App = () => (
//   <Wrapper>
//     <h1 className="title">Friends List</h1>
//     <FriendCard
//       name={friends[0].name}
//       image={friends[0].image}
//       occupation={friends[0].occupation}
//       location={friends[0].location}
//     />
//     <FriendCard
//       name={friends[1].name}
//       image={friends[1].image}
//       occupation={friends[1].occupation}
//       location={friends[1].location}
//     />
//     <FriendCard
//       name={friends[2].name}
//       image={friends[2].image}
//       occupation={friends[2].occupation}
//       location={friends[2].location}
//     />
//   </Wrapper>
// );

export default App;
