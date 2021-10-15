import React from 'react';

const CharactersSelector = ({characters, onCharacterSelected}) => {

    const handleChange = function(event){
        const chosenCharacter = characters[event.target.value];
        onCharacterSelected(chosenCharacter);
    }

    const characterOptions = characters.map((character, index) => {
        return <option value={index} key={index}>{character.fullName}</option>
    })

    return(
        <select defaultValue="" onChange={handleChange}>
        <option value="" selected>Choose a Character</option>
            {characterOptions}
        </select>

    )
}

export default CharactersSelector;