import React from 'react';
import './StarWars.css';

const Character = props => {
	return 	<div className="card">
		<p className ="cName">Name ~ {props.StarWarsCharacter.name}</p>
		<p>Birth Year ~ {props.StarWarsCharacter.birth_year}</p>
		<p>Gender ~ {props.StarWarsCharacter.gender}</p>
		<p>Height ~ {props.StarWarsCharacter.height}</p>
		<p>Eye Color ~ {props.StarWarsCharacter.eye_color}</p>
	</div>
};

export default Character;