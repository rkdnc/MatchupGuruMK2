import React, { Component } from 'react';
import './TabWrapper.css';
import Tabs from '../Tabs';

class TabWrapper extends Component {
    constructor(props) {
        super(props);
        this.state ={format: ''};
        this.onClick = this.onClick.bind(this);
    }
    onClick = event =>{
        event.preventDefault();
        this.setState({
            format: event.target.id
        },
    () => console.log(this.state));
    };
     

    render() {
        return (
            <div className='columns'>
                <div className='column is-10 is-offset-1'>
                {/* <TabWrapper /> */}
                <div className='tabs is-centered is-large is-toggle is-fullwidth'>
                <ul>
                    <Tabs id='standard' onClick={this.onClick} name='Standard' />
                    <Tabs id='frontier' onClick={this.onClick} name='Frontier' />
                    <Tabs id='modern' onClick={this.onClick} name='Modern' />
                    <Tabs id='legacy' onClick={this.onClick} name='Legacy' />
                    <Tabs id='pauper' onClick={this.onClick} name='Pauper' />
                </ul>
            </div>
                </div>
            </div>
        )
    }
}

export default TabWrapper;