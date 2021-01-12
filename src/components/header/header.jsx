import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <div id="home">
          <nav className="navbar navbar-dark navbar-expand-md fixed-top">
            <div className="container-fluid">
              <NavLink to={"/"} exact>
                <a className="navbar-brand">
                  <img src="img/me.jpg" />
                  <a href="" className="title">
                    Jason Tian
                  </a>
                </a>
              </NavLink>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link">
                    <NavLink to={"/About"} exact>
                      <b>About</b>
                    </NavLink>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    <NavLink to={"/"} exact>
                      <b>Projects</b>
                    </NavLink>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
