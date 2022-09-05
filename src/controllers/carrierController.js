const db = require('../models');
//Get all units for unit select in settings.
const getAllCarriers = async (req, res, next) => {
    const carriers = await db.carrier.findAll({});
    res.status(200).send(carriers);
}
//Get single unit. For unit info in local storage.
const getCarrierById = async (req, res, next) => {
    let id = req.params.carrierId;
    const carrier = await db.carrier.findOne({ where: { CarrierId: id } });
    res.status(200).send(carrier);
}

module.exports = {
    getAllCarriers,
    getCarrierById,
}