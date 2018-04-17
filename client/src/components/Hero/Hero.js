import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import icon from '../../images/icon.png';
import logo from '../../images/logo.png'

const Hero = props => (
    <section className='hero is-medium is-standard'>
        <div className='hero-head'>
        <nav className='navbar is-standard is-fixed-top' aria-label='main navigation'>
        <div className='navbar-brand'>
            <a className='navbar-item' to='/'>
                <img src={icon} alt='Matchup Guru' />
            </a>
            <div className='navbar-burger'>
            <i className='fas fa-bars is-icon'></i>
            {/* Stuff goes here */}
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
        </div>
        <div className='hero-body has-text-centered'>
            <div className='container'>
                <h1 className='title'>
                    Welcome to Matchup Guru!
                </h1>
                <h2 className='subtitle'>
                    A crowdsourced Magic: The Gathering metagame website.
                </h2>
                <aside>
                    <img src={logo} />
                </aside>
            </div>
        </div>
    </section>
)

export default Hero;