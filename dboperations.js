var config = require("./dbconfig");
const sql = require("mssql");

async function getOrders() {
    try{
        let pool = await sql.connect(config);
        let orders = await pool.request().query("SELECT TOP(5) * FROM ash.[Order]") //Await as this process can take a while. Set up parameters to filter unnecessary orders.
        return orders.recordsets;
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getOrders : getOrders
}