const db = require('../models');

// const getAllLines = async (req, res, next) => {
//     const orders = await db.order.findAll({}); //Filter by  orderstatus == alloacted, and lines are on unit id
//     res.send(orders);
//     res.status(200).send(orders);
// }

//Use getLinesByOrderId in place of getAllLines as all lines will not be required.
const getLinesByOrderId = async (req, res, next) => {
    let id = req.params.id;
    let unitId = req.params.unitId; //Will need to filter by unitId
    const lines = await db.orderline.findOne({ where: { OrderId: id } });
    res.send(lines);
    res.status(200).send(order);
}

const getLinesById = async (req, res, next) => {
    let id = req.params.id;
    const lines = await db.orderline.findOne({ where: { OrderLineId: id } });
    res.status(200).send(lines);
}

const updateLineById = async(req, res, next) => {
    let id = req.params.id;
    const line = await db.orderline.update(req.body, { where: { OrderLineId: id } }); //Get order
    res.status(200).send(line);
    //Edit Order
}

module.exports = {
    getLinesById,
    getLinesByOrderId,
    updateLineById,
}