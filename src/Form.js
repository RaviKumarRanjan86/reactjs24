import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      initialVal: "",
      comment: "",
      topic: "React"
    };

    this.formSubmit = this.formSubmit.bind(this);
  }

  changeHandler = (event) => {
    this.setState({
      initialVal: event.value
    });
  };

  changeComment = (event) => {
    this.setState({
      comment: event.value
    });
  };

  changeTopic = (event) => {
    this.setState({
      topic: event.value
    });
  };

  formSubmit = (event) => {
    // const { UserName, Comment, Topic } = this.state;
    console.log(this.UserName);
    alert(`${this.state.UserName}  ${this.state.Comment}  ${this.state.Topic}`);
  };

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <div>
          <label>UserName</label>

          <input
            type="text"
            value={this.state.initialVal}
            onChange={this.changeHandler}
          ></input>
        </div>
        <div>
          <label>comment</label>

          <textarea
            value={this.state.comment}
            onChange={this.changeComment}
          ></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value={this.state.topic} onChange={this.changeTopic}>
            <option value="react">React</option>
            <option value="vue">vue</option>
            <option value="angular">angular</option>
          </select>
        </div>
        <button type="submit">submit</button>
      </form>
    );
  }
}

export default Form;
