module.exports = {
    URL: 'mongodb://localhost:27017',
    dbName : 'shutterdb',
    collections : {
        customers : {
            collectionName: 'customers',
            id: "id",
            firstName: "first name",
            lastName: "last name",
            order: "order"
        },
        orders: {
            collectionName: 'orders',
            id: "id",
            customerId: "customer id",
            quantity: "quantity",
            windows: "windows"
        }
    }
};