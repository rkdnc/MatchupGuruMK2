const db = require('../models');

module.exports = {

    createUser: function(req, res) {
        db.User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }).then(()=> {
            res.redirect(307, '/')
        }).catch(err => {
            console.log(err);
            res.json(err);
        })
    },
    loginUser: function(req, res){
        res.send('You are logged in');
    }

}