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
            <Link className='navbar-item is-text' to='/metagame'><i className='fas fa-chart-pie is-icon'></i>Metagame</Link>
            <Link className='navbar-item is-text' to='/articles'><i className='far fa-list-alt is-icon'></i>Articles</Link>
            <Link className='navbar-item is-text' to='/decks'><i className='fas fa-th-large is-icon'></i>Decks</Link>
            <Link className='navbar-item is-text' to='/results'><i className='far fa-plus-square is-icon'></i>Results</Link>
                {props.isAuth ? <Link className='navbar-item is-text' to='/logout'><i class="far fa-user"></i>Log Out</Link> : <Link className='navbar-item is-text' to='/login'><i class="far fa-user"></i>Log In </Link>}
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