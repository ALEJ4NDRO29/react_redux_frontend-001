import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Home from './components/home/Home';

class App extends Component {

	render() {
		return(
			<Router>
				<Header/>
				<Switch>
					<Route path="/" component={Home}/>
				</Switch>
			</Router>
		);
	}

}

export default App;
