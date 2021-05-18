import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor() {
    super();
    this.state = {
      username: ""
    };
    console.log("constructor method A ");
  }

  static getDerivedStateFromProps(state, props) {
    console.log("getDerivedStateFromProps A");
    return null;
  }

  componentDidMount() {
    console.log("component did mount A");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate A");
    return null;
  }

  shouldComponentUpdate(prevProps, prevState) {
    console.log("shouldComponentUpdate A");
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate A");
  }

  changeHandler = () => {
    this.setState({
      username: "ravi"
    });
  };

  render() {
    console.log("render method A");
    return (
      <div>
        <h1>LifeCycleA</h1>
        <button onClick={this.changeHandler}>click me na </button>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;
