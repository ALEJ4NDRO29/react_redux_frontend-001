import React, { Component } from 'react';
import { connect } from 'react-redux';
import agent from '../../agent';
import HotelsList from '../hotels/HotelsList';
import { GET_HOTELS_SUCCESS } from '../../constants';

const Promise = global.Promise;

const mapStateToProps = state => {
    return {
        ...state.hotels,
        // hotels: state.hotels 
    };
};

// const valuesTest =
//     [{ "name": "Hotel 1", "stars": "4", "location": "Hotel 1 Loc" }, { "name": "Hotel 2", "stars": "5", "location": "Hotel 2 Loc" }];


const mapDispatchToProps = (dispatch) => ({
    onload: (payload) =>
        dispatch({ type: GET_HOTELS_SUCCESS, payload })

});

class Home extends Component {

    componentDidMount() {
        // agent.Hotels.getAll().then(function (hotels) {
        //     console.log(hotels);
        // });
        // var hotels = await agent.Hotels.getAll();
        // console.log(hotels);
        this.props.onload(Promise.all([agent.Hotels.getAll()]));
    }

    render() {

        console.log('Render');
        console.log(this.props.hotels);
        // var hotels = [];
        // (async () => {
        //     console.log('KK');

        //     // console.log(await this.listHotels(this.props.hotels)['hotels']);
        //     hotels = this.listHotels(this.props.hotels)['hotels'];
        // })()

        // var hoteles = [{ "name": "Hotel 1", "stars": "4", "location": "Hotel 1 Loc" }, { "name": "Hotel 2", "stars": "5", "location": "Hotel 2 Loc" }];
        return (
            <div>
                <h1>Listado de hoteles:</h1>
                {console.log(this.props.hotels)}
                <HotelsList hotels={this.props.hotels} />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
