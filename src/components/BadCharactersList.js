import React from 'react';
import ListItem from './ListItem';

const BadCharactersList = ({characters, onCharacterClick}) => {

    const filteredCharacters = characters.filter((character) => {
        return character.bad
    })

    const characterListNodes = characters.map((character, index) => {
        return (
        <ListItem  character={character} key={index} onCharacterClick={onCharacterClick}/>
        )
    }) 
  
    return (
        <div>
        <p>Bad Characters list</p>
        <ul>
            {characterListNodes}
        </ul>
        </div>
    )
}

export default BadCharactersList;