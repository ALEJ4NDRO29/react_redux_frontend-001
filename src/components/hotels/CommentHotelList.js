import React from 'react';
import { connect } from 'react-redux';
import { Card } from "react-bootstrap";

const CommentHotelList = props => {    
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.comment.profile.username}</Card.Title>
          <pre>{props.comment.body}</pre>
      </Card.Body>
    </Card>
  );
}

export default connect(() => ({}))(CommentHotelList);