const express = require("express");
const router = express.Router();
const orderLineController = require('../controllers/orderlineController');

router.get('/:orderLineId', orderLineController.getLineById);
router.get('/:orderId', orderLineController.getLinesByOrderId);
router.patch('/:orderLineId', orderLineController.updateLineById);

module.exports = router;