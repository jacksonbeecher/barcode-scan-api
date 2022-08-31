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

// //Console log databases.
// sequelize.query(`SELECT name, database_id, create_date  
//                     FROM sys.databases   
//                     GO `, 
//                     { type: sequelize.QueryTypes.SELECT })
//                 .then(async dbs => {
//                     console.log(dbs);
//                 });
//Console log users.
// sequelize.query(`SELECT TOP (1000) [UnitId]
//                 ,[UnitCode]
//                 ,[UnitColorCodeId]
//                 ,[MaxOrder]
//                 ,[PoolId]
//                 ,[HandHeldCode]
//                 FROM [DispatchManager].[ash].[Unit]`, 
//                     { type: sequelize.QueryTypes.SELECT })
//                 .then(async dbs => {
//                     console.log(dbs);
//                 });

sequelize.authenticate()
    .then(() => {
        console.log('Connected');
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
db.order.hasMany(db.orderline);
db.orderline.belongsTo(db.order, { targetKey: 'OrderId', sourceKey: 'OrderId' })

db.sequelize //Do not sync. Sync creates new tables. 
//.sync({ force: false, alt})
// .then(() => {
//     console.log('Sync');
// })

module.exports = db;
// Test Connection to orm
// try {
//     sequelize.authenticate();
//     console.log('Connection has been established successfully.');
// } catch (error) {
//     console.error('Unable to connect to the database:', error);
// }