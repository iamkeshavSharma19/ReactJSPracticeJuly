import { Component } from "react";
//~Component is a inbuilt Parent class,so that's why we extend it [inherit] it because render method, methods like componentDidMount() is present inside the Component class.

export default class LifeCycleCBCByFollowing extends Component {
  constructor() {
    //&constructor is called first during the mounting phase because It contains all the state variable's initializations.from the backend when the api call is made and data comes then to keep that data,we should have the state container,so that's why constructor is called first.
    console.log("Constructor Called");
    //?super() is used for inheriting the properties and methods from the parent class to the child class.
    super();
  }
  componentDidMount() {
    //?Birth Of the Component
    console.log("Component Did Mount.Birth Of The Component");
  }
  render() {
    return (
      <div>
        <h1>LifeCycleInCBC</h1>
        <button>Increment</button>
        <h2>Count</h2>
      </div>
    );
  }
}
