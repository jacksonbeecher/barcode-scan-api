module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('HandHeldUser', {
        //Attributes
        UserId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        UserCode: {
            type: DataTypes.STRING,
            allowNull: false
        },
        UserName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Active: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }

    }, {
        // don't add the timestamp attributes (updatedAt, createdAt)
        timestamps: false,
        // If don't want createdAt
        createdAt: false,
        // If don't want updatedAt
        updatedAt: false,
    });

    return User;
}
