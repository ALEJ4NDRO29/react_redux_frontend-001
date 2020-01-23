import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HOME_PAGE_UNLOADED, HOME_PAGE_LOADED } from '../../constants';
import agent from '../../agent';


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

        return (
            <div>
                <h1>Listado de hoteles:</h1>
            // Cargar listado aquí
            </div>
        );
    }
}

export default connect(mapDispatchToProps)(Home);
