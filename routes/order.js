var express = require('express');
var router = express.Router();

var Order = require('../entities/order');

var orderService = require('../service/orderService');


router.put('/create', function (req, res) {
    if(!req.body.id || !req.body.customerId || !req.body.quantity || !req.body.windows){
        res.status(400).send('Error');
        return;
    }

    let order = new Order(
        req.body.id,
        req.body.customerId,
        req.body.quantity,
        req.body.windows
    );
    orderService.createOrder(order, function () {
        res.status(204).end();
    })

})

router.get('/list', function(req, res) {
    orderService.listOrders((orders)=>{
        res.status(200).send(orders)
    });
});



module.exports = router;