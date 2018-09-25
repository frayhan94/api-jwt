const env = {
    database: 'meteor',
    username: 'meteor',
    password: 'password',
    host: 'db4free.net',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};

module.exports = env;
