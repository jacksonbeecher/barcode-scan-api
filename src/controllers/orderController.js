const db = require('../models');

const getAllOrders = async (req, res, next) => {
    const orders = await db.order.findAll({}); //Filter by  orderstatus == alloacted, and lines are on unit id
    res.send(orders);
    res.status(200).send(orders);
}

//Alternatively use. However, unitId is on the line level.
const getOrdersByUnitId = async (req, res, next) => {
    
}

const getOrderById = async (req, res, next) => {
    let id = req.params.id;
    const order = await db.order.findOne({ where: { OrderId: id } });
    res.send(order);
    res.status(200).send(order);
}

const updateOrderById = async (req, res, next) => {
    let id = req.params.id;
    //let data = req.params.data;
    const order = await db.order.update(req.body, { where: { OrderId: id } }); //Get order
    res.status(200).send(order);
    //Edit Order
}

module.exports = {
    getAllOrders,
    getOrderById,
    updateOrderById,
}