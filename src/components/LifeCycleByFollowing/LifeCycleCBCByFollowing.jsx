import { Component } from "react";
//~Component is a inbuilt Parent class,so that's why we extend it [inherit] it because render method, methods like componentDidMount() is present inside the Component class.

export default class LifeCycleCBCByFollowing extends Component {
  constructor() {
    //&constructor is called first during the mounting phase because It contains all the state variable's initializations.from the backend when the api call is made and data comes then to keep that data,we should have the state container,so that's why constructor is called first.
    console.log("Constructor Called");
    //?super() is used for inheriting the properties and methods from the parent class to the child class.
    super();
    //?this points out to the object of the current class
    // console.log(this);
    this.state = { count: 0 };
  }
  increment = () => {
    //?setState method updates the state variable which is present inside the object of the current class
    this.setState((prev) => {
      //console.log(prev); //{count : 0}
      return { count: prev.count + 1 };
    });
  };
  componentDidMount() {
    //?Birth Of the Component
    console.log("Component Did Mount.Birth Of The Component");
    //&SetInterval returns us an intervalId
    this.id = setInterval(() => {
      console.log("API called");
    }, 2000);
  }
  componentDidUpdate() {
    //^Growth of the component
    //^Updating phase
    console.log("Component Updated");
  }

  componentWillUnmount() {
    //~Death of the component
    console.log("Component Unmounted");
    //?We will cancel the API Calling inside componentWillUnmount method
    clearInterval(this.id);
    console.log("API Calling stopped");
  }
  render() {
    return (
      <div>
        <h1>LifeCycleInCBC</h1>
        <button onClick={this.increment}>Increment</button>
        <h2>Count: {this.state.count}</h2>
      </div>
    );
  }
}
