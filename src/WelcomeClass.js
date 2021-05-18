import React, { Component } from "react";

class WelcomeClass extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        {this.props.children}
      </div>
    );
  }
}

export default WelcomeClass;
