import React, { Component } from 'react';
import './TabWrapper.css';
import Tabs from '../Tabs';

class TabWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            format:''
        }
        this.onClick = this.onClick.bind(this);
}

    onClick = event =>{
        event.preventDefault();
        const format = event.target.value;
        this.setState({
            format: format
        });
        console.log(this.state.format);
    };

    render() {
        return(
            <div className='tabs is-centered is-large is-toggle is-fullwidth'>
                <ul>
                    <Tabs value='Standard' onClick={this.onClick} name='Standard' />
                    <Tabs value='Frontier' onClick={this.onClick} name='Frontier' />
                    <Tabs value='Modern' onClick={this.onClick} name='Modern' />
                    <Tabs value='Legacy' onClick={this.onClick} name='Legacy' />
                    <Tabs value='Pauper' onClick={this.onClick} name='Pauper' />
                </ul>
            </div>
        )
    }
}
//make new tab
//when tab is clicked, set state to that format
export default TabWrapper;