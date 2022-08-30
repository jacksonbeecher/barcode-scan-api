module.exports = (sequelize, DataTypes) => {

    const Unit = sequelize.define(`Unit`, {
        //Attributes
        UnitId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        UnitCode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        UnitColorCode: {
            type: DataTypes.INTEGER,
        },
        OrderMax: {
            type: DataTypes.INTEGER,
        },
        PoolId: {
            type: DataTypes.INTEGER,
        },
        HandHeldCode: {
            type: DataTypes.STRING,
        }

    }, {
        // don't add the timestamp attributes (updatedAt, createdAt)
        timestamps: false,
        // If don't want createdAt
        createdAt: false,
        // If don't want updatedAt
        updatedAt: false,
    });

    return Unit;
}