import React from 'react';
import ListItem from './ListItem';

const CharactersList = ({characters, onCharacterClick}) => {

    const characterListNodes = characters.map((character, index) => {
        return <ListItem  character={character} key={index} onCharacterClick={onCharacterClick}/>
    }) 
  
    return (
        <div>
        <p>Characters list</p>
        <ul>
            {characterListNodes}
        </ul>
        </div>
    )
}

export default CharactersList;