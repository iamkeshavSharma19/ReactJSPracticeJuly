import React, { useState } from "react";

const ControlledForm01ByFollowing = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      alert("All Fields Are Required");
      return;
    }
    console.log("Form Submitted");

    let formData = { username, email, password };

    console.log(formData);

    //~Storing the data also in the local Storage
    //?check if users exists in the localStorage.
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
      <h1>Learn Controlled Forms</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="username">Username : </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsername}
        />
        <br /> <br />
        <label htmlFor="email">Email : </label>
        <input type="text" id="email" value={email} onChange={handleEmail} />
        <br /> <br />
        <label htmlFor="password">Password : </label>
        <input
          type="text"
          id="password"
          value={password}
          onChange={handlePassword}
        />
        <br /> <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ControlledForm01ByFollowing;
