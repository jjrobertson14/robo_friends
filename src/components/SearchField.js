import React from 'react';
import './SearchField.css';

const SearchField = ({searchChange}) => {
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

export default SearchField;