import React, { useState } from "react";

const ControlledForms02ByFollowing = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    console.log(e);
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Learn Controlled Forms</h1>
      <p>Manage Multiple input with single state</p>
      <form>
        <label htmlFor="username">Username : </label>
        <input
          type="text"
          placeholder="Enter Username"
          name="username"
          id="username"
          value={formData.username}
          onChange={handleChange}
        />
        <br /> <br />
        <label htmlFor="email">Email : </label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br /> <br />
        <label htmlFor="password">Password : </label>
        <input
          type="text"
          placeholder="Enter Password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br /> <br />
        <button>Submit Form</button>
      </form>
    </div>
  );
};

export default ControlledForms02ByFollowing;
