/**
 * Export all middleware functions
 */
module.exports = {
    init: require('./init'),
    checkRealm: require('./check-realm'),
    checkAuth: require('./check-auth')
};