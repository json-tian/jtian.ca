//uses jsx extension rather than js b/c Better code completion
//imrc to generate react
//cc to generate class
import React, { Component } from "react";

class Header extends Component {
  //Holds all the data we need for this component
  state = {};
  render() {
    //Can't return multiple elements, therefore we can wrap everything in a div. Or use React.fragment, removes the div
    //Curly braces {} can type javascript inside (get state values, do math). In this case we run a method
    //className is used in JSX while JS uses class.
    //badge badge-primary is part of bootstrap. m-2 is margin
    return (
      <div>
        <button onclick="topFunction()" id="myBtn" title="Go to top">
          Top
        </button>
        <script src="top.js" />

        <div id="home">
          <nav className="navbar navbar-dark navbar-expand-md fixed-top">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                <img src="img/me.png" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#menu"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="menu">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link" href="#about">
                      <b>About</b>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#portfolio">
                      <b>Portfolio</b>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div className="landing">
            <div className="home-wrap">
              <div className="home-inner" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
