import React, { Component } from "react";
import { Link } from "react-router-dom";

//<Link to="/">Home</Link>;
class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" aria-current="page" to="/user">
                Users
              </Link>
              <Link className="nav-link" to="/item">
                Items
              </Link>
              <Link className="nav-link" to="/lending">
                Lendings
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
