import React from "react";
import { connect } from "react-redux";
import { INPUT_COMMENT_HOTEL_DETAILS_LOADED, HOTEL_COMMENT_CREATE } from "../../constants";
import { Button, ButtonToolbar, Form } from "react-bootstrap";
import agent from "../../agent";
import { Link } from "react-router-dom";


const mapStateToProps = state => ({
    currentUser: state.common.currentUser,
});

const mapDispatchToProps = dispatch => ({
    onLoad: () =>
        dispatch({ type: INPUT_COMMENT_HOTEL_DETAILS_LOADED }),
    onComment: (payload) =>
        dispatch({ type: HOTEL_COMMENT_CREATE, payload }),
});

class CommentHotelInput extends React.Component {
    constructor(props) {
        super(props);
        this.props.onLoad();
        this.state = {
            comment: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.onComment = this.onComment.bind(this);
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onComment() {
        if (this.state.comment !== '') {
            var hotelId = this.props.hotelId;
            var comment = this.state.comment;

            var toSend = {
                "comment": {
                    "body": comment
                }
            }
   
            console.log('tosend', toSend);
            
            this.props.onComment(agent.Hotels.postComment(hotelId, toSend));
            this.myFormRef.reset();
        }
    }

    render() {
        if (this.props.currentUser) {
            // var username = (props.currentUser) ? props.currentUser.username : "";
            return (
                <div>
                    <Form ref={(el) => this.myFormRef = el}>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" name="comment" onChange={this.handleChange} placeholder="Comment..." rows="3" />
                        </Form.Group>
                    </Form>
                    <ButtonToolbar>
                        <Button variant="outline-dark" onClick={this.onComment} className="btn-block">Comment</Button>
                    </ButtonToolbar>
                </div>
            );
        }
        return <Link to="/login">Login for comment</Link>;

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentHotelInput);