import React, { Component } from "react";

class About extends Component {
  state = {};
  render() {
    return (
      <div>
        <div id="about">
          <div className="jumbotron">
            <h3 className="heading">About Me</h3>
            <div className="content edgepadding">
              <p>I am a CMS student at the University of Toronto.</p>
              <br />
              <p>
                I have gotten my feet wet with several different languages and
                technologies but I am most familiar with Java, Python, and
                Android development.
              </p>
              <br />
              <p>
                Other than that, I spend a lot of my free time playing chess
                online.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
