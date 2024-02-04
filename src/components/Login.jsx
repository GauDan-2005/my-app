import axios from "axios";
import React, { useState } from "react";

const Login = ({ setIsLoggedIn }) => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [err, setErr] = useState("");

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
    setErr("");
  };

  const registerForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/users/register", {
        username: user.username,
        password: user.password,
        email: user.email,
      });
      setUser({ username: "", password: "", email: "" });
      setErr(res.data);
    } catch (err) {
      err.response.data && setErr(err.response.data);
    }
  };

  const loginForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/users/login", {
        password: user.password,
        email: user.email,
      });
      setUser({ username: "", password: "", email: "" });
      localStorage.setItem("userToken", res.data.token);
      setIsLoggedIn(true);
    } catch (err) {
      err.response.data && setErr(err.response.data);
    }
  };

  return (
    <div>
      <div className="Login">
        <h1>Login</h1>
        <form onSubmit={loginForm}>
          <div>
            <input
              onChange={inputHandler}
              type="email"
              name="email"
              value={user.email}
              placeholder="Email"
              required
            />
          </div>
          <div>
            <input
              onChange={inputHandler}
              type="password"
              name="password"
              value={user.password}
              placeholder="password"
              required
            />
          </div>
          <button type="submit">Login</button>
          <h2>{err}</h2>
        </form>
        <p>
          You don't have an account. <span>Register</span>
        </p>
      </div>
      <div className="Register">
        <h1>Register</h1>
        <form onSubmit={registerForm}>
          <div>
            <input
              onChange={inputHandler}
              type="email"
              name="email"
              value={user.email}
              placeholder="Email"
              required
            />
          </div>
          <div>
            <input
              onChange={inputHandler}
              type="text"
              name="username"
              value={user.username}
              placeholder="Username"
              required
            />
          </div>
          <div>
            <input
              onChange={inputHandler}
              type="password"
              name="password"
              value={user.password}
              placeholder="password"
              required
            />
          </div>
          <button type="submit">Register</button>
          <h2>{err}</h2>
        </form>
      </div>
    </div>
  );
};

export default Login;
