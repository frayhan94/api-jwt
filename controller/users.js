const db = require('../config/db.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/jwt');
const Users = db.users;
exports.register = (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, 8);
    Users.create(req.body).then((response) => {
        var token = jwt.sign({ id: response.id }, config.secret, {
            expiresIn: 86400 // expires in 24 hours
        });
        res.status(200).send({ auth: true, token: token });
    });
};