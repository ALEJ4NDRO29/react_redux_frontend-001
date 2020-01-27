import React from 'react';
// import Tags from './Tags';
import agent from '../../agent';
import { connect } from 'react-redux';
import {
    HOTEL_DETAILS_LOADED,
} from '../../constants/actionTypes';

const Promise = global.Promise;

const mapStateToProps = state => {
    console.log('caca state');
    console.log(state);
    
    return {

        ...state,
      hotel: state.hotel
    }
  // appName: state.common.appName,
  // token: state.common.token,
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
    return (
      <div>
        {this.props.hotel}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HotelDetails);