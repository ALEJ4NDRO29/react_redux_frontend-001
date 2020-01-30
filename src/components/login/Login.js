import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

class Login extends Component {
    render() {
        return (
            <div>
                <h1>Login</h1>

                <Form>
                    <Form.Group>
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="text" placeholder="Username..." />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="outline-dark" className="btn-block" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Login;