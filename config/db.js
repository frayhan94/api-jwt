const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
    host: env.host,
    dialect: env.dialect,
    operatorsAliases: false,

    pool: {
        max: env.max,
        min: env.pool.min,
        acquire: env.pool.acquire,
        idle: env.pool.idle
    }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.product = require('../model/product.js')(sequelize, Sequelize);
db.category = require('../model/category.js')(sequelize, Sequelize);
db.users = require('../model/users.js')(sequelize, Sequelize);

// Here we can connect product and category base on product id
db.product.hasMany(db.category, {foreignKey: 'fk_productid', sourceKey: 'uuid'});
db.category.belongsTo(db.product, {foreignKey: 'fk_productid', targetKey: 'uuid'});

module.exports = db;
