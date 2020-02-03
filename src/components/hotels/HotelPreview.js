import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card } from "react-bootstrap";

const HotelPreview = props => {
  return (
    <Card>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{props.hotel.name}</Card.Title>
        <Card.Text>
          {props.hotel.stars} * <br />
          {props.hotel.location}
        </Card.Text>
      </Card.Body>
      <Link to={`/hotels/${props.hotel.id}`} className="preview-link">
        <span>Read more...</span>
      </Link>
    </Card>
  );
}

export default connect(() => ({}))(HotelPreview);