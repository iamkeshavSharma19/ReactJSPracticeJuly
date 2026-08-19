import React, { useRef } from "react";

const UncontrolledFormsPracticeOwnMyOwn = () => {
  const userRef = useRef("Keshav"); //? {current : "keshav"}
  console.log(userRef); //? {current : "keshav"}
  console.log(userRef.current); //? "keshav"
  console.log(userRef.current.value); //? undefined
  const emailRef = useRef("Keshav");
  const passwordRef = useRef("Keshav");

  const handleSubmit = (e) => {
    e.preventDefault();
    let { value: username } = userRef.current;
    let { value: email } = emailRef.current;
    let { value: password } = passwordRef.current;
    if (!username || !email || !password) {
      alert("It is mandatory to fill All the input fields");
      return;
    }

    const user = {
      username,
      email,
      password,
    };

    console.log(user);
    console.log("Form Submitted");

    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    savedUsers.push(user);
    localStorage.setItem("users", JSON.stringify(savedUsers));
    userRef.current.value = "";
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <div>
      <h1>Practicing Uncontrolled Forms In React</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username : </label>
        <input
          type="text"
          placeholder="Enter Username"
          id="username"
          ref={userRef}
        />
        <br /> <br />
        <label htmlFor="email">Email : </label>
        <input
          type="text"
          placeholder="Enter Your Email Address"
          id="email"
          ref={emailRef}
        />
        <br /> <br />
        <label htmlFor="password">Password : </label>
        <input
          type="text"
          placeholder="Enter Your Password"
          id="password"
          ref={passwordRef}
        />
        <br /> <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default UncontrolledFormsPracticeOwnMyOwn;
