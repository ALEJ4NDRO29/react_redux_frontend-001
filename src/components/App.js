import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Header from './layout/Header';
import { Container } from 'react-bootstrap';

class App extends Component {

	render() {
		return(
			<Container>
				<Router>
					<Header/>
					<Routes/>
					{/* FOOTER */}
				</Router>
			</Container>
		);
	}

}

export default App;