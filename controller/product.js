const db = require('../config/db.js');
const Category = db.category;
const Product = db.product;
/*
    Sample payload with raw json
    {
        "name": "Nasi Uduk 123",
        "categories": [
        {
            "name": "Makanan"
        },
        {
            "name": "Kuliner"
        }
    ]
    }
*/
exports.create = (req, res) => {
    Product.create(req.body,{
        include: [ Category ]
    }).then((response) => {
        res.send(response);
    })
};

exports.findOne = (req, res) => {
    console.log(req.body);
    console.log(req.params);
    Product.findOne({ where: {uuid: req.params.uuid} }).then((response) => {
        res.json(response);
    })
};

exports.findAll = (req, res) => {
    Product.findAll().then((response) => {
        res.json(response);
    })
};

exports.updateOne = (req, res) => {
    Product.update(req.body, {where: { uuid: req.params.uuid } }).then((response) => {
        res.json(response);
    })
};

exports.deleteOne = (req, res) => {
    const uuid = req.params.uuid;
    Product.destroy({where: { uuid: uuid}}).then(() => {
        Category.destroy({where: { fk_productid: uuid }}).then((response) => {
            res.json(response);
        })
    });
};