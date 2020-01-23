import React, { Component } from "react";
import { Card } from "react-bootstrap";

class HotelPreview extends Component {
    render() {
        return (
            <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{props.hotel.name}</Card.Title>
                    <Card.Text>
                        {props.hotel.starts} * <br />
                        {props.hotel.location}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default HotelPreview;