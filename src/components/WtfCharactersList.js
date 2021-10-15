import React from 'react';
import ListItem from './ListItem';

const WtfCharactersList = ({characters, onCharacterClick}) => {

    const filteredCharacters = characters.filter((character) => {
        return character.wtf
    })

    const characterListNodes = characters.map((character, index) => {
        return (
        <ListItem  character={character} key={index} onCharacterClick={onCharacterClick}/>
        )
    }) 
  
    return (
        <div>
        <p>Who the fuck knows Characters list</p>
        <ul>
            {characterListNodes}
        </ul>
        </div>
    )
}

export default WtfCharactersList;