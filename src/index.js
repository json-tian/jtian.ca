import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App.js";

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
