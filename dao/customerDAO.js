var MongoClient = require('mongodb').MongoClient;
var shutterConstants = require('./shutterConstants');

class customerDAO{

    readCustomers(callback){
        var client = MongoClient(shutterConstants.URL);
        client.connect((err)=>{
            if(err !== null){
                console.log({error: err});
                callback([])
            }

            var db = client.db(shutterConstants.dbName);
            var collection = db.collection(shutterConstants.collections.customers.collectionName);
            var fields = shutterConstants.collections.customers.id;
            var projection = {};
            projection[shutterConstants.collections.customers.id] = 1;
            collection.find({}).toArray((err,docs) =>{
                callback(docs)
            })
        })
    }

    createCustomer(customer, cb){
        var client = MongoClient(shutterConstants.URL);
        client.connect((err)=> {
            if (err !== null) {
                console.log({error: err});
                callback([])
            }

            var db = client.db(shutterConstants.dbName);
            var collection = db.collection(shutterConstants.collections.customers.collectionName);
            var fields = shutterConstants.collections.customers.fields;
            var projection = {};
            projection[shutterConstants.collections.customers.id] = 1;
            collection.insertOne(customer);
            cb();
        })
    }

    readCustomerById(customerId, callback){
        var client = MongoClient(shutterConstants.URL);
        client.connect((err)=>{
            if(err !== null){
                console.log(err);
                callback({});
                return;
            }
            var db = client.db(shutterConstants.dbName);
            var customers = db.collection(shutterConstants.collections.customers.collectionName);
            customers.findOne({id : customerId}, (err, document) => {
                callback(document);
            });
        });
    }



}

module.exports = new customerDAO();