import React from 'react';


const CardPlanets = ({ name, rotation_period, orbital_period, climate, gravity, population, terrain }) => {
	return (
		<div className="tc bg-yellow dib br3 pa3 ma2 grow bw2 shadow-5">
			<h2>{name}</h2>
            <p><strong>Rotation Period:</strong> {rotation_period}</p>
            <p><strong>Orbital Period:</strong> {orbital_period}</p>
            <p><strong>Climate:</strong> {climate}</p>
            <p><strong>Gravity:</strong> {gravity}</p>
            <p><strong>Terrain:</strong> {terrain}</p>
            <p><strong>Population:</strong> {population}</p>
		</div>
	);
};

export default CardPlanets;