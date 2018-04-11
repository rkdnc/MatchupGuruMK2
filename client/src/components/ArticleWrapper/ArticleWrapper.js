import React, { Component } from 'react';
import ArticleCard from '../ArticleCard';
import API from '../../utils/api';

class ArticleWrapper extends Component {
    state = {
        articles: []
    };

    getRecentArticles = () => {
        API.getRecentArticles()
            .then(res =>{
                this.setState({
                    articles: res.data
                })
            }
                
            ).catch(err => console.log(err));
    };
    componentDidMount (){
        this.getRecentArticles();
    }
    render() {
        return (
            <div className='columns'>
                {this.state.articles.map(article => (
                    <ArticleCard
                    key={article._id}
                    title={article.title}
                    author={article.author}
                    format={article.format}
                    />
                ))}
            </div>
        )
    }
}

export default ArticleWrapper;