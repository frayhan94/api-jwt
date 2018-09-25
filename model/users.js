module.exports = (sequelize, DataTypes) => {
    return sequelize.define('users', {
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        }
    });
};