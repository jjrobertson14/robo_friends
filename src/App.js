import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchField from './SearchField'
import CardList from './CardList'

class App extends Component {

	constructor() {
		super();
		this.state = {
			robots: [],
			searchField: ''
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => {this.setState({robots: users})})
	}

	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value})
		console.log(event.target.value);
	}

	render() {
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
		})
		if (this.state.robots.length === 0)
			return <h1>Loading...</h1>;
		else
			return (
		  		<div className="App">
		      	<header className="App-header">
			        <img src={logo} className="App-logo" alt="logo" />
			        <SearchField searchChange={this.onSearchChange}/>
			        <CardList robots={filteredRobots} />
				</header>
				</div>
	  		);
	}
}

export default App;