import React from 'react';
import './Tabs.css';

const Tabs = props => (
    <li
    onClick={props.onClick}
    >
    <a id={props.id}>{props.name}</a>
    </li>
)

export default Tabs;