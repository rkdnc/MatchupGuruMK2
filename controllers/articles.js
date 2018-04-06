const db = require('../models');

module.exports ={
    //find all articles
    findAllArticles: function (req, res) {
        // db.findAll({
        //     limit: 3,
        //     order: [ [ 'createdAt', 'DESC'] ]
        // }).then( articles => res.json(articles));
    },
    //create a new article
    createNewArticle:function (req, res) {
      const author = req.body.author;
      const title = req.body.title;
      const bodyText = req.body.bodyText;
      const format = req.body.format;

      db.Article.create({
          author: author,
          title: title,
          bodyText: bodyText,
          format: format
      }).then(dbArticle => res.send(dbArticle))

    },
    //update an article
    update: (req, res) => {
        //Stuff
    },
    //delete an article
    delete: (req, res) =>{
        //stuff
    }
}