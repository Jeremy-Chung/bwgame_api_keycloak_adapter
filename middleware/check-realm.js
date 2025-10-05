/**
 * Mock check-realm middleware for bypassing Keycloak
 * This checks if the realm/licensee is valid
 */
module.exports = (req, res, next) => {
    console.log('Check-realm middleware: bypassing Keycloak realm check');
    
    // Initialize res.locals if not exists
    if (!res.locals) {
        res.locals = {};
    }
    
    // Set realm from URL parameter or default
    res.locals.realm = req.params.licensee || req.query.licensee || 'default';
    
    console.log(`Realm set to: ${res.locals.realm}`);
    
    // In a real implementation, you might validate the realm here
    // For now, we accept any realm
    
    next();
};