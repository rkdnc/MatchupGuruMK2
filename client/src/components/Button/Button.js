import React from 'react';
import './Button.css';

const Button = props => (
    <a className='button is-standard' href= {props.formatURL}>
    {props.format}
    </a>
)