import React from 'react';
import CharactersContainer from '../containers/CharactersContainer';
import './CharactersDetail.css';

const CharactersDetail = ({character, onGoodToggle, onBadToggle, onWtfToggle}) => {

    return(
        <div className="character-detail">
        <img src={character.imageUrl} alt={character.fullName} width="auto"/>
        <h1>{character.fullName}</h1>
        <h2>{character.title}</h2>
        <h3>{character.family}</h3>
        <button onClick={() => {onGoodToggle(character)}}>
            {character.good ? 'Delete from Goodies' : 'Add to Goodies'}
        </button>
        <p></p>
        <button onClick={() => {onBadToggle(character)}}>
            {character.bad ? 'Delete from Baddies' : 'Add to Baddies'}
        </button>
        <p></p>
        <button onClick={() => {onWtfToggle(character)}}>
            {character.wtf ? 'Delete from WTF' : 'Add to Who the fuck knows?'}
        </button>
        </div>

    )
}

export default CharactersDetail;