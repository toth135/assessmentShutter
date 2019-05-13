function Order(id, customerId, quantity, windows) {
    this.id = id;
    this.customerId = customerId;
    this.quantity = quantity;
    this.windows = windows;
}

//addshutter(order, shutter){
//    order.shutters.push(shutter);
//}

module.exports = Order;