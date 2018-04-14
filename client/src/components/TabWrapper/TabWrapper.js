import React from 'react';
import './TabWrapper.css';
import Tabs from '../Tabs';

const TabWrapper = props => (
            <div className='columns'>
                <div className='column is-10 is-offset-1'>
                {/* <TabWrapper /> */}
                <div className='tabs is-centered is-large is-toggle is-fullwidth'>
                <ul>
                    <Tabs id='Standard' onClick={props.onClick} name='Standard' />
                    <Tabs id='Frontier' onClick={props.onClick} name='Frontier' />
                    <Tabs id='Modern' onClick={props.onClick} name='Modern' />
                    <Tabs id='Legacy' onClick={props.onClick} name='Legacy' />
                    <Tabs id='Pauper' onClick={props.onClick} name='Pauper' />
                </ul>
            </div>
                </div>
            </div>
        )
    

export default TabWrapper;