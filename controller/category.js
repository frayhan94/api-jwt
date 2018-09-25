const db = require('../config/db.js');
const Category = db.category;

exports.findAll = (req, res) => {
    Category.findAll().then((response) => {
        res.json(response);
    })
};