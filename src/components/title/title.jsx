import React, { Component } from "react";

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
            <h2>Hello! I'm Jason.</h2>
            <h3>Developer | Chess Enthusiast | Blogger</h3>
            <div class="links">
              <a
                href="https://github.com/tianjason6"
                class="fa fa-github fa-3x"
              />
              <a
                href="https://www.linkedin.com/in/jasontian6/"
                class="fa fa-linkedin fa-3x"
              />
              <a
                href="https://www.chess.com/member/knightsoul1"
                class="fas fa-chess-pawn fa-3x"
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
