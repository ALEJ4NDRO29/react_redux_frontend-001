import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/layout/Header';
import Routes from './Routes';

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
