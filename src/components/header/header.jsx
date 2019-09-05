
import React, { Component } from "react";
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div>
        <div id="home">
          <nav className="navbar navbar-dark navbar-expand-md fixed-top">
            <div className="container-fluid">
              <a className="navbar-brand">
                <NavLink to={'/'} exact>
                  <img src="img/me.png" />
                </NavLink>
              </a>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link">
                    <NavLink to={'/About'} exact>
                      <b>About</b>
                    </NavLink>
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link">
                    <NavLink to={'/'} exact>
                      <b>Projects</b>
                    </NavLink>
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link" href="http://www.github.com/tianjason6" target="/">
                    <b>GitHub</b>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div >
    );
  }
}

export default Header;
