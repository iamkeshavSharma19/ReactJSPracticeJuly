import React, { useState } from "react";

const ControllerForms01PracticeOnMyOwn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      alert("All the input fields are mandatory");
      return;
    }
    let formData = { username, email, password };
    console.log(formData);
    //~Storing the formData into the local Storage.
    //?Checking if there is some data present in the local storage or not.
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    savedUsers.push(formData);
    localStorage.setItem("users", JSON.stringify(savedUsers));
    //?Clearing all the input fields
    setUsername("");
    setEmail("");
    setPassword("");
  };
  return (
    <div>
      <h1>Controlled Forms 01</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="username">Username : </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsername}
        />
        <br />
        <label htmlFor="email">Email : </label>
        <input type="text" id="email" value={email} onChange={handleEmail} />
        <br />
        <label htmlFor="password">Password : </label>
        <input
          type="text"
          id="password"
          value={password}
          onChange={handlePassword}
        />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ControllerForms01PracticeOnMyOwn;
