import React from 'react';
import './Nav.css';
import icon from '../../images/icon.png';

const Nav = props => (
    <nav className='navbar is-standard' aria-label='main navigation'>
        <div className='navbar-brand'>
            <a className='navbar-item' href='/'>
                <img src={icon} alt='Matchup Guru' />
            </a>
            <div className='navbar-item'>
            <a className='is-text is-size-4' href='/'> Matchup Guru </a>
            </div>
            <div className='navbar-burger'>
            <i className='fas fa-bars is-icon'></i>
            {/* Mobile responsive stuff goes here */}
            </div>
        </div>
        <div className='navbar-menu'>
        <div className='navbar-end'>
            <i className='fas fa-chart-pie is-icon'></i><Link className='navbar-item is-text' to='/metagame'>Metagame</Link>
            <i className='far fa-list-alt is-icon'></i><Link className='navbar-item is-text' to='/articles'>Articles</Link>
            <i className='fas fa-th-large is-icon'></i><Link className='navbar-item is-text' to='/decks'>Decks</Link>
            <i className='far fa-plus-square is-icon'></i><Link className='navbar-item is-text' to='/results'>Results</Link>
                {props.isAuth}
            </div>
        </div>
    </nav>
)

export default Nav;