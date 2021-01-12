import React, { Component } from "react";
import "./title.css";

class Title extends Component {
  render() {
    return (
      <div>
        <div className="landing">
          <div className="home-wrap">
            <div className="home-inner" />
          </div>
        </div>
        <div class="Intro">
          <div class="caption center-block text-center">
            <img src="img/me.jpg" className="me" />
            <h4>Jason Tian</h4>
            <h4>jas.tian @ mail.utoronto.ca</h4>
            <div class="links">
              <a
                href="https://github.com/tianjason6"
                class="fa fa-github fa-3x"
                target="_blank"
              />
              <a
                href="https://www.linkedin.com/in/jtian6/"
                class="fa fa-linkedin fa-3x"
                target="_blank"
              />
              <a
                href="mailto:jas.tian@mail.utoronto.ca"
                class="fa fa-envelope fa-3x"
              />
            </div>
            <br />
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default Title;
