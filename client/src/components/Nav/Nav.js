import React from 'react';
import './Nav.css';
import icon from '../../images/icon.png';

const Nav = () => (
    <nav className='navbar is-standard' aria-label='main navigation'>
        <div className='navbar-brand'>
            <a className='navbar-item' href='/'>
                <img src={icon} alt='Matchup Guru' />
            </a>
            <div className='navbar-item'>
            <p className='is-text is-size-4'> Matchup Guru </p>
            </div>
            <div className='navbar-burger'>
            <i className='fas fa-bars is-icon'></i>
            {/* Mobile responsive stuff goes here */}
            </div>
        </div>
        <div className='navbar-menu'>
            <div className='navbar-end'>
                <a className='navbar-item is-text' href='/metagame'><i className='fas fa-chart-pie is-icon'></i>Metagame</a>
                <a className='navbar-item is-text' href='/articles'><i className='far fa-list-alt is-icon'></i>Articles</a>
                <a className='navbar-item is-text' href='/decks'><i className='fas fa-th-large is-icon'></i>Decks</a>
                <a className='navbar-item is-text' href='/results'><i className='far fa-plus-square is-icon'></i>Results</a>
            </div>
        </div>
    </nav>
)

export default Nav;