const db = require('../models');

module.exports ={
    //find all articles
    findAll: function(req, res) {
        db.Article.findAll({
            where: {
                published: true
            },
            order: [ [ 'createdAt', 'DESC'] ]
        }).then(dbArticle => res.json(dbArticle));
    },

    //Find most recent three articles
    findLastThree: function (req, res) {
        db.Article.findAll({
            where: {
                published: true
            },
            limit: 3,
            order: [ [ 'createdAt', 'DESC'] ]
        }).then( articles => res.json(articles));
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
    update: function (req, res) {
        const articleUpdate = {
            id: req.body.id,
            title: req.body.title,
            bodyText: req.body.bodyText,
            published: req.body.published
        };

        db.Article.update(articleUpdate, {where: {id: articleUpdate.id}}).then(updatedArticle => console.log(updatedArticle));
    },
    //delete an article
    delete: function (req, res) {
        db.Article.destroy({
            where: {
                id: req.body.id
            }
        }).then(deletedArticle => {
            res.send(`Has this been deleted? 1 =  yes, 0 = no.
            Result: ${deletedArticle}`)
        })
    }
}