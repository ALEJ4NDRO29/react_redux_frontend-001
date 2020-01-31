import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { connect } from "react-redux";


const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => ({

})

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

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        if (this.state.password && this.state.password === this.state.password2) {
            console.log('OKOKOKOK');
        } else {
            console.log('INVALIDPASS');
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
                            placeholder="Enter username" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control 
                            onChange={this.handleChange} 
                            name="email" 
                            type="email" 
                            placeholder="Enter email" />
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