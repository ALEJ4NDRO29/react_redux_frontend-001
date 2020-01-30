import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home/index";
import HotelDetails from "./hotels/HotelDetails";
import Login from "./login/Login";
import Register from "./register/Register";

class Routes extends Component {
    render() {
        return(
            <Switch>
                <Route path="/test">Test</Route>
                <Route path="/hotels/:id" component={HotelDetails}/>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/" component={Home} />
            </Switch>
        );
    }
}

export default Routes;