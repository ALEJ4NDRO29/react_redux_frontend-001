import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HOME_PAGE_UNLOADED, HOME_PAGE_LOADED } from '../../constants';
import agent from '../../agent';
import HotelList from '../hotels/HotelsList'


const mapDispatchToProps = dispatch => {
    // dispatch({type: HOME_PAGE_LOADED, payload});
}

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(agent.Hotels.getAll());
    }

    render() {
        var hoteles = [{"name":"Hotel 1","stars":"4","location":"Hotel 1 Loc"},{"name":"Hotel 2","stars":"5","location":"Hotel 2 Loc"}]
        return (
            <div>
                <h1>Listado de hoteles:</h1>
                <HotelsList hotels={hoteles}/>
            </div>
        );
    }
}

export default connect(mapDispatchToProps)(Home);
