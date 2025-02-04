import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    // this.setState({ count: this.state.count + 1 }, () => {
    //   console.log("Callback value", this.state.count);
    // });
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
    console.log(this.state.count);
  };

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.incrementFive.bind(this)}>Increment 5</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
