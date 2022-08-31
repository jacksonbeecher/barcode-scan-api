const db = require('../models');

//Get all orders. Do not use as application will only ever get orders with specific params.
const getAllOrders = async (req, res, next) => {
    const orders = await db.order.findAll({}); //Filter by  orderstatus == alloacted, and lines are on unit id
    res.status(200).send(orders);
}
//Use get orders with lines that are assigned to current UnitId 
const getOrdersByUnitId = async (req, res, next) => {
    const unitId = req.params.unitId;
    //Work out how to filter by another table.
    const orders = await db.order.findAll({})//Filter by OrderStatus = Allocated and lines in the OrderLine.UnitId exist.
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
    //Update lines also.
}

module.exports = {
    getOrdersByUnitId,
    getOrderById,
    updateOrderById,
}