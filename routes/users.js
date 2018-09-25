const users = require('../controller/users');
module.exports = function(app) {
    app.post('/api/v1/register', users.register);
};