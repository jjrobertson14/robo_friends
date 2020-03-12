import React from 'react';
import './SearchField.css';

const SearchField = ({searchChange}) => {
	return (
		<div className="SearchField" style={{ height: '10vh'}}>
			<label htmlFor="robot-search">Search:</label>
			<input 
				type="search"
				name="robot-search"
				id="robot-search"
				placeholder="Type a robot's name..." 
				onChange={searchChange} 
				/>
		</div>
	);
}

export default SearchField;