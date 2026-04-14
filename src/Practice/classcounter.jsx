import { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
  };
  incrementHandler = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrementHandler = () => {
    if (this.state.count <= 0) {
      alert("count cant be negative");
    } else {
      this.setState({ count: this.state.count - 1 });
    }
  };
  resetHandler = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <>
        <p>count :{this.state.count}</p>
        <button onClick={this.incrementHandler}>Increment</button>
        <button onClick={this.decrementHandler}>Decrement</button>
        <button onClick={this.resetHandler}>Reset</button>
      </>
    );
  }
}
export default Counter;
