import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header/header";
import Title from "./components/title/title";
import ReallySmoothScroll from "really-smooth-scroll";
import App from "./App.js";

ReallySmoothScroll.shim();

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Title />
        <App />
      </div>
    );
  }
}

//Renders counter component based what that component returns
ReactDOM.render(<Main />, document.getElementById("root"));
registerServiceWorker();
