import React, { Component } from 'react';
import './SubmitBtn.css';

const SubmitBtn = props => (
    <div className='field'>
        <p className='control'>
            <button className='button is-info'
            onClick={props.handleFormSubmit}
            >
            {props.text}
            </button>
        </p>
    </div>
)

export default SubmitBtn;