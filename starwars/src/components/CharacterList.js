import React from 'react';
import Character from './Characters';
import './StarWars.css';

const CharacterList = props => {
	return <div className='character-container'>
		{props.character.map(character => <Character key={character.name} StarWarsCharacter={character} />)}
			</div>;
};

export default CharacterList;