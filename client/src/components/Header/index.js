import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';
import logo from '../../logo.png';
import '../../index.css';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="bg-primary text-light mb-4 pb-3 align-center">
      
        {/* Top nav bar buttons */}
        <div className="container-fluid">
          <div className="row text-right">
              <div className="col-12 text-end navBar">
                    <Link to="/" className="navLink rightBorder">Welcome</Link>
                    <Link to="/" className="navLink rightBorder">Home</Link>
                    <Link to="/login" className="navLink">Logout</Link>
              </div>
          </div>
          {/* Logo */}
          <div className="row">
              <div className="col-12 text-center p-5">
                <h1 className="mainTitle"><img className="homeLogo" src={logo}></img> TripBook</h1>
              </div>
          </div>
        </div>


      <div className="container flex-row justify-space-between-lg justify-center align-center">

        <div>
          {Auth.loggedIn() ? (
            <>
              <span>Hey there, {Auth.getProfile().data.username}!</span>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/login">
                Login
              </Link>
              <Link className="btn btn-lg btn-light m-2" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
