import React, { Component } from "react";
import Project from "../project/project.jsx";
import "./portfolio.css";

class Portfolio extends Component {
  state = {
    data: {
      Projects: [
        {
          timetablebuilder: {
            name: "Automatic Timetable Builder",
            description:
              "Generates conflict-free timetables with a click of a button! Made using React & GraphQL. 2020 Slash GraphQL Hackathon 3rd Place project.",
            linksURL: [
              "https://github.com/tianjason6/timetable-builder",
              "https://tianjason6.github.io/timetable-builder"
            ],
            linksICON: ["fa fa-github fa-3x", "fas fa fa-play fa-3x"],
            imageURL: "images/timetablebuilder.PNG"
          },
          utscprojects: {
            name: "UTSC Projects",
            description:
              "A collaboration with University of Toronto students and alumni to create an application for students to share and post their projects and start-ups. Made with Firebase and React Redux.",
            linksURL: [
              "https://github.com/tianjason6/utsc-project",
              "http://tianjason6.github.io/utsc-project"
            ],
            linksICON: ["fa fa-github fa-3x", "fas fa fa-play fa-3x"],
            imageURL: "images/utscproject.PNG"
          },
          chessclock: {
            name: "Chess Clock Mobile",
            description:
              "Ordinary chess clocks are expensive, difficult, and hard to carry around. This project was inspired by the lack of features of other chess clock applicatons \
            such as timeodds and custom increments. Made with Java in Android Studio.",
            linksURL: [
              "https://github.com/tianjason6/Chess-Clock-Pro",
              "https://play.google.com/store/apps/details?id=knightsoul.chessclockv2"
            ],
            linksICON: ["fa fa-github fa-3x", "fas fa fa-android fa-3x"],
            imageURL: "images/chessclock1.png"
          },
          spacekittens: {
            name: "Space Kittens",
            description:
              "Space Kittens is a retro chain reaction game for Android devices that features over 80 unique levels. Can you beat them all?",
            linksURL: [
              "https://play.google.com/store/apps/details?id=knightsoul.SpaceKittens",
              "https://www.youtube.com/watch?v=vsSWs31ec9c"
            ],
            linksICON: ["fas fa fa-android fa-3x", "fas fa fa-youtube fa-3x"],
            imageURL: "images/spacekittens1.png"
          },
          frogger: {
            name: "AI Learns to Play Frogger",
            description:
              "Watch an AI learn how to play Frogger. This was created in Pygame with a simple genetic algorithm.",
            linksURL: [
              "https://www.youtube.com/watch?v=LAqr7cBbOks&t=3s",
              "https://github.com/tianjason6/Frogger-AI"
            ],
            linksICON: ["fas fa fa-youtube fa-3x", "fa fa-github fa-3x"],
            imageURL: "images/frogger1.png"
          },
          newsarticlescraper: {
            name: "News Article Aggregator",
            description:
              "News aggregation by news source and category using RSS feeds & JSoup. It also ranks the articles by interest by skimming over article keywords.",
            linksURL: [
              "https://github.com/tianjason6/News-Feed-RSS-Scraper",
              ""
            ],
            linksICON: ["fa fa-github fa-3x", ""],
            imageURL: "images/articleselector3.png"
          },
          minesweep: {
            name: "Auto-Generated Minesweeper",
            description:
              "Generates a Minesweeper game on-command with a starter board with varying difficulty. A simple HTML-Javascript game I built when I first started learning.",
            linksURL: ["https://github.com/tianjason6/MineSweep", ""],
            linksICON: ["fa fa-github fa-3x", ""],
            imageURL: "images/minesweep.png"
          },
          saveme: {
            name: "Tower Conqueror Demo",
            description:
              "A Tower Defence Unity3D game made for Google Cardboard VR.",
            linksURL: ["https://github.com/tianjason6/Tower-Conqueror", ""],
            linksICON: ["fa fa-github fa-3x", ""],
            imageURL: "images/towerconqueror.png"
          },
          chesstrends: {
            name: "Chess Trends",
            description:
              "Web scraping script to automatically fetch data on Lichess.org and Chess.com every hour and store them into a spreadsheet.",
            linksURL: [
              "https://github.com/tianjason6/Google-Sheets-Scripts",
              "https://docs.google.com/spreadsheets/d/1enQ5aatLL3LsUVYKeuNZbD7i5GMBGS38GGZ4nVA6Pjw/edit?usp=sharing"
            ],
            linksICON: ["fa fa-github fa-3x", "fa fa-file-o fa-3x"],
            imageURL: "images/chesstrends.png"
          },
          chessify: {
            name: "Chessify",
            description:
              "Machine learning to predict the outcome of an online chess game given player rating and time control. Made using Tensorflow, Pandas in Python.",
            linksURL: ["https://github.com/tianjason6/Chessify", ""],
            linksICON: ["fa fa-github fa-3x"],
            imageURL: "images/chessify.png"
          },
          mplrenewal: {
            name: "Markham Public Library Auto-renewal",
            description:
              "Online library book renewal, with quite literally a click of a button. Made using Selenium in Java.",
            linksURL: ["https://github.com/tianjason6/MPL_Renewal", ""],
            linksICON: ["fa fa-github fa-3x"],
            imageURL: "images/mpl.png"
          }
        }
      ]
    }
  };
  render() {
    return (
      <div>
        <div id="portfolio">
          <div className="jumbotron">
            <h3 className="heading">Projects</h3>
            <div className="row padding edgepadding">
              <Project data={this.state.data.Projects[0].timetablebuilder} />
              <Project data={this.state.data.Projects[0].utscprojects} />

              <Project data={this.state.data.Projects[0].chessclock} />
              <Project data={this.state.data.Projects[0].chesstrends} />

              <Project data={this.state.data.Projects[0].spacekittens} />
              <Project data={this.state.data.Projects[0].chessify} />
              <Project data={this.state.data.Projects[0].mplrenewal} />

              <Project data={this.state.data.Projects[0].frogger} />
              <Project data={this.state.data.Projects[0].newsarticlescraper} />
              <Project data={this.state.data.Projects[0].minesweep} />
            </div>
          </div>
        </div>
        <script type="text/javascript">
          var sc_project = 11648857; var sc_invisible = 1; var sc_security =
          "31f3d70b";
        </script>
        <script
          type="text/javascript"
          src="https://www.statcounter.com/counter/counter.js"
          async
        ></script>
        <noscript>
          <div class="statcounter">
            <a
              title="Web Analytics"
              href="https://statcounter.com/"
              target="_blank"
            >
              <img
                class="statcounter"
                src="https://c.statcounter.com/11648857/0/31f3d70b/1/"
                alt="Web Analytics"
              />
            </a>
          </div>
        </noscript>
      </div>
    );
  }
}

export default Portfolio;
