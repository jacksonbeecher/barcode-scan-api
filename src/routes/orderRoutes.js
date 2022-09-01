const express = require("express");
const router = express.Router();
const orderController = require('../controllers/orderController');

//Handling incoming requests to /orders
router.get('/', orderController.getAllOrders); //Get every order and line.
router.get('/:unitId/:noOrders', orderController.getOrdersByUnitId); //Get all orders. Params = UnitId, noOrders = calculated at frontend.
//router.get('/:orderId', orderController.getOrderById); //Get Order by Id
router.patch('/:orderId', orderController.updateOrderById); //Set order values via orderId. Params: Values.

module.exports = router;