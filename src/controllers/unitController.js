const db = require('../models');

const getAllUnits = async (req, res, next) => {
    const units = await db.unit.findAll({});
    console.log(units);
    res.status(200).send(units);
}

const getUnitById = async (req, res, next) => {
    let id = req.params.id;
    const unit = await db.unit.findOne({ where: { UnitId: id } });
    res.send(unit);
    res.status(200).send(unit);
}

module.exports = {
    getAllUnits,
    getUnitById
}