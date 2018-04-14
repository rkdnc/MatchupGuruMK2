import React, { Component } from 'react';
import Nav from '../components/Nav';
import TabWrapper from '../components/TabWrapper';
import TextField from '../components/TextField';
import SubmitBtn from '../components/SubmitBtn';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


import API from '../utils/api';

class CreateDeck extends Component {
    state = {
        format: '',
        name:'',
        description:''
    }
    onClick = event =>{
        event.preventDefault();
        this.setState({
            format: event.target.id
        },
    () => console.log(this.state));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleQuillChange = html => {
        this.setState({description: html})
    }

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
            .then(res => console.log('Submitted!'))
            .catch(err => console.log(err));
        }
    };


    render() {
        return (
            <div>
            <Nav />
            {/* Format selector buttons */}
            <TabWrapper onClick={this.onClick}/>
            {/* Deck name form */}
            <div className='columns'>
                <div className='column is-half is-offset-one-quarter'>
                <form onSubmit={this.handleFormSubmit}>
                        <TextField
                        label='Deck Name'
                        value={this.state.name}
                        name='name'
                        type='text'
                        placeholder='Red Deck Wins'
                        handleChange={this.handleInputChange}
                        />
                        <ReactQuill
                        onChange={this.handleQuillChange}
                        value={this.state.description}
                        placeholder='pls respond'
                        />
                        <br />
                        <input
                        className='button is-info'
                        type='submit'
                        value='Submit Deck'
                        />
                </form>
                </div>
            </div>
            </div>
        )
    }



}

export default CreateDeck;