import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props =>
  <nav className="navbar navbar-default bg-primary">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand whiteColor" to="/">
          Home
        </Link>
      </div>
      <ul className="nav navbar-nav">
        <li>
          <Link className="whiteColor" to="/saved">Saved Articles</Link>
        </li>
      </ul>
    </div>
  </nav>;

export default Navbar;
