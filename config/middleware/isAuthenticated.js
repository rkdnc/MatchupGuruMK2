//Middleware for restricting routes if a user is not logged in.

module.exports = function(req, res, next){
    //If logged in, continue with request to route
    if (req.user) {
        return next();
    }
    //If not logged in, redirect to main page with login modal.
    return res.redirect('/');
};