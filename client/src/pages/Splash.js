import React, { Component } from 'react';
import Hero from '../components/Hero';
import ArticleWrapper from '../components/ArticleWrapper';



class Splash extends Component {
        // Stuff
        render() {
                return(
                        <div>
                        <Hero />
                        <ArticleWrapper />
                        </div>
                )
        }
}
export default Splash;