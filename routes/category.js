module.exports = function(app) {

    const category = require('../controller/category');
    const VerifyToken = require('../auth/VerifyToken');

    app.get("/api/v1/category", VerifyToken, category.findAll);
};