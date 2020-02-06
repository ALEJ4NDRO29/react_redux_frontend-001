import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
import agent from "../agent";
import { APP_LOAD, REDIRECT, JWT_STORAGE_KEY } from "../constants";
import Home from "./home/index";
import HotelDetails from "./hotels/HotelDetails";
import Login from "./login/Login";
import Register from "./register/Register";

const mapStateToProps = state => {
    return {
        appLoaded: state.common.appLoaded,
        appName: state.common.appName,
        currentUser: state.common.currentUser,
        redirectTo: state.common.redirectTo
    };
};

const mapDispatchToProps = dispatch => ({
    onLoad: (payload, token) =>
        dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
    onRedirect: () =>
        dispatch({ type: REDIRECT })
});


class Routes extends Component {

    constructor(props){
        super(props);

        const token = window.localStorage.getItem(JWT_STORAGE_KEY);
        if (token) {
            agent.setToken(token);
        }
    
        this.props.onLoad(token ? agent.Auth.current() : null, token);
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.redirectTo && nextProps.redirectTo !== this.props.location.pathname) {
            this.props.history.push(nextProps.redirectTo);
            return true;
        }
        return false;
    }

    render() {
        return (
            <Switch>
                <Route path="/test">Test</Route>
                <Route path="/hotels/:id" component={HotelDetails} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/" component={Home} />
            </Switch>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));