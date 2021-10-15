import React from 'react';
import ListItem from './ListItem';

const GoodCharactersList = ({characters, onCharacterClick}) => {

    const filteredCharacters = characters.filter((character) => {
        return character.good
    })

    const characterListNodes = characters.map((character, index) => {
        return (
        <ListItem  character={character} key={index} onCharacterClick={onCharacterClick}/>
        )
    }) 
  
    return (
        <div>
        <p>Good Characters list</p>
        <ul>
            {characterListNodes}
        </ul>
        </div>
    )
}

export default GoodCharactersList;