import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import About from "./components/about/about";
import Portfolio from "./components/portfolio/portfolio";

class App extends Component {
    render() {
        let routes = (
            <BrowserRouter>
                <Switch>
                    <Route path="/About" component={About} />
                    <Route path="/" exact component={Portfolio} />
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        );
        return (
            <div>
                {routes}
            </div>
        );
    }
}
export default App;
