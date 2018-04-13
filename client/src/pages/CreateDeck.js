import React, { Component } from 'react';
import Nav from '../components/Nav';
import TabWrapper from '../components/TabWrapper';
import Form from '../components/Form';
import SubmitBtn from '../components/SubmitBtn';
import TextArea from '../components/TextArea';
import API from '../utils/api';

class CreateDeck extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state ={
    //         format: '',
    //         deckName: '',
    //         deckDesc: ''
    //     };
    //     this.onClick = this.onClick.bind(this);
    // }
    state = {
        format: '',
        deckName:'',
        deckDesc:''
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

    handleFormSubmit = event => {
        event.preventDefault();
        const deck = {
            name: this.state.deckName,
            format: this.state.format,
            season: 'DOM',
            description: this.state.deckDesc
        };
        console.log(this.state);
        if (this.state.deckName && this.state.deckDesc) {
            API.createDeck(deck.format, deck.season)
            .then(res => console.log('Submitted!'))
            .catch(err => console.log(err));
        }
    };


    render() {
        return (
            <div>
            <Nav />
            {/* Format selector buttons */}
            <TabWrapper />
            {/* Deck name form */}
            <div className='columns'>
                <div className='column is-half is-offset-one-quarter'>
                    <Form
                    label='Deck Name'
                    value={this.state.deckName}
                    name='deckName'
                    type='text'
                    placeholder='Red Deck Wins'
                    handleInputChange={this.handleInputChange}
                    />
                    {/* <TextArea /> */}
                    <TextArea
                    rows='10'
                    name='deckDesc'
                    value={this.state.deckDesc}
                    handleInputChange={this.handleInputChange}
                    />
                    {/* <ReactQuill 
                    value={this.state.deckDesc}
                    name='deckDesc'
                    onChange={this.handleInputChange}
                    /> */}
                   
                    <br />
                    <SubmitBtn
                    handleFormSubmit={this.handleFormSubmit}
                    text='Submit'
                    />
                </div>
            </div>
            </div>
        )
    }



//Deck Name form

//Deck description textarea

//Submit button
}

export default CreateDeck;