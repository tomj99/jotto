import "./App.css";
import { connect } from "react-redux";
import React, { Component } from "react";

import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";

class App extends Component {
  render() {
    return (
      <div data-test="component-app" className="App">
        <h1>Jotto</h1>
        <Congrats success={false} />
        <GuessedWords
          guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
        />
      </div>
    );
  }
}
export default App;
