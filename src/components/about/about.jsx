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
              <p>I am a Computer Science student specializing in Software Engineering at the University of Toronto.</p>
              <br />
              <p>This is where I showcase some of the side projects I have worked on.
              </p>
              <br />
              <p>
                I also love to play chess! Challenge me on Chess.com!
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
