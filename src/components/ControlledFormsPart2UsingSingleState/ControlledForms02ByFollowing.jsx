import React, { useState } from "react";

const ControlledForms02ByFollowing = () => {
  //?Creating a Single State for storing the formData.
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    // console.log(e);
    let { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    console.log(formData);
    //?Saving the data also inside the Local Storage.
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    savedUsers.push(formData);
    localStorage.setItem("users", JSON.stringify(savedUsers));
    setFormData({
      username: "",
      email: "",
      password: "",
    });
  };
  return (
    <div>
      <h1>Learn Controlled Forms</h1>
      <p>Manage Multiple input With Single state</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username : </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Enter Username"
          onChange={handleChange}
          value={formData.username}
        />
        <br /> <br />
        <label htmlFor="email">Enter Email : </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
          value={formData.email}
        />
        <br /> <br />
        <label htmlFor="password">Enter Password : </label>
        <input
          type="text"
          id="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleChange}
          value={formData.password}
        />
        <br /> <br />
        <button>Submit Form</button>
      </form>
    </div>
  );
};

export default ControlledForms02ByFollowing;
