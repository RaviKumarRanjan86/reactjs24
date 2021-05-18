import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentClass extends Component {
  constructor() {
    super();
    this.state = {
      parent: "My parent class"
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(child) {
    this.setState({
      parent: "Called from child class"
    });

    alert(`Hello ${this.state.parent} from ${child}`);
  }

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.clickHandler} />
      </div>
    );
  }
}

export default ParentClass;
