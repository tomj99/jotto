import "./App.css";
import { Box, Container, Card} from "@material-ui/core"
import { connect } from "react-redux";
import React, { Component } from "react";

import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";

class App extends Component {
  render() {
    return (
      <Container data-test="component-app" className="App">
          <Card>
              <Box justifyContent="flex-start" >
                  <h1>Jotto</h1>
                  <Congrats success={true} />
                  <GuessedWords
                      guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
                  />
              </Box>
          </Card>

      </Container>
    );
  }
}
export default App;
