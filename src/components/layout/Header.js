import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { HEADER_LOADED } from "../../constants";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    currentUser: state.common.currentUser,
});

const mapDispatchToProps = dispatch => ({
    onLoad: () =>
        dispatch({ type: HEADER_LOADED }),
});

class Header extends Component {
    constructor(props) {
        super(props)
        this.props.onLoad()
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.currentUser !== this.props.currentUser) {
            return true;
        }
        return false;
    }

    render() {
        var username = (this.props.currentUser) ? this.props.currentUser.username : " ";
        return (
            <header>
                <Navbar bg="dark" variant="dark">
                    <Nav defaultActiveKey="/home" as="ul">
                            <div className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </div>
                            <div className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                            </div>            
                            <div className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                            </div>
                        <Navbar.Collapse className="justify-content-end">
                            <Navbar.Text>
                            Signed in as: <a href="#login">{username}</a>
                            </Navbar.Text>
                        </Navbar.Collapse>
                        <span className="text-right">
                            {/* TODO : REDUX VALUE */}
                            
                        </span>
                    </Nav>
                </Navbar>
            </header>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Header);