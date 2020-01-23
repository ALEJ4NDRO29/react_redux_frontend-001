import React, { Component } from "react";
import { Card } from "react-bootstrap";

class HotelPreview extends Component {
    render() {
        return (
            <Card>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{this.props.hotel.name}</Card.Title>
                    <Card.Text>
                        {this.props.hotel.starts} * <br />
                        {this.props.hotel.location}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}

export default HotelPreview;