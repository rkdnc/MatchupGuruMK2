import React from 'react';
import './ArticleCard.css';


const ArticleCard = ({_id, author, title, format}) => (
// Will need to be wrapped in a wrapper
    <div className='column is-wrapper'>
        <div className='card'>
            <div className='card-image'>
            {/* Images inherited from the format would go here, but that's for a later iteration */}
                <figure className='image is-4by3'>
                    <img src='https://bulma.io/images/placeholders/1280x960.png'
                    alt='Placeholder' />
                </figure>
            </div>
            <div className='card-content'>
                <div className='content'>
                    <p className='is-size-3'>{title}</p>
                    <p className='is-size-4'>{author}</p>
                    {/* Format tags color specific? Maybe? */}
                    {/* <span className='tag'>{format}</span> */}
                </div>
            </div>
        </div>
    </div>
);

export default ArticleCard;