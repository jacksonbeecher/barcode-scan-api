var config = require("./config/dbconfig");
const sql = require("mssql");

async function getOrders() {
    try{
        let pool = await sql.connect(config);
        //const sqlQueries = await utils.loadSqlQueries('events');
        //let orders = await pool.request().query(sqlQueries.orderslist)
        let orders = await pool.request().query("SELECT TOP(5) * FROM ash.[Order]") //Await as this process can take a while. Set up parameters to filter unnecessary orders.
        return orders.recordsets;
    } catch (err) {
        console.log(err);
    }
}

async function getOrder(orderId) {
    try{
        let pool = await sql.connect(config);
        let order = await pool.request()
            .input("input_param", sql.Int, orderId)
            .query("SELECT TOP(5) * FROM ash.[Order] WHERE OrderId = @input_param") //Await as this process can take a while. Set up parameters to filter unnecessary orders.
        return order.recordsets;
    } catch (err) {
        console.log(err);
    }
}

async function addOrder(order) {
    try{
        let pool = await sql.connect(config);
        let insertOrder = await pool.request()
            .input("orderId", sql.Int, order.OrderId)
            .input("orderDate", sql.DateTime, order.OrderDate)
            .input("orderNo", sql.VarChar, order.OrderNo)
            .input("customerCode", sql.VarChar, order.CustomerCode)
            .input("customer", sql.VarChar, order.Customer)
            .input("reference", sql.VarChar, order.Reference)
            .input("orderStatus", sql.VarChar, order.OrderStatus)
            .input("noLines", sql.Int, order.NoLines)
            .query(`INSERT INTO ash.[Order] ()
                    VALUES (@orderId, @orderDate,);`)
        return insertOrder.recordsets; //You get the idea

    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getOrders : getOrders,
    getOrder : getOrder,
    addOrder: addOrder,
}