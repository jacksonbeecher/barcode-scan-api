class Order {
    constructor(OrderId, OrderDate,OrderNo, CustomerCode, Customer, Reference, OrderStatus, NoLines){
        this.OrderId = OrderId;
        this.OrderDate = OrderDate;
        this.OrderNo = OrderNo;
        this.CustomerCode = CustomerCode;
        this.Customer = Customer;
        this.Reference = Reference;
        this.OrderStatus = OrderStatus,
        this.NoLines = NoLines;
    }
}

module.exports = Order;