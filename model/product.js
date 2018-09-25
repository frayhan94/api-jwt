module.exports = (sequelize, DataTypes) => {
    return sequelize.define('product', {
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING
        },
    });
};