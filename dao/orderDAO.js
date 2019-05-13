var MongoClient = require('mongodb').MongoClient;
var shutterConstants = require('./shutterConstants');

class orderDAO{

    //customerid szűrés

    createOrder(order, cb){
        var client = MongoClient(shutterConstants.URL);
        client.connect((err)=> {
            if (err !== null) {
                console.log({error: err});
                callback([])
            }

            var db = client.db(shutterConstants.dbName);
            var collection = db.collection(shutterConstants.collections.orders.collectionName);
            //var fields = shutterConstants.collections.orders.fields;
            //var projection = {};
            //projection[shutterConstants.collections.orders.id] = 1;
            collection.insertOne(order);
            cb();
        })
    }

    readOrders(callback){
        var client = MongoClient(shutterConstants.URL);
        client.connect((err)=>{
            if(err !== null){
                console.log({error: err});
                callback([])
            }

            var db = client.db(shutterConstants.dbName);
            var collection = db.collection(shutterConstants.collections.orders.collectionName);
            //var fields = shutterConstants.collections.orders.id;
            //var projection = {};
            //projection[shutterConstants.collections.orders.id] = 1;
            collection.find({}).toArray((err,docs) =>{
                callback(docs)
            })
        })
    }

}

module.exports = new orderDAO();