import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  click() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <h1>count-{this.state.count}</h1>
        <button onClick={() => this.click()}>Increment</button>
      </div>
    );
  }
}

export default Counter;
