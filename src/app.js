require('dotenv').config();
const express = require('express');
const app = express();
const morgan = require('morgan');

//const routes = require('./routes')
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');
const orderLineRoutes = require('./routes/orderLineRoutes');
const unitRoutes = require('./routes/unitRoutes');
//const orderRoutes = require('./routes/order');

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Give access to all clients.
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers',
        '*');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow=Methods', 'PUT, POST, PATCH, GET');
        return res.status(200).json({});
    }
    next();
});

//routes that handle requests.
//app.use('/api', routes);
app.use('/users', userRoutes);
app.use('/units', unitRoutes);
app.use('/orders', orderRoutes);
app.use('/orderlines', orderLineRoutes);

//handle routes that cannot handle request.
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;