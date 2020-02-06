import React from "react";
import { connect } from "react-redux";


const mapStateToProps = state => ({
        // hotel: state.hotelList.hotel
});

const mapDispatchToProps = dispatch => ({
    // onLoad: (payload) =>
    //     dispatch({ type: HOTEL_DETAILS_LOADED, payload }),
});

class CommentHotelInput extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return null;
    }
}

export default connect()(CommentHotelInput);