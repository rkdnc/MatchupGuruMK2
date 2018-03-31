module.exports = function (sequelize, DataTypes) {
    const Result = sequelize.define("Result", {
        deckName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        oppDeckName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        wins: {
            type: DataTypes.INT,
            allowNull: false,
            validate: {
                min: 0,
                max: 2
            }
        },
        losses: {
            type: DataTypes.INT,
            allowNull: false,
            validate: {
                min: 0,
                max: 2
            }
        },
        draw: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        user: {
            type: DataTypes.STRING,
            allowNull: false
        },
        eventType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        season: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
};