import React, { Component } from "react";
//~Component is a inbuilt Parent class, so that's why we extend it [inherit] it because methods like ==> render(), componentDidMount() is present inside the Component class

export default class LifeCycleCBCByFollowing extends Component {
  constructor() {
    //&constructor is called first during Mounting Phase because It contains all the state variable's initializations.From the backend when api call is made and the data comes then to keep that data,we should have the state container,so that's why constructor is called first
    //? super() is used for inheriting the properties and methods from the parent class [Component Class] to the Child Class
    super();
    console.log("Constructor Called First During The Mounting Phase");
    //? this points out to the object of the current class
    console.log(this);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState((prev) => {
      console.log(prev);
      return {
        count: prev.count + 1,
      };
    });
  };

  componentDidMount() {
    //?Birth Of The Component
    console.log("Component Did Mount");
    //?setInterval returns us an intervalId.
    this.id = setInterval(() => {
      console.log("API Called");
    }, 2000);
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
    clearInterval(this.id);
    console.log("API Calling Stopped");
  }

  render() {
    console.log("Render Method Called");

    return (
      <div>
        <h1>Learn Life Cycle Methods In Class Based Components</h1>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
