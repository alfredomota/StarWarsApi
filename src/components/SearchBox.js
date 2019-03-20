import React from 'react';

const SearchBox = ({ searchChange }) => {
	return (
		<div className='pa2'>
			<input
				className='pa3 ba b--yellow bg-black yellow'
				type='search'
				placeholder='Search...'
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;