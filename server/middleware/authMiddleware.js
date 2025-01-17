const checkUserExists = (req, res, next) => {
    if (!req.session.user) {
        req.session.user = {
            loggedIn: false
        };
    }
    next();
}

module.exports = {
    checkUserExists
}