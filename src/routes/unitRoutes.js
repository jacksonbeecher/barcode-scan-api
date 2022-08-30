const express = require("express");
const router = express.Router();
const unitController = require('../controllers/unitController');

router.get('/', unitController.getAllUnits);
router.get('/:unitId', unitController.getUnitById); 

module.exports = router;
// router.get('/:unitId', (req, res, next) => {
//     const id=req.params.userId;
//     res.status(200).json({
//         message: `Handling GET requests to /units with id: ${id}`
//     });
// });