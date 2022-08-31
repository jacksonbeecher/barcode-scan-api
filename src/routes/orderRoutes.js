const express = require("express");
const router = express.Router();
const orderController = require('../controllers/orderController');

//Handling incoming GET request to /orders
router.get('/', orderController.getAllOrders)

router.get('/:orderId', orderController.getOrderById)

router.patch('/:orderId', orderController.updateOrderById)

//Unused
// router.post('/', (req, res, next) =>{  //('/products') would aim at /products/products
//     res.status(200).json({
//         message: "Handling POST requests to /orders"
//     });
// });

// router.delete('/:userId', (req, res, next) => {
//     const id=req.params.orderId;
//     res.status(200).json({
//         message: `Handling DELETE requests to /orders with id: ${id}`
//     });
// });

module.exports = router;