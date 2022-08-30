//Rename server.js
//const dboperations = require('./dboperations');
const app = require('./app')

const express = require('express');
const cors = require('cors');
const router = express.Router();


app.use(cors());



//const routes = require('./routes/orderRoutes');
//app.use('/api', routes);

// router.use((req, res, next) => {
//     console.log("Middleware"); //Future Authentication.
//     next();
// });

// //Get all.
// router.route("/orders").get((req,res) =>{
//     dboperations.getOrders().then(result => {
//         res.json(result[0]);
//         //res.send(result);
//     });
// });

// //Get based on id.
// router.route("/orders/:id").get((req,res) =>{
//     dboperations.getOrder(req.params.id).then(result => {
//         res.json(result[0]);
//         //res.send(result);
//     });
// });
// //Delete
// router.route("/orders").post((req,res) =>{

//     let order = {...req.body}
//     dboperations.addOrder(order).then(result => {
//         res.status(201).json(result)
//     });
// });
// //Update


const PORT = process.env.PORT || 8090;
app.listen(PORT, () => console.log(`Server is listening on port: http://localhost:${PORT}`))