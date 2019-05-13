var customerDAO = require('../dao/customerDAO');


class customerService{

    listCustomers(callback){
        customerDAO.readCustomers((customers) =>{
            callback(customers);
        })
    }

    createCustomer(customer, callback){
        customerDAO.createCustomer(customer,() =>{
            callback();
        })
    }

    listCustomerById(customerId,callback){
        customerDAO.readCustomerById(customerId,callback);
    }

}

module.exports = new customerService();


