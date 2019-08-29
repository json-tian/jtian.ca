import React, { Component } from "react";

class Portfolio extends Component {
  state = {};
  render() {
    //Can't return multiple elements, therefore we can wrap everything in a div. Or use React.fragment, removes the div
    //Curly braces {} can type javascript inside (get state values, do math). In this case we run a method
    //className is used in JSX while JS uses class.
    //badge badge-primary is part of bootstrap. m-2 is margin
    return (
      <div>
        <div id="portfolio">
          <div className="jumbotron">
            <h3 className="heading">Projects</h3>
            <div className="row padding edgepadding">
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div className="card text-center">
                  <div className="card-body">
                    <h4>Chess Clock Pro</h4>
                    <p>
                      Tired of using a physical chess clock? This Android
                      application keeps track of time in a chess game.
                    </p>
                    <div className="links">
                      <a
                        href="https://github.com/tianjason6/Chess-Clock-Pro"
                        className="fa fa-github fa-2x"
                      />
                      <a
                        href="https://play.google.com/store/apps/details?id=knightsoul.chessclockv2"
                        className="fas fa fa-android fa-2x"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div className="card text-center">
                  <div className="card-body">
                    <h4>Space Kittens</h4>
                    <p>
                      A retro chain reaction video game created for Android
                      devices.
                    </p>
                    <div className="links">
                      <a
                        href="https://github.com/tianjason6/Space-Kittens"
                        className="fa fa-github fa-2x"
                      />
                      <a
                        href="https://play.google.com/store/apps/details?id=knightsoul.SpaceKittens"
                        className="fas fa fa-android fa-2x"
                      />
                      <a
                        href="https://www.youtube.com/watch?v=vsSWs31ec9c"
                        className="fas fa fa-youtube fa-2x"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <div className="card text-center">
                  <div className="card-body">
                    <h4>Frogger AI</h4>
                    <p>
                      The original Frogger game - but you are not playing! Watch
                      the AI dodge cars and hop over turtles!
                    </p>
                    <div className="links">
                      <a
                        href="https://github.com/tianjason6/Frogger-AI"
                        className="fa fa-github fa-2x"
                      />
                      <a
                        href="https://www.youtube.com/watch?v=LAqr7cBbOks&t=3s"
                        className="fas fa fa-youtube fa-2x"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
