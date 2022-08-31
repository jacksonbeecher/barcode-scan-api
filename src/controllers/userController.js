const db = require('../models');

const getAllUsers = async (req, res, next) => {
    const users = await db.user.findAll({});
    res.status(200).send(users);
}

const getUserById = async (req, res, next) => {
    let id = req.params.id;
    const user = await db.user.findOne({ where: { UserId: id } });
    res.status(200).send(user);
}

module.exports = {
    getAllUsers,
    getUserById
}