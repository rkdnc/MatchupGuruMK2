import React from 'react';
import './TextField.css';

const TextField = props => (
    
        <div className='field'>
            <label className='label'>{props.label}</label>
            <div className='control'>
                <input
                className='input'
                placeholder={props.placeholder}
                value={props.value}
                name={props.name}
                type={props.type}
                onChange={props.handleInputChange}
                />
            </div>
        </div>
    
);

export default TextField;