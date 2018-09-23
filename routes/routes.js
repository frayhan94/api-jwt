var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('../config');
var VerifyToken = require('../auth/VerifyToken');
var appRouter = function (app) {

    app.get("/", function(req, res) {
        res.status(200).send("Welcome to Meteor restful API");
    });

    app.post('/api/v1/register', function(req, res){
        var hashedPassword = bcrypt.hashSync(req.body.password, 8);
        var query = "INSERT INTO users SET name= '"+req.body.name+"', email='"+req.body.email+"', password='"+hashedPassword+"'";
        res.locals.connection.query(query, function(error, results){
            if (error) return res.status(500).send("There was a problem registering the user.")
            // create a token
            var token = jwt.sign({ id: results.id }, config.secret, {
                expiresIn: 86400 // expires in 24 hours
            });
            res.status(200).send({ auth: true, token: token });
        });
    });

    app.post("/api/v1/product", VerifyToken, function (req, res) {
        var query = "INSERT INTO products SET attributes = '"+JSON.stringify(req.body)+"'";
        res.locals.connection.query(query, function (error, results) {
            if (error) throw error;
            res.json(results);
        })
    });

    app.get("/api/v1/product/:id", VerifyToken, function (req, res) {
        var query= "SELECT id, attributes FROM products WHERE id ='"+req.params.id+"'";
        res.locals.connection.query(query,function(error, results){
            if (error) throw error;
            res.json(results);
        })
    });

    app.put('/api/v1/product/:id', VerifyToken, function (req, res) {
        var query = "UPDATE  products set attributes = '"+JSON.stringify(req.body)+"' WHERE id = '"+req.params.id+"'";
        res.locals.connection.query(query, function(error, results){
            if (error) throw error;
            res.json(results);
        })
    });

    app.delete('/api/v1/product/:id', VerifyToken, function(req,res) {
        var query = "DELETE FROM products where id = '"+req.params.id+"'";
        res.locals.connection.query(query, function(error, results){
            if (error) throw error;
            res.json(results);
        })
    });
};

module.exports = appRouter;