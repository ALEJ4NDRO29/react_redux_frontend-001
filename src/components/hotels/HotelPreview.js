import React from 'react';
import { Link } from 'react-router-dom';
// import agent from '../agent';
import { connect } from 'react-redux';
import { Card } from "react-bootstrap";

// import { ARTICLE_FAVORITED, ARTICLE_UNFAVORITED } from '../constants/actionTypes';

// const FAVORITED_CLASS = 'btn btn-sm btn-primary';
// const NOT_FAVORITED_CLASS = 'btn btn-sm btn-outline-primary';

// const mapDispatchToProps = dispatch => ({
//   favorite: slug => dispatch({
//     type: ARTICLE_FAVORITED,
//     payload: agent.Articles.favorite(slug)
//   }),
//   unfavorite: slug => dispatch({
//     type: ARTICLE_UNFAVORITED,
//     payload: agent.Articles.unfavorite(slug)
//   })
// });

const HotelPreview = props => {
  console.log(props);
  
  return (
    <Card>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{props.hotel.name}</Card.Title>
        <Card.Text>
          {props.hotel.stars} * <br />
          {props.hotel.location}
        </Card.Text>

        <Link to={`/hotels/${props.hotel.id}`} className="preview-link">
         <span>Read more...</span>
       </Link>

      </Card.Body>
    </Card>
  );
}

export default connect(() => ({}))(HotelPreview);