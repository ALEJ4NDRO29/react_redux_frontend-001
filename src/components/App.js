import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './layout/Header';
import Routes from './Routes';

class App extends Component {

	render() {
		return (
			<Container>
				<Router>
					<Header />
					<Routes />
					{/* TODO: FOOTER */}
				</Router>
			</Container>
		);
	}

}

export default App;