const db = require('../models');

//Get all orders. Do not use as application will only ever get orders with specific params. Use for testing when unitId is unknown.
const getAllOrders = async (req, res, next) => {
    const orders = await db.order.findAll({
        limit: 3,
        where: {
            OrderStatus: "Allocated", //Filter by OrderStatus = Allocated
        },
        include: [{
            model: db.orderline,
        }],
    }); 
    res.status(200).send(orders);
}
//Use get new orders with lines that are assigned to current UnitId 
const getOrdersByUnitId = async (req, res, next) => {
    const unitId = req.params.unitId; //Use unitId to get orders assigned to unitId.
    const unitMaxOrder = parseInt(req.params.noOrders); //Limit amount of orders. Calculate amount of orders on front end. Based on Unit.MaxOrder and how many are currently stored.
    console.log(unitMaxOrder);
    //Work out how to filter by another table.
    const orders = await db.order.findAll({
        limit: unitMaxOrder, //Filter by required no of orders.
        where: {
            OrderStatus: "Allocated", //Filter by OrderStatus = Allocated
        },
        include: [{
            model: db.orderline, //Link orderline table.
            where: {UnitId: unitId} //Only get orders and lines with OrderLine.UnitId = currentUnitId
        }],
    })
    res.status(200).send(orders);
}
//Get single order
const getOrderById = async (req, res, next) => {
    console.log(req);
    let id = req.params.id;
    const order = await db.order.findOne({ where: { OrderId: id } });
    res.status(200).send(order);
}
//Update single order
const updateOrderById = async (req, res, next) => {
    let id = req.params.id;
    const order = await db.order.update(req.body, { where: { OrderId: id } }); //Get order
    res.status(200).send(order);
    //Update lines with separate request.
}

module.exports = {
    getAllOrders,
    getOrdersByUnitId,
    getOrderById,
    updateOrderById,
}