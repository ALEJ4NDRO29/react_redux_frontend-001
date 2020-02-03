import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { UPDATE_FIELD_AUTH, REGISTER, REGISTER_PAGE_UNLOADED } from "../../constants/actionTypes";
import agent from '../../agent';
import { connect } from "react-redux";

const mapStateToProps = state => ({ 
    ...state.auth
});

const mapDispatchToProps = dispatch => ({
    onSubmit: (username, email, password) => {
      const payload = agent.Auth.register(username, email, password);
      dispatch({ type: REGISTER, payload })
    },
    onUnload: () =>
      dispatch({ type: REGISTER_PAGE_UNLOADED })
});

class Register extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            username: '',
            email: '',
            password: '',
            password2: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }



    onSubmit(e) {
        e.preventDefault();
        if (this.state.password && this.state.password === this.state.password2) {
            console.log('OKOKOKOK');
            var username = this.state.username;
            var email = this.state.email;
            var password = this.state.password;
            
            this.props.onRegister(agent.Auth.register({ username, email, password }));
        } else {
            console.log('INVALIDPASS');
            // TODO : Toastr error
        }
    }

    render() {
        return (
            <div>
                <h1>Register</h1>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            onChange={this.handleChange}
                            name="username"
                            type="text"
                            placeholder="Enter username" 
                            autoComplete="disabled"/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            onChange={this.handleChange} 
                            name="email" 
                            type="email" 
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

                    <Form.Group>
                        <Form.Label>Repeat password</Form.Label>
                        <Form.Control 
                            onChange={this.handleChange} 
                            name="password2" 
                            type="password" 
                            placeholder="Repeat password" />
                    </Form.Group>
                    <Button variant="outline-dark" className="btn-block" type="submit">
                        Register
                    </Button>
                </Form>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);