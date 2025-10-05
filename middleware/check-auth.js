/**
 * Mock check-auth middleware for bypassing Keycloak
 * This authenticates the user and sets user info
 */
module.exports = (req, res, next) => {
    console.log('Check-auth middleware: bypassing Keycloak authentication');
    
    // Initialize res.locals if not exists
    if (!res.locals) {
        res.locals = {};
    }
    
    // Get account ID from various sources
    const accountId = req.query.accountId || 
                     req.query.account || 
                     req.body?.accountId || 
                     req.body?.account ||
                     req.headers['x-account-id'] || 
                     'test-account-123';
    
    // Mock user object that would normally come from Keycloak token
    res.locals.user = {
        accountId: accountId,
        sub: accountId, // subject (user ID from JWT)
        preferred_username: accountId,
        email: `${accountId}@example.com`,
        name: accountId,
        realm: res.locals.realm || 'default'
    };
    
    console.log('Mock authenticated user:', res.locals.user);
    
    next();
};