import React, { Component } from "react";
import "./Likecounter.css";

class Likecounter extends Component {
  state = {
    counter: 0,
  };

  like = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  render() {
    return (
      <div className="likes">
        <h1> {this.state.counter}</h1>
        <button class="btn 1" onClick={this.like}>
          +
        </button>
      </div>
    );
  }
}

export default Likecounter;
