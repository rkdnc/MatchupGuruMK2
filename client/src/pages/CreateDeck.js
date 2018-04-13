import React, { Component } from 'react';
import Nav from '../components/Nav';
// import TabWrapper from '../components/TabWrapper';
import Tabs from '../components/Tabs';

class CreateDeck extends Component {
    constructor(props) {
        super(props);
        this.state ={format: ''};
        this.onClick = this.onClick.bind(this);
    }
    onClick = event =>{
        // event.preventDefault();
        this.setState({
            format: event.target.id
        },
    () => console.log(this.state));
    };
     

    render() {
        return (
            <div>
            <Nav />
            <div className='columns'>
                <div className='column is-10 is-offset-1'>
                {/* <TabWrapper /> */}
                <div className='tabs is-centered is-large is-toggle is-fullwidth'>
                <ul>
                    <Tabs id='Standard' onClick={this.onClick} name='Standard' />
                    <Tabs id='Frontier' onClick={this.onClick} name='Frontier' />
                    <Tabs id='Modern' onClick={this.onClick} name='Modern' />
                    <Tabs id='Legacy' onClick={this.onClick} name='Legacy' />
                    <Tabs id='Pauper' onClick={this.onClick} name='Pauper' />
                </ul>
            </div>
                </div>
            </div>
            </div>
        )
    }

//Format selector buttons

//Deck Name form

//Deck description textarea

//Submit button
}

export default CreateDeck;