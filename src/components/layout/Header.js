import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import { HEADER_LOADED, LOGOUT } from "../../constants";
import { connect } from "react-redux";

const mapStateToProps = state => ({
    currentUser: state.common.currentUser,
});

const mapDispatchToProps = dispatch => ({
    onLoad: () =>
        dispatch({ type: HEADER_LOADED }),
    logout: () => 
        dispatch({ type: LOGOUT }),
});

const NotUserLogged = props => {
    if (!props.currentUser) {
        return (
            <div>
                <div className="in-block nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </div>            
                <div className="in-block nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                </div>
            </div>
        );
    }
    return null;
}


const UserLogged = props => {
    if (props.currentUser) {
        console.log('logged');

        var username = (props.currentUser) ? props.currentUser.username : "";
        return (
            <Navbar.Collapse className="in-block justify-content-end">
                <Navbar.Text>
                Signed in as: {username}
                </Navbar.Text>

                <div className="in-block nav-item">
                    <span onClick={() => props.logout()} className="nav-link cursor-pointer">Logout</span>
                </div>
            </Navbar.Collapse>
        );
    }
    return null;
}

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
        return (
            <header>
                <Navbar bg="dark" variant="dark">
                    <Nav defaultActiveKey="/home" as="ul">
                        <div className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </div>

                        <UserLogged currentUser={this.props.currentUser} logout={this.props.logout}/>
                        <NotUserLogged currentUser={this.props.currentUser}/>
                    </Nav>
                </Navbar>
            </header>


            // <div>
            //     <NotUserLogged currentUser={this.props.currentUser}/>
            //     <UserLogged currentUser={this.props.currentUser}/>
            // </div>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Header);