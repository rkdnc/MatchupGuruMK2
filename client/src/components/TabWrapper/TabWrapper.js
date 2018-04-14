import React, { Component } from 'react';
import './TabWrapper.css';
import Tabs from '../Tabs';

const TabWrapper = props => (
            <div className='columns'>
                <div className='column is-10 is-offset-1'>
                {/* <TabWrapper /> */}
                <div className='tabs is-centered is-large is-toggle is-fullwidth'>
                <ul>
                    <Tabs id='standard' onClick={props.onClick} name='Standard' />
                    <Tabs id='frontier' onClick={props.onClick} name='Frontier' />
                    <Tabs id='modern' onClick={props.onClick} name='Modern' />
                    <Tabs id='legacy' onClick={props.onClick} name='Legacy' />
                    <Tabs id='pauper' onClick={props.onClick} name='Pauper' />
                </ul>
            </div>
                </div>
            </div>
        )
    

export default TabWrapper;