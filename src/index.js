import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import ReallySmoothScroll from "really-smooth-scroll";
import App from "./App.js";

ReallySmoothScroll.shim();

class Main extends React.Component {
  render() {
    return (
      <div>
        <App />
      </div>
    );
  }
}

//Renders counter component based what that component returns
ReactDOM.render(<Main />, document.getElementById("root"));
registerServiceWorker();
