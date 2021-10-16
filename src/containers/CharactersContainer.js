import React, { useState, useEffect } from 'react';
import CharactersList from '../components/CharactersList';
import CharactersDetail from '../components/CharactersDetail';
import CharactersSelector from '../components/CharactersSelector';
import GoodCharactersList from '../components/GoodCharactersList';
import '../components/CharactersSelector.css';
import '../components/CharactersDetail.css';


const CharactersContainer = () => {

    const [Characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    useEffect(() => {
        fetchCharacters()
    }, [])

    const fetchCharacters = () => {
        fetch("https://thronesapi.com/api/v2/Characters")
        .then(res => res.json())
        .then(characters => setCharacters(characters))
    }

    const onCharacterSelected = function(character){
        setSelectedCharacter(character);
    }

    const handleGoodToggle = (characterToUpdate) => {
        const updatedCharacters = Characters.map ((character) =>{
            if (character.fullName === characterToUpdate.fullName){
                character.good = !character.good
            }
            return character
        })
        setCharacters(updatedCharacters)
    }

    return(
        <>
        
        <div>
        <CharactersSelector characters={Characters} onCharacterSelected={onCharacterSelected}/>
        {selectedCharacter ? <CharactersDetail character={selectedCharacter} onGoodToggle={handleGoodToggle}/>: null}
        </div>
        </>
    )
}

export default CharactersContainer;