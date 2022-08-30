const express = require("express");
const router = express.Router();
const orderController = require('../controllers/orderController');

//Handling incoming GET request to /orders
router.get('/', (req, res, next) =>{  //('/products') would aim at /products/products
    const order = {
        
    }
    res.status(200).json({
        message: "Handling GET requests to /orders"
    });
})

router.get('/:orderId', (req, res, next) => {
    const id=req.params.orderId;
    res.status(200).json({
        message: `Handling GET requests to /orders with id: ${id}`
    });
});

router.patch('/:orderId', (req, res, next) => {
    const id=req.params.orderId;
    res.status(200).json({
        message: `Handling PATCH requests to /orders with id: ${id}`
    });
});

//Unused
router.post('/', (req, res, next) =>{  //('/products') would aim at /products/products
    res.status(200).json({
        message: "Handling POST requests to /orders"
    });
});

router.delete('/:userId', (req, res, next) => {
    const id=req.params.orderId;
    res.status(200).json({
        message: `Handling DELETE requests to /orders with id: ${id}`
    });
});

module.exports = router;