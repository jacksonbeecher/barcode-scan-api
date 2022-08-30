const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);
router.get('/:userId', userController.getUserById);

// router.get('/:userId', (req, res, next) => {
//     const id=req.params.userId;
//     res.status(200).json({
//         message: `Handling GET requests to /users with id: ${id}`
//     });
// });

//Unused
// router.post('/', (req, res, next) =>{  //('/products') would aim at /products/products
//     res.status(200).json({
//         message: "Handling POST requests to /users"
//     });
// });

// router.patch('/:userId', (req, res, next) => {
//     const id=req.params.userId;
//     res.status(200).json({
//         message: `Handling PATCH requests to /users with id: ${id}`
//     });
// });

// router.delete('/:userId', (req, res, next) => {
//     const id=req.params.userId;
//     res.status(200).json({
//         message: `Handling DELETE requests to /users with id: ${id}`
//     });
// });

module.exports = router;