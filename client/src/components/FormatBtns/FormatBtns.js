import React from 'react';
import './FormatBtns.css';
import Button from '../Button';

const FormatBtns = props => {
    const formats  = {
        format: ['Standard', 'Frontier', 'Modern', 'Legacy', 'Pauper'],
        formatURL: ['/results/standard', '/results/frontier', '/results/modern', '/results/legacy', '/results/pauper']
    };

    <div className='columns'>
        <div className='column'>
            <Button format={formats.format[0]} formatURL={formats.formatURL[0]} />
        </div>
    </div>

}

export default FormatBtns;