import React from 'react';
import CardPlanets from './CardPlanets';

const PlanetList = ({ planets }) => {
    return (
        <div>
            {planets.map(({ name, rotation_period, orbital_period, climate, gravity, terrain, population }) => 
                <CardPlanets key={name} name ={name} rotation_period ={rotation_period}
                             orbital_period ={orbital_period} climate ={climate} gravity ={gravity}
                             terrain ={terrain} population ={population}/>)}
        </div>
    );
}

export default PlanetList;