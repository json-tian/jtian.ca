import React, { Component } from "react";
import Project from "../project/project.jsx"
import "./portfolio.css";

class Portfolio extends Component {
  state = {
    data: {
      Projects: [
        {
          chessclock: {
            name: "Chess Clock for Mobile",
            description: "Ordinary chess clocks are expensive, difficult, and hard to carry around. This project was inspired by the lack of features of other chess clock applicatons \
            such as timeodds and custom increments.",
            linksURL: ["https://github.com/tianjason6/Chess-Clock-Pro", "https://play.google.com/store/apps/details?id=knightsoul.chessclockv2"],
            linksICON: ["fa fa-github fa-3x", "fas fa fa-android fa-3x"],
            imageURL: "images/chessclock1.png"
          },
          spacekittens: {
            name: "Space Kittens",
            description: "Space Kittens is a retro chain reaction game for Android devices that features over 80 unique levels. Can you beat them all?",
            linksURL: ["https://play.google.com/store/apps/details?id=knightsoul.SpaceKittens", "https://www.youtube.com/watch?v=vsSWs31ec9c"],
            linksICON: ["fas fa fa-android fa-3x", "fas fa fa-youtube fa-3x"],
            imageURL: "images/spacekittens1.png"
          },
          frogger: {
            name: "AI Learns to Play Frogger",
            description: "Watch an AI learn how to play Frogger. This was created in Pygame with a simple genetic algorithm.",
            linksURL: ["https://www.youtube.com/watch?v=LAqr7cBbOks&t=3s", "https://github.com/tianjason6/Frogger-AI"],
            linksICON: ["fas fa fa-youtube fa-3x", "fa fa-github fa-3x"],
            imageURL: "images/frogger1.png"
          },
          newsarticlescraper: {
            name: "News Article Aggregator",
            description: "News aggregation by news source and category using RSS feeds & JSoup. It also ranks the articles by interest by skimming over article keywords.",
            linksURL: ["https://github.com/tianjason6/News-Feed-RSS-Scraper", ""],
            linksICON: ["fa fa-github fa-3x", ""],
            imageURL: "images/articleselector3.png"
          },
          minesweep: {
            name: "Auto-Generated Minesweeper",
            description: "Generates a Minesweeper game on-command with a starter board with varying difficulty. A simple HTML-Javascript game I built when I first started learning.",
            linksURL: ["https://github.com/tianjason6/MineSweep", ""],
            linksICON: ["fa fa-github fa-3x", ""],
            imageURL: "images/minesweep.png"
          },
          saveme: {
            name: "Tower Conqueror Demo",
            description: "A Tower Defence Unity3D game made for Google Cardboard VR.",
            linksURL: ["https://github.com/tianjason6/Tower-Conqueror", ""],
            linksICON: ["fa fa-github fa-3x", ""],
            imageURL: "images/towerconqueror.png"
          }
        }
      ]
    }
  }
  render() {
    return (
      <div>
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
