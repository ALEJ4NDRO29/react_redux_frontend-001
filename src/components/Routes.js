import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home/index";

class Routes extends Component {
    render() {
        return(
            <Switch>
                <Route path="/test">Test</Route>
                <Route path="/" component={Home} />
            </Switch>
        );
    }
}

export default Routes;