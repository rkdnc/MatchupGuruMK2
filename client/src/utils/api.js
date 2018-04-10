import axios from 'axios';


export default {

    //Article endpoints
    getArticles: function() {
        return axios.get('/api/articles');
    },
    getRecentArticles: function() {
        return axios.get('/api/articles/recent');
    },
    saveArticle: function(id) {
        return axios.post('/api/articles');
    },
    updateArticle: function(id) {
        return axios.patch('/api/articles' + id);
    },
    deleteArticle: function(id) {
        return axios.delete('/api/articles/' + id);
    },

    //Deck endpoints
    getDecks: function(format, season) {
        return axios.get('/api/decks/' + format + '/' + season);
    },
    createDeck: function (format, season) {
        return axios.post('/api/decks/' + format + '/' + season);
    },
    updateDeck: function (format, season) {
        return axios.patch('/api/decks/' + format + '/' + season);
    },

    //Results endpoints
    getResults: function(format, season) {
        return axios.get('/api/results/' + format + '/' + season);
    },
    getUserResults: function (user, format) {
        return axios.get('/api/results/' + user + '/' + format);
    },
    createNewResult: function (format, season) {
        return axios.post('/api/results/' + format + '/' + season);
    },

    //User endpoints
    loginUser: function () {
        return axios.post('/api/login');
    },
    createUser: function() {
        return axios.post('/api/signup');
    },
    updateUser: function() {
        return axois.patch('/api/updateuser/');
    },
    deleteUser: function() {
        return axios.delete('/api/updateuser/')
    }
};