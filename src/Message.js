import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello World"
    };
  }

  click() {
    console.log("this is going to change the world");

    this.setState({
      message: "Bye World"
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.click()}>Change Text</button>
      </div>
    );
  }
}

export default Message;
