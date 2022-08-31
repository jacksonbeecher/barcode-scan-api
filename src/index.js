//Rename server.js
//const dboperations = require('./dboperations');
const app = require('./app')

const express = require('express');
const cors = require('cors');
const router = express.Router();


app.use(cors());


const PORT = process.env.PORT || 8090;
app.listen(PORT, () => console.log(`Server is listening on port: http://localhost:${PORT}`))