const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const db = require('./config/db.js');
db.sequelize.sync({force: true}).then(() => {
    console.log('Drop and Resync with { force: true }');
});

require('./routes/users')(app);
require('./routes/category')(app);
require('./routes/product')(app);

const server = app.listen(3000, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log("App listening at http://%s:%s", host, port)
});