import React from 'react';
import './DeckCard.css';

const DeckCard = ({name, season, description}) => (
    <div className='tile is-child '>
        <div className='card has-text-centered'>
            <header className='card-header'>
                <p className='card-header-title is-centered'>{name}</p>
            </header>
            <div className='card-content' dangerouslySetInnerHTML={{__html: description}}>
               
            </div>
            <footer className='card-footer'>
                <p className='card-footer-item'>
                    <span>
                        <p>{season}</p>
                    </span>
                </p>
            </footer>
        </div>
    </div>
)

export default DeckCard;