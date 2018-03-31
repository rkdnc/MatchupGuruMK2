module.exports = function (sequelize, DataTypes) {
    const Season = sequelize.define("Season", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                max: 3
            }
        }
    });
    return Season;
};