import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

class Header extends Component {

    render() {
        return (
            <header>
                <Navbar bg="dark" variant="dark">
                    <Nav defaultActiveKey="/home" as="ul">
                        <Nav.Item as="li">
                            {/* <Nav.Link> FIXME <a> inside <a> */}
                                <Link to="/">Home</Link>
                            {/* </Nav.Link> */}
                        </Nav.Item>
                        <Nav.Item as="li">
                            {/* <Nav.Link> */}
                                <Link to="/login">Login</Link>
                            {/* </Nav.Link> */}
                        </Nav.Item>
                        <Nav.Item as="li">
                            {/* <Nav.Link> */}
                                <Link to="/register">Register</Link>
                            {/* </Nav.Link> */}
                        </Nav.Item>
                        <span className="text-right">
                            {/* TODO : REDUX VALUE */}
                            USERNAME
                        </span>
                    </Nav>
                </Navbar>
            </header>
        );
    }

}

export default Header;