module.exports = function (sequelize, DataTypes) {
    const Deck = sequelize.define('Deck', {
        name: {
            type: DataTypes.STRING,
            allowNull: False,
            unique: false
        },
        format: {
            type: DataTypes.STRING,
            allowNull: false
        },
        season: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [10, 255]
            }
        }
    })
}