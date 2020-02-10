import React from "react";
import { connect } from "react-redux";


const mapStateToProps = state => ({
    currentUser: state.common.currentUser,
});

const mapDispatchToProps = dispatch => ({
    onLoad: () =>
        dispatch({ type: HEADER_LOADED }),
    logout: () => 
        dispatch({ type: LOGOUT }),
});

const NotUserLogged = props => {
    if (!props.currentUser) {
        return (
            <div>
                <div className="in-block nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                </div>            
                <div className="in-block nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                </div>
            </div>
        );
    }
    return null;
}


const UserLogged = props => {
    if (props.currentUser) {
        console.log('logged');

        var username = (props.currentUser) ? props.currentUser.username : "";
        return (
            <Navbar.Collapse className="in-block justify-content-end">
                <Navbar.Text>
                Signed in as: {username}
                </Navbar.Text>

                <div className="in-block nav-item">
                    <span onClick={() => props.logout()} className="nav-link cursor-pointer">Logout</span>
                </div>
            </Navbar.Collapse>
        );
    }
    return null;
}


// const mapStateToProps = state => ({
//         // hotel: state.hotelList.hotel
// });

// const mapDispatchToProps = dispatch => ({
//     // onLoad: (payload) =>
//     //     dispatch({ type: HOTEL_DETAILS_LOADED, payload }),
// });

class CommentHotelInput extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return null;
    }
}

export default connect()(CommentHotelInput);