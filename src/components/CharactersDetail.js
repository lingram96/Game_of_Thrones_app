import React from 'react';
import CharactersContainer from '../containers/CharactersContainer';
import './CharactersDetail.css';

const CharactersDetail = ({character, onGoodToggle}) => {

    return(
        <div className="character-detail">
        <img src={character.imageUrl} alt={character.fullName} width="auto"/>
        <h1>{character.fullName}</h1>
        <h2>{character.title}</h2>
        <h3>{character.family}</h3>
        <button onClick={() => {onGoodToggle(character)}}>
            {character.good ? 'Delete from Favourites' : 'Add to Favourites'}
        </button>
        </div>

    )
}

export default CharactersDetail;