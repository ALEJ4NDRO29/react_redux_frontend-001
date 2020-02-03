import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { UPDATE_FIELD_AUTH, REGISTER, REGISTER_PAGE_UNLOADED } from "../../constants/actionTypes";
import agent from '../../agent';
import { connect } from "react-redux";

const mapStateToProps = state => ({ 
    ...state.auth
});

const mapDispatchToProps = dispatch => ({
    onChangeEmail: value =>
      dispatch({ type: UPDATE_FIELD_AUTH, key: 'email', value }),
    onChangePassword: value =>
      dispatch({ type: UPDATE_FIELD_AUTH, key: 'password', value }),
    onChangeUsername: value =>
      dispatch({ type: UPDATE_FIELD_AUTH, key: 'username', value }),
    onSubmit: (username, email, password) => {
      const payload = agent.Auth.register(username, email, password);
      dispatch({ type: REGISTER, payload })
    },
    onUnload: () =>
      dispatch({ type: REGISTER_PAGE_UNLOADED })
});

class Register extends Component {
    constructor() {
        super();
        this.changeEmail = ev => this.props.onChangeEmail(ev.target.value);
        this.changePassword = ev => this.props.onChangePassword(ev.target.value);
        this.changeUsername = ev => this.props.onChangeUsername(ev.target.value);
        this.submitForm = (username, email, password) => ev => {
          ev.preventDefault();
          this.props.onSubmit(username, email, password);
        }
    }

    UNSAFE_componentWillUnmount() {
        this.props.onUnload();
    }

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

export default connect (mapStateToProps, mapDispatchToProps)(Register);