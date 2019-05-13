var orderDAO = require('../dao/orderDAO');

class orderService {

    createOrder(order, callback){
        orderDAO.createOrder(order,() =>{
            callback();
        })
    }

    listOrders(callback){
        orderDAO.readOrders((orders) =>{
            callback(orders);
        })
    }

}

module.exports = new orderService();