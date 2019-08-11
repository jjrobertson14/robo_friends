import React, { Component } from 'react';
import './SearchField.css';

class SearchField extends Component {

	render(searchChange) {
		return (
			<div className="SearchField">
				<input 
					type="search" 
					placeholder="Type a robot's name..." 
					onChange={searchChange} 
					/>
			</div>
		);
	}
}

export default SearchField;