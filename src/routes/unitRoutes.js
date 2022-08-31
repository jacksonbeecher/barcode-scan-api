const express = require("express");
const router = express.Router();
const unitController = require('../controllers/unitController');

router.get('/', unitController.getAllUnits);
router.get('/:unitId', unitController.getUnitById); 

module.exports = router;