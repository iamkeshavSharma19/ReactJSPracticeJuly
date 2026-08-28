import { useState } from "react";

const ReactControlledForms02 = () => {
  const [formData, setFormData] = useState({
    username: "",
    emailId: "",
    password: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { username, emailId, password } = formData;
    if (!username || !emailId || !password) {
      alert("It is mandatory to fill all the input fields in the form");
      return;
    }
    const data = {
      username,
      emailId,
      password,
    };

    console.log(data);

    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    savedUsers.push(data);
    localStorage.setItem("users", JSON.stringify(savedUsers));
    setFormData({
      username: "",
      emailId: "",
      password: "",
    });
  };

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div>
      <h1>Learn Controlled Forms Part 02</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="username">UserName : </label>
        <input
          type="text"
          placeholder="Enter User Name"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleFormData}
          required
        />
        <br /> <br />
        <label htmlFor="emailId">EmailId : </label>
        <input
          type="text"
          placeholder="Enter EmailId"
          id="emailId"
          name="emailId"
          value={formData.emailId}
          onChange={handleFormData}
          required
        />
        <br /> <br />
        <label htmlFor="password">Password : </label>
        <input
          type="text"
          placeholder="Enter Password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleFormData}
          required
        />
        <br /> <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ReactControlledForms02;
