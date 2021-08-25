import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";
import logo from "../../logo.png";
import "../../index.css";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="header">
      {/* Top nav bar buttons */}
      <div className="container-fluid">
        <div className="row text-right">
          <div className="navBar">
            {Auth.loggedIn() ? (
              <>
                <span className="navLink rightBorder">
                  Welcome {Auth.getProfile().data.username}!
                </span>
                <button className="navLink rightBorder" onClick={logout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link className="navLink rightBorder" to="/login">
                  Login
                </Link>
                <Link className="navLink rightBorder" to="/signup">
                  Signup
                </Link>
              </>
            )}
            <Link to="/" className="navLink rightBorder">
              Home
            </Link>
          </div>
        </div>
        {/* Logo */}
        <div>
          <div className="mainTitle">
            <Link to="/">
              <img
                className="homeLogo"
                onClick="window.location.href= /pages/home.js'"
                src={logo}
                alt="homeLogo"
              ></img>{" "}
              TripBook
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
