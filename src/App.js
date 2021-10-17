import React, { Component } from "react";
import "./App.css";
import Likecounter from "./component/Likecounter";

class App extends Component {
  render() {
    return (
      <div class="App">
        <h2>Click to Like </h2>
        <Likecounter />
      </div>
    );
  }
}

export default App;
