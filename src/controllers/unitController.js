const db = require('../models');
//Get all units for unit select in settings.
const getAllUnits = async (req, res, next) => {
    const units = await db.unit.findAll({});
    res.status(200).send(units);
}
//Get single unit. For unit info in local storage.
const getUnitById = async (req, res, next) => {
    let id = req.params.unitId;
    const unit = await db.unit.findOne({ where: { UnitId: id } });
    res.status(200).send(unit);
}

module.exports = {
    getAllUnits,
    getUnitById
}