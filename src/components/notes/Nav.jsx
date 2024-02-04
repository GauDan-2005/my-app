import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ setIsLoggedIn }) => {
  const logoutHandler = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };
  return (
    <header>
      <div className="logo">
        <h1>
          <Link to="/">Keeper</Link>
        </h1>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create">Create Note</Link>
        </li>
        <li onClick={logoutHandler}>
          <Link to="/">Logout</Link>
        </li>
      </ul>
    </header>
  );
};

export default Nav;
