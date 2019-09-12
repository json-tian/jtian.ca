import React, { Component } from "react";
import Title from "../title/title.jsx";
import "./about.css";

class About extends Component {
  render() {
    return (
      <div>
        <Title />
        <div id="about">
          <div className="jumbotron">
            <h3 className="heading">About Me</h3>
            <div className="content edgepadding">
              <p className="about">I'm Jason Tian, a Computer Science student specializing in Software Engineering at the University of Toronto.
                During my studies, I enjoy working on my sideprojects and getting involved through hackathons and volunteering around campus.
              </p>
              <br />
              <p className="about">
                This site is used to organize some of the sideprojects I worked on.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
