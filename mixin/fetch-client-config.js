/**
 * Mock fetch-client-config
 * This would normally fetch Keycloak client configuration
 */
module.exports = async (realm) => {
    console.log(`Mock fetch-client-config for realm: ${realm}`);
    
    // Return mock client configuration
    return {
        realm: realm || 'default',
        'auth-server-url': 'http://localhost:8080/auth',
        'ssl-required': 'none',
        resource: 'history-api',
        'public-client': true
    };
};