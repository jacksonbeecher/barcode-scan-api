module.exports = (sequelize, DataTypes) => {

    const Order = sequelize.define('Order', {
        //Attributes
        OrderId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        OrderDate: {
            type: DataTypes.DATE,
            allowNull: false
        },
        OrderNo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        CustomerCode: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Customer: {
            type: DataTypes.STRING,
            allowNull: false
        },
        Reference: {
            type: DataTypes.STRING,
        },
        OrderStatus: {
            type: DataTypes.STRING,
        },
        NoLines: {
            type: DataTypes.INTEGER,
        },


    }, {
        // don't add the timestamp attributes (updatedAt, createdAt)
        timestamps: false,
        // If don't want createdAt
        createdAt: false,
        // If don't want updatedAt
        updatedAt: false,
    });

    return Order;
}








// class Order {
//     constructor(OrderId, OrderDate,OrderNo, CustomerCode, Customer, Reference, OrderStatus, NoLines){
//         this.OrderId = OrderId;
//         this.OrderDate = OrderDate;
//         this.OrderNo = OrderNo;
//         this.CustomerCode = CustomerCode;
//         this.Customer = Customer;
//         this.Reference = Reference;
//         this.OrderStatus = OrderStatus,
//         this.NoLines = NoLines;
//     }
// }

// module.exports = Order;