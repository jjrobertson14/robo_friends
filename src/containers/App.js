import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import './App.css';
import SearchField from '../components/SearchField';
import CardList from '../components/CardList';

import { setSearchField } from '../actions';

const mapStateToProps = state => {
	return {
		searchField: state.searchField
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value))
	}
}

class App extends Component {

	constructor() {
		super();
		this.state = {
			robots: [],
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => {this.setState({robots: users})})
	}

	render() {
		const { robots } = this.state;
		const { searchField, onSearchChange } = this.props;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})
		if (this.state.robots.length === 0)
			return <h1>Loading...</h1>;
		else
			return (
		  		<div className="App">
		      	<header className="App-header">
			        <img src={logo} className="App-logo" alt="logo" />
			        <SearchField searchChange={onSearchChange}/>
			        <CardList robots={filteredRobots} />
				</header>
				</div>
	  		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);