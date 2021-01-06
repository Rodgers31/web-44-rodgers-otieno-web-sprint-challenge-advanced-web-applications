import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const history = useHistory();
  const [formValues, setFormValues] = useState({
    // username: "Lambda School",
    // password: "i<3Lambd4",
    username: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChanges = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", formValues)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        setError("");
        history.push("/bubbles");
      })
      .catch((err) => {
        if (err.response.status === 403) {
          setError("Username or Password not valid.");
        }
        // console.log(err.message);
      });
  };
  return (
    <div className="login-form">
      <h1>Bubbles!</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="username">username:</label>
        <input
          id="username"
          name="username"
          type="text"
          value={formValues.username}
          onChange={handleChanges}
        />
      
        <label htmlFor="password">password:</label>
        <input
          id="password"
          name="password"
          type="password"
          value={formValues.password}
          onChange={handleChanges}
        />

        <p className="error">{error}</p>

        <button className="button">Login</button>
      </form>
    </div>
  );
};

export default Login;
