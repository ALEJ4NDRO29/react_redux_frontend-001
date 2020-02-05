import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import agent from "../../agent";
import { LOGIN, LOGIN_PAGE_UNLOADED } from "../../constants";
import { connect } from "react-redux";

const mapStateToProps = state => ({ 
    ...state.auth
});

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (email, password) => {
      const payload = agent.Auth.login(email, password);
      dispatch({ type: LOGIN, payload })
    },
    onUnload: () =>
      dispatch({ type: LOGIN_PAGE_UNLOADED })
});

class Login extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            email: '',
            password: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        var email = this.state.email;
        var password = this.state.password;

        this.props.onSubmit(email, password);
    }

    render() {
        return (
            <div>
                <h1>Login</h1>

                <Form onSubmit={this.onSubmit}>
                <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            onChange={this.handleChange}
                            name="email"
                            type="text"
                            placeholder="Enter email" 
                            autoComplete="disabled"/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            onChange={this.handleChange}
                            name="password" 
                            type="password" 
                            placeholder="Password" />
                    </Form.Group>
                    <Button variant="outline-dark" className="btn-block" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);