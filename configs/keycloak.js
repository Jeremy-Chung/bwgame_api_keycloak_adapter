/**
 * Mock Keycloak configuration
 */
module.exports = {
    adminAccount: 'admin',
    adminPassword: 'admin123',
    fixedRealm: 'default',
    authServerUrl: 'http://localhost:8080/auth',
    resource: 'history-api',
    'ssl-required': 'none',
    'public-client': true,
    'confidential-port': 0
};