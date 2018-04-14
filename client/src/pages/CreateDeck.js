import React, { Component } from 'react';
import Nav from '../components/Nav';
import TabWrapper from '../components/TabWrapper';
import TextField from '../components/TextField';
import API from '../utils/api';


class CreateDeck extends Component {
    state = {
        format: '',
        chosenFormat: false,
        name:'',
        description:''
    }
    onClick = event =>{
        event.preventDefault();
        this.setState({
            format: event.target.id,
            chosenFormat: true
        },
    () => console.log(this.state));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    handleFormSubmit = event => {
        event.preventDefault();
        const deck = {
            name: this.state.name,
            format: this.state.format,
            season: 'DOM',
            description: this.state.description
        };
        // console.log(deck);
        if (this.state.name && this.state.description) {
            API.createDeck(deck.format, deck.season, deck)
            .then(res => this.reset())
            .catch(err => console.log(err));
        }
    };
    reset= () => {
        document.getElementById('deckForm').reset();
        this.setState({
            format: '',
            chosenFormat: true,
            name:'',
            description:''
        });
    }

    render() {
        const chosenFormat = this.state.chosenFormat;
        const deckForm = chosenFormat ? (
            <div>
            <h1 className='title'>Submit a new {this.state.format} deck</h1>
            <form id='deckForm'
            onSubmit={this.handleFormSubmit}>
                <TextField
                label='Deck Name'
                value={this.state.name}
                name='name'
                type='text'
                placeholder='Red Deck Wins'
                handleChange={this.handleInputChange}
                />
                <textarea
               className='textarea is-info'
               placeholder='pls respond'
               name='description'
               value={this.state.value}
               onChange={this.handleInputChange}
               />
                <br />
                <input
                className='button is-info'
                type='submit'
                value='Submit Deck'
                />
            </form>
            </div>) : (
            <h1 className='title'>Please select a format to begin</h1>
        )
        return (
            <div>
            <Nav />
            <TabWrapper onClick={this.onClick}/>
            <div className='columns'>
                <div className='column is-half is-offset-one-quarter'>
                {deckForm}
                </div>
            </div>
            </div>
        )
    }



}

export default CreateDeck;