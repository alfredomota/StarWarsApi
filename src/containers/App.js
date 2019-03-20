import React, { Component } from 'react';
import PlanetList from '../components/PlanetList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

class App extends Component {
	constructor() {
		super()
		this.state = {
			planets: [],
			searchfield: ''
		}
	}

	componentDidMount() {
		const urls = [
			'https://swapi.co/api/planets/',
			'https://swapi.co/api/planets/?page=2', 
			'https://swapi.co/api/planets/?page=3',
			'https://swapi.co/api/planets/?page=4',
			'https://swapi.co/api/planets/?page=5',
			'https://swapi.co/api/planets/?page=6',
			'https://swapi.co/api/planets/?page=7'
		]
		
		Promise.all(urls.map(async url => {
			const response = await fetch(url);
			const morePlanets = await response.json();
			var combinedArrayOfPlanets = this.state.planets;
			combinedArrayOfPlanets.push(morePlanets.results);
			
			var sortedArrayOfPlanets = combinedArrayOfPlanets
				.flat()
				.sort((a, b) => a.name.localeCompare(b.name));
			
			this.setState({planets: sortedArrayOfPlanets})
		}))
		.catch(error => 
			console.log('Error during fetching of planets:', error)
		);
	}
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const { planets, searchfield } = this.state;
		const filteredPlanets = planets.filter(planet => planet.name.toLowerCase().includes(searchfield.toLowerCase()));
			return !planets.length ?
				<h1 className='tc yellow f-subheadline'>Loading ...</h1> :
				(
					<div className='tc'>
						<h1 className='f-subheadline yellow'>Star Wars</h1>
						<h2 className='f1 black'>The Planets</h2>	
						<SearchBox searchChange={this.onSearchChange}/><br/>
						<Scroll>
							<br/><PlanetList planets={filteredPlanets}/>
						</Scroll>
					</div>
				);
			}
	}

export default App;