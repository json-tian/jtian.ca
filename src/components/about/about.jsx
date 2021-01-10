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
              <p className="about">
                I'm Jason Tian, a Computer Science student specializing in
                Software Engineering at the University of Toronto. I enjoy
                participating in hackathons, chess tournaments, and playing
                guitar.
              </p>
              <br />
              <p className="about">
                This site is used to organize some of the projects I've worked
                on.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
