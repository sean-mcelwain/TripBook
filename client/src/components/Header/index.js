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
    <header className="bg-primary text-light align-center">
      {/* Top nav bar buttons */}
      <div className="container-fluid">
        <div className="row text-right">
          <div className="col-12 text-end navBar">
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
        <div className="row">
          <div className="col-12 text-center p-5">
            <Link to="/" className="mainTitle">
              <img
                className="homeLogo"
                onClick="window.location.href= /pages/home.js'"
                src={logo}
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
