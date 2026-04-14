import React, { Component } from "react";

class Youtube extends Component {
  state = {
    isSubscribe: false,
    text2: "Successfully subscribed",
    text1: "click here to subscribe",
  };

  clickHandler = () => {
    this.setState({ isSubscribe: !this.state.isSubscribe });
  };

  render() {
    return (
      <>
        <button onClick={this.clickHandler}>
          {this.state.isSubscribe ? this.state.text2 : this.state.text1}
        </button>
      </>
    );
  }
}
export default Youtube;
