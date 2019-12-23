import React, { Component } from "react";
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            Start Bootstrap
          </a>
          <div className="navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/content/wknd-events/react/home.html">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/content/wknd-events/react/about.html">About</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
