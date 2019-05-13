var express = require('express');
var router = express.Router();
var Customer = require('../entities/customer');

var customerService = require('../service/customerService');

var uniqid = require('uniqid');

const customers = [];

router.get("/asdasd", (req, res) => {
    res.send(JSON.stringify(customers))
});

router.get('/list', function(req, res) {
    customerService.listCustomers((customers)=>{
        res.status(200).send(customers)
    });
});

router.get('/id/:customerId',(req,res)=>{
    customerService.listCustomerById(
        req.params.customerId, (customer) =>{
            res.status(200).send(customer);}
    );
});

router.put('/create', function (req, res) {
    if(!req.body.id || !req.body.firstName || !req.body.lastName || !req.body.order){
        res.status(400).send('Error');
        return;
    }

    let customer = new Customer(
        req.body.id,
        req.body.firstName,
        req.body.lastName,
        req.body.order
    );
    customerService.createCustomer(customer, function () {
        res.status(204).end();
    })

})


router.post("/", (req, res) => {
    console.log(JSON.stringify(req.body))
    res.status(204).end()
    customers.push(req.body)
    if (req.body.id === undefined) {
        req.body.id = uniqid()
    }

})

module.exports = router;


