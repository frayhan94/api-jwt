var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");
var app = express();
var mysql = require("mysql");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next){
    res.locals.connection = mysql.createConnection({
        host     : 'db4free.net',
        user     : 'meteor',
        password : 'password',
        database : 'meteor'
    });
    res.locals.connection.connect();
    next();
});

routes(app);

var server = app.listen(3000, function () {
    console.log("app running on port.", server.address().port);
});