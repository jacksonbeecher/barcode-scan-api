const db = require('../models');
//Get all users for user select login.
const getAllUsers = async (req, res, next) => {
    const users = await db.user.findAll({ where: { Active: true } });
    res.status(200).send(users);
}
//Get user to store user info in local storage. 
const getUserById = async (req, res, next) => {
    let id = req.params.id;
    const user = await db.user.findOne({ where: { UserId: id, Active: true } });
    res.status(200).send(user);
}

module.exports = {
    getAllUsers,
    getUserById
}