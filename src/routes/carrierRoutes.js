const express = require("express");
const router = express.Router();
const carrierController = require('../controllers/carrierController');

router.get('/', carrierController.getAllCarriers);
router.get('/:carrierId', carrierController.getCarrierById);

module.exports = router;