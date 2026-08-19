import React, { useRef } from "react";

//?useRef deals with real DOM, not with Virtual DOM

const UncontrolledFormsByFollowing = () => {
  const userRef = useRef("");
  console.log(userRef.current.value);

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    const user = {
      username: userRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.log(user);
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    savedUsers.push(user);
    localStorage.setItem("users", JSON.stringify(savedUsers));
    userRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div>
      <h1>Learn Uncontrolled Forms</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username : </label>
        <input
          type="text"
          id="username"
          placeholder="Enter Your Username"
          ref={userRef}
        />
        <br /> <br />
        <label htmlFor="email">Email : </label>
        <input
          type="text"
          id="email"
          placeholder="Enter Your Email"
          ref={emailRef}
        />
        <br /> <br />
        <label htmlFor="password">Password : </label>
        <input
          type="text"
          id="password"
          placeholder="Enter Your Password"
          ref={passwordRef}
        />
        <br /> <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UncontrolledFormsByFollowing;
