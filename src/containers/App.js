import React, { Component } from 'react';
import './App.css';
import Navigation from "../components/navigation/Navigation";
import Game from "../components/game/Game";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navigation />
          <Game />
      </div>
    );
  }
}

export default App;
