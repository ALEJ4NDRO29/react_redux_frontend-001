import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Header from './layout/Header';

class App extends Component {

	render() {
		return(
			<Router>
				<Header/>
				<Routes/>
				{/* FOOTER */}
			</Router>
		);
	}

}

export default App;