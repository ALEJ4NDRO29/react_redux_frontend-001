import React from 'react';
// import Tags from './Tags';
import agent from '../../agent';
import { connect } from 'react-redux';
import { Spinner } from 'react-bootstrap';
import {
    HOTEL_DETAILS_LOADED,
} from '../../constants/actionTypes';

const Promise = global.Promise;

const mapStateToProps = state => {
    console.log('axant', state);
    return {
      ...state,
      hotel: state.hotelList.hotel
    }

};

const mapDispatchToProps = dispatch => ({
  onLoad: (payload) =>
    dispatch({ type: HOTEL_DETAILS_LOADED, payload }),
});

class HotelDetails extends React.Component {
  componentDidMount() {
    this.props.onLoad(Promise.all([agent.Hotels.get(this.props.match.params.id)]));
  }

  UNSAFE_componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    if(!this.props.hotel) {
      return (<Spinner animation="grow" />)
    }
    return (
      <div>
        <p>{this.props.hotel.name}</p>
        <p>{this.props.hotel.stars}</p>
        <p>{this.props.hotel.location}</p>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelDetails);