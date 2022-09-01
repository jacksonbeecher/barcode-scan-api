const db = require('../models');
//Will never need to get all lines untied to an order. Use for testing
const getAllLines = async (req, res, next) => {
    const orders = await db.order.findAll({}); //Filter by  orderstatus == alloacted, and lines are on unit id
    res.send(orders);
    res.status(200).send(orders);
}

//Get lines for a specific order using orderId. //Main GET orders route returns lines anyway so this may be unnecessary.
const getLinesByOrderId = async (req, res, next) => {
    let id = req.params.id;
    let unitId = req.params.unitId; //Will need to filter by unitId
    const lines = await db.orderline.findAll({
        where: {
            OrderId: id,
            UnitId: unitId,
            Status: "Allocated",
        }
    });
    res.send(lines);
    res.status(200).send(order);
}
//Get orderline with orderLineId. May not be necessary as lines will only ever be requested with an order. 
const getLineById = async (req, res, next) => {
    let id = req.params.id;
    const line = await db.orderline.findOne({ where: { OrderLineId: id } });
    res.status(200).send(line);
}
//Update order line values by id using request body. Order update is a separate request.
const updateLineById = async (req, res, next) => {
    let id = req.params.id;
    const line = await db.orderline.update(req.body, { where: { OrderLineId: id } }); //Get order
    res.status(200).send(line);
}

module.exports = {
    //getLineById,
    getLinesByOrderId,
    updateLineById,
}