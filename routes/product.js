const product = require('../controller/product');
const VerifyToken = require('../auth/VerifyToken');

module.exports = function(app) {

    app.post("/api/v1/product", VerifyToken, product.create);

    app.get("/api/v1/product", VerifyToken, product.findAll);

    app.get("/api/v1/product/:uuid", VerifyToken,product.findOne);

    app.put('/api/v1/product/:uuid', VerifyToken,product.updateOne);

    app.delete('/api/v1/product/:uuid', VerifyToken, product.deleteOne);
};