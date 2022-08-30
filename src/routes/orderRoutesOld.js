//Do not use
const express = require("express");
const router = express.Router();
const dboperations = require('../dboperations');
const orderController = require('../controllers/orderController');

//Get all.
router.route("/orders").get((req,res) =>{
    dboperations.getOrders().then(result => {
        res.json(result[0]);
        //res.send(result);
    });
});
//Get based on id.
router.route("/orders/:id").get((req,res) =>{
    dboperations.getOrder(req.params.id).then(result => {
        res.json(result[0]);
        //res.send(result);
    });
});
//Delete
router.route("/orders").post((req,res) =>{

    let order = {...req.body}
    dboperations.addOrder(order).then(result => {
        res.status(201).json(result)
    });
});
//Update

module.exports = router;
