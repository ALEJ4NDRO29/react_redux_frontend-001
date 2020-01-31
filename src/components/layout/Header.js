import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {

    render() {
        return (
            // TODO : Bootstrap nav
            <header>
                <Link to="/">Home</Link> {' '}
                <Link to="/login">Login</Link> {' '}
                <Link to="/register">Register</Link> {' '}
            </header>
        );
    }

}

export default Header;