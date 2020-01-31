import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class Register extends Component {
    render() {
        return (
            <div>
                <h1>Register</h1>
                <Form>
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Repeat password</Form.Label>
                        <Form.Control type="password" placeholder="Repeat password" />
                    </Form.Group>
                    <Button variant="outline-dark" className="btn-block" type="submit">
                        Register
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Register;