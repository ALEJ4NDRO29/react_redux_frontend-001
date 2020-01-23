import React, { Component } from 'react';
import { connect } from 'react-redux';


const mapDispatchToProps = dispatch => {
    // dispatch({type: 'test', payload: 'test'});
}

class Home extends Component {
    constructor(props) {
        super(props);
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
