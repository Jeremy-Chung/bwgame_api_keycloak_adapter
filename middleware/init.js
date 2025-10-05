/**
 * Mock init middleware for bypassing Keycloak
 * This initializes the passport/auth context
 */
module.exports = (req, res, next) => {
    console.log('Init middleware: bypassing Keycloak initialization');
    
    // Initialize res.locals if not exists
    if (!res.locals) {
        res.locals = {};
    }
    
    // Mock passport object
    res.locals.passport = {
        account: {
            // Mock account methods if needed
        }
    };
    
    console.log('Passport mock initialized');
    
    next();
};