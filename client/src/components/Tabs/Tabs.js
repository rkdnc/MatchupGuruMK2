import React from 'react';
import './Tabs.css';

const Tabs = props => (
    <li 
    value={props.value}
    onClick={props.onClick}
    >
    <a>{props.name}</a>
    </li>
)

export default Tabs;