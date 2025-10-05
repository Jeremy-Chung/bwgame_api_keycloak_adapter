/**
 * Main entry point for the bypass Keycloak adapter
 */
module.exports = {
    middleware: require('./middleware'),
    configs: require('./configs'),
    mixin: {
        fetchClientConfig: require('./mixin/fetch-client-config')
    }
};