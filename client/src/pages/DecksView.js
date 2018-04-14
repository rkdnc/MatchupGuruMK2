import React, { Component } from 'react';
import Nav from '../components/Nav';
import TabWrapper from '../components/TabWrapper';
import DeckCard from '../components/DeckCard';
import API from '../utils/api';

class DecksView extends Component {
    state ={
        format: '',
        season: '',
        decks: []
    };

    componentWillMount() {
        this.setState({
            format: 'standard',
            season:'DOM'
        },() => this.getDecks())

        //Need to get the component to reload based on state change
    }
    // componentDidMount() {
    //     this.getDecks();
    // }
    componentWillUnmount() {
        
    }

    getDecks = () => {
        // const format = this.state.format;
        API.getDecks(this.state.format, this.state.season)
            .then(res => {
                this.setState({
                    decks: res.data
                })
            }).catch(err => console.log(err))
    }
  

    render() {
        return (
            <div>
                <Nav />
                <TabWrapper />
                <div className='columns'>
                {this.state.decks.map(deck => (
                    <DeckCard
                    name={deck.name}
                    description={deck.description}
                    season={deck.season}
                    />
                ))}
                </div>

            </div>
        )
    }

//For each unique deck, display a card with Name & Description

}

export default DecksView;