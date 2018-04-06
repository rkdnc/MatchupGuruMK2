const db = require('../models');

module.exports = {

    createUser: function (req, res) {
        //Registers a new user. Username and Email must be unique, but emails are optional.
        db.User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        }).then(() => {
            res.redirect(307, '/')
        }).catch(err => {
            console.log(err);
            res.json(err);
        })
    },
    loginUser: function (req, res) {
        res.send('You are logged in');
    },
    updateUser: function (req, res) {
        //Updates a user's email address and username. Username changes (should) only be done by admins.

        const userUpdate = {
            username: req.body.username,
            email: req.body.email
        };
        db.User.update(userUpdate, {
            where: {
                username: userUpdate.username
            }
        }).then(updatedUser => {
            console.log(updatedUser);
            res.send('Updated email!')
        })

    },
    deleteUser: function(req, res){
        db.User.destroy({
            where: {
                username: req.body.username
            }
        }).then(deletedUser => {
            res.send(`Has this been deleted? 1 = yes, 0 = no.
            Result: ${deletedUser}`)
        })
    }

}