import React, { Component } from "react";

class LifeCycleB extends Component {
  constructor() {
    super();
    this.state = {
      username: ""
    };
    console.log("constructor method AB ");
  }

  static getDerivedStateFromProps(state, props) {
    console.log("getDerivedStateFromProps AB");
    return null;
  }

  componentDidMount() {
    console.log("component did mount AB");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate B");
    return null;
  }

  shouldComponentUpdate(prevProps, prevState) {
    console.log("shouldComponentUpdate B");
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate B");
  }

  render() {
    console.log("render method AB");
    return (
      <div>
        <h1>LifeCycleB</h1>
      </div>
    );
  }
}

export default LifeCycleB;
