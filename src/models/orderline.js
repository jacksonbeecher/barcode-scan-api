module.exports = (sequelize, DataTypes) => {

    const OrderLine = sequelize.define('OrderLine', {
        //Attributes
        OrderLineId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        OrderId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        LineNo: { 
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        BinNo: { 
            type: DataTypes.STRING,
        },
        AccountNo: { 
            type: DataTypes.STRING,
        },
        Barcode: { 
            type: DataTypes.STRING,
        },
        Description:{
            type: DataTypes.STRING,
        },
        QtyOrdered:{
            type:DataTypes.FLOAT,
        },
        Tracked:{
            type:DataTypes.BOOLEAN,
        },
        Status:{
            type:DataTypes.STRING,

        },
        Comment:{
            type:DataTypes.STRING,

        },
        QtyPacked:{
            type:DataTypes.FLOAT,
        },
        CartonsUsed:{
            type:DataTypes.STRING,
        },
        UserId:{
            type: DataTypes.INTEGER,
        },
        UnitId:{
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
    
    return OrderLine;
}

// class OrderLine {
//     constructor(OrderLineId, OrderId, ){
//         this.OrderLineId = OrderLineId;
//         this.OrderId = OrderId;
        
//     }
// }

// module.exports = OrderLine;