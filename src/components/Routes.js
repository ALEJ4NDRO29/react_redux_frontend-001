import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home/index";
import HotelDetails from "./hotels/HotelDetails";
import Login from "./login/Login";
import Register from "./register/Register";
import { connect } from "react-redux";
import { APP_LOAD, REDIRECT } from "../constants";
import { push } from "react-router-redux";
import agent from "../agent";
import store from "../store";

    const mapStateToProps = state => {
        return {
            appLoaded: state.common.appLoaded,
            appName: state.common.appName,
            currentUser: state.common.currentUser,
            redirectTo: state.common.redirectTo
        }
    };
  
    const mapDispatchToProps = dispatch => ({
        onLoad: (payload, token) =>
            dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
        onRedirect: () =>
            dispatch({ type: REDIRECT })
    });


class Routes extends Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.redirectTo) {
          // this.context.router.replace(nextProps.redirectTo);
          store.dispatch(push(nextProps.redirectTo));
          this.props.onRedirect();
        }
    }

    componentWillMount() {
        const token = window.localStorage.getItem('jwt');
        if (token) {
          agent.setToken(token);
        }
    
        this.props.onLoad(token ? agent.Auth.current() : null, token);
    }

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

export default connect(mapStateToProps, mapDispatchToProps)(Routes);