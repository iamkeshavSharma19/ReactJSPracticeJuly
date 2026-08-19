import React, { Component } from "react";

export default class LifeCycleInCBCPracticeOwnMyOwn extends Component {
  constructor() {
    console.log("Constructor Called During The Mounting Phase");
    super();
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState((prev) => {
      return {
        count: prev.count + 1,
      };
    });
  };

  decrement = () => {
    this.setState((prev) => {
      return prev.count === 0 ? { count: 0 } : { count: prev.count - 1 };
    });
  };

  componentDidMount() {
    console.log("componentDidMount");
    this.id = setInterval(() => {
      console.log("API Called");
    }, 2000);
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    clearInterval(this.id);
    console.log("componentWillUnmount And API Calling Stopped");
  }

  render() {
    console.log("Render Method called");

    return (
      <div>
        <h1>Practicing Life Cycle Methods In Class Based Components</h1>
        <h2>Count : {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}
