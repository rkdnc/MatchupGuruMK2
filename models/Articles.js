module.exports = function (sequelize, DataTypes) {
    const Article = sequelize.define("Article", {
        author: {
            type: DataTypes.STRING,
            allowNull: false
        },
        title: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        bodyText: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        format: {
            type: DataTypes.STRING,
            allowNull: true
        },
        published: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    });
    return Article;
};