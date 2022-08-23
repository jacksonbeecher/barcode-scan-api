const dboperations = require('./dboperations');
var Db = require('./dboperations');
var Order = require("./order");

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

router.use((req, res, next) => {
    console.log("Middleware");
    next();
});

router.route("/orders").get((req,res) =>{
    dboperations.getOrders().then(result => {
        res.json(result[0]);
        
        //res.send(result);
    })
});

var port = process.env.PORT || 8090;
app.listen(port);
console.log("API is running on port " + port);


