import React, { Component } from "react";

class ConditionalGreeting extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: true,
      LogginMessage: "Do you want to Login"
    };

    this.Loggin = this.Loggin.bind(this);
  }

  Loggin() {
    if (!this.state.isLoggedIn) {
      this.setState({
        isLoggedIn: true,
        LogginMessage: "Log Out"
      });
    } else {
      this.setState({
        isLoggedIn: false,
        LogginMessage: "Do you want to Login"
      });
    }
  }

  render() {
    // let message;
    // if (this.state.isLoggedIn) message = "Welcome Ravi";
    // else message = "Welcome Guest";

    return this.state.isLoggedIn && <div>Welcome vilsdf</div>;

    // return this.state.isLoggedIn ? (
    //   <div>"Welcome Vikas"</div>
    // ) : (
    //   <div>"Welcome Guest"</div>
    // );

    // if (this.state.isLoggedIn) return <div>Welcome Ravi</div>;
    // else return <div>Welcome Guest</div>;
  }
}

export default ConditionalGreeting;
