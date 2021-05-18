import React, { Component } from "react";

class ClassOnClick extends Component {
  clickHandler() {
    console.log("zara zara mahekta hai");
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Touch me</button>
      </div>
    );
  }
}

export default ClassOnClick;
