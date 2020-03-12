import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import './App.css';
import SearchField from '../components/SearchField';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
	return {
		/* searchRobots */
		searchField: state.searchRobots.searchField,
		/* requestRobots */
		isPending: state.requestRobots.isPending,
		robots: state.requestRobots.robots,
		error: state.requestRobots.error,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => requestRobots(dispatch)
	}
}

class App extends Component {

	componentDidMount() {
		this.props.onRequestRobots();
	}

	render() {
		const { searchField, onSearchChange, robots, isPending } = this.props;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})
		return isPending ?
			<h1>Loading...</h1>
		:
			<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" tab-index="-1" />
				<SearchField searchChange={onSearchChange}/>
				<Scroll>
					{ isPending ? <h1>Loading</h1> :
						<ErrorBoundary>
							<CardList robots={filteredRobots} />
						</ErrorBoundary>
					}
				</Scroll>
			</header>
			</div>
		;
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);