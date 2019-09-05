import React, { Component } from "react";
import Project from "../project/project.jsx"
import Title from "../title/title.jsx"

class Portfolio extends Component {
  state = {
    data: {
      Projects: [
        {
          chessclock: {
            name: "Chess Clock for Mobile",
            description: "Tired of using a physical chess clock? This Android application keeps track of time in a chess game.",
            linksURL: ["https://github.com/tianjason6/Chess-Clock-Pro", "https://play.google.com/store/apps/details?id=knightsoul.chessclockv2"],
            linksICON: ["fa fa-github fa-3x", "fas fa fa-android fa-3x"],
            imageURL: "images/chessclock1.png"
          },
          spacekittens: {
            name: "Space Kittens",
            description: "A retro chain reaction video game created for Android devices.",
            linksURL: ["https://play.google.com/store/apps/details?id=knightsoul.SpaceKittens", "https://www.youtube.com/watch?v=vsSWs31ec9c"],
            linksICON: ["fas fa fa-android fa-3x", "fas fa fa-youtube fa-3x"],
            imageURL: "images/spacekittens1.png"
          },
          frogger: {
            name: "Frogger AI Learner",
            description: "Watch a machine learn how to play Frogger! This was created with a simple genetic algorithm. The Frogger game was created in Pygame.",
            linksURL: ["https://www.youtube.com/watch?v=LAqr7cBbOks&t=3s", "https://github.com/tianjason6/Frogger-AI"],
            linksICON: ["fas fa fa-youtube fa-3x", "fa fa-github fa-3x"],
            imageURL: "images/frogger1.png"
          },
          newsarticlescraper: {
            name: "News Article Aggregator",
            description: "News aggregation by news source and category using RSS feeds & JSoup. Ranks the articles by interest by skimming over article keywords.",
            linksURL: ["https://github.com/tianjason6/News-Feed-RSS-Scraper", ""],
            linksICON: ["fa fa-github fa-3x", ""],
            imageURL: "images/articleselector3.png"
          },
          minesweep: {
            name: "Auto-Generated Minesweeper",
            description: "Generates a Minesweeper game on-command with a starter board. A simple HTML-Javascript game I built for myself.",
            linksURL: ["https://github.com/tianjason6/MineSweep", ""],
            linksICON: ["fa fa-github fa-3x", ""],
            imageURL: "images/minesweep.png"
          }
        }
      ]
    }
  }
  render() {
    return (
      <div>
        <Title />
        <div id="portfolio">
          <div className="jumbotron">
            <h3 className="heading">Projects</h3>
            <div className="row padding edgepadding">
              <Project data={this.state.data.Projects[0].chessclock} />
              <Project data={this.state.data.Projects[0].spacekittens} />
              <Project data={this.state.data.Projects[0].frogger} />
              <Project data={this.state.data.Projects[0].newsarticlescraper} />
              <Project data={this.state.data.Projects[0].minesweep} />

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;