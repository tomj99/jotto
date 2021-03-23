import "./App.css";
import { Container, Card } from "@material-ui/core";
import React, { Component } from "react";

import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";

class App extends Component {
  render() {
    return (
      <Container data-test="component-app" className="App">
        <Card>
          <h1>Jotto</h1>
          <Congrats success={true} />
          <GuessedWords
            guessedWords={[
              { guessedWord: "train", letterMatchCount: 3 },
              { guessedWord: "pain", letterMatchCount: 1 },
            ]}
          />
        </Card>
      </Container>
    );
  }
}
export default App;
