const dbconfig = require('../config/dbconfig.js');
const { Sequelize, DataTypes } = require('sequelize');

//Connect sequelise orm to database.
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS, {
    host: process.env.DB_SERV,
    port: process.env.DB_PORT,
    dialect: 'mssql',
    pool: {
        max: dbconfig.pool.max,
        min: dbconfig.pool.min,
        acquire: dbconfig.pool.aquire,
        idle: dbconfig.pool.idle,
    },
    dialectOptions: {
        //options: { encrypt: true }
    },
    define: {
        freezeTableName: true,
        schema: "ash",
    },
})
sequelize.authenticate()
    .then(() => {
        console.log('ORM Connected');
    })
    .catch(err => {
        console.log("Error" + err);
    })

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.order = require('../models/order')(sequelize, DataTypes);
db.orderline = require('../models/orderline')(sequelize, DataTypes);
db.unit = require('../models/unit')(sequelize, DataTypes);
db.user = require('../models/user')(sequelize, DataTypes);
//Create association betweebn orders and orderlines.
db.order.hasMany(db.orderline, { foreignKey: 'OrderId' });
db.orderline.belongsTo(db.order, { foreignKey: 'OrderId' })

db.sequelize //Do not call .sync. Sync creates and alters existing tables. 

module.exports = db;