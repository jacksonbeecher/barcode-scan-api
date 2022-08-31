const express = require("express");
const router = express.Router();
const orderController = require('../controllers/orderController');

//Handling incoming requests to /orders
//router.get('/', orderController.getAllOrders); 
router.get('/:orderId/:unitId', orderController.getOrdersByUnitId); //Get all orders. Params: OrderStatus = Allocated, UnitId = Current Logged in.
router.get('/:orderId', orderController.getOrderById); //Get Order by Id
router.patch('/:orderId', orderController.updateOrderById); //Set order values via orderId. Params: Values.

module.exports = router;