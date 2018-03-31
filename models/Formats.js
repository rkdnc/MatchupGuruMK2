module.exports = function (sequelize, DataTypes) {
    const Format = sequelize.define('Format', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        currentSeason: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}