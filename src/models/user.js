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
        UnitName: {
            type: DataTypes.STRING
        },
        Active: {
            type: DataTypes.BOOLEAN,
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





//console.log(User === sequelize.models.User);



// class User {
//     constructor(UserId, OrderDate,OrderNo, CustomerCode, Customer, Reference, OrderStatus, NoLines){
//         this.UserId = UserId;

//     }
// }

// module.exports = User;