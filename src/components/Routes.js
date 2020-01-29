import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home/index";
import HotelDetails from "./hotels/HotelDetails";

class Routes extends Component {
    render() {
        return(
            <Switch>
                <Route path="/test">Test</Route>
                <Route path="/hotels/:id" component={HotelDetails}/>
                <Route path="/" component={Home} />
            </Switch>
        );
    }
}

export default Routes;