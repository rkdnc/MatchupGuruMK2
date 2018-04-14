import React from 'react';
import './DeckCard.css';

const DeckCard = ({name, season, description}) => (
    <div className='column'>
        <div className='card'>
            <header className='card-header'>
                <p className='card-header-title'>{name}</p>
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