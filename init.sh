
#!/bin/bash

docker run --detach -p 27017:27017 mongo

mongoimport --host localhost:27017 --db shutterdb --collection orders  data/orders.json
mongoimport --host localhost:27017 --db shutterdb --collection customers  data/customers.json

npm install
npm --prefix client install
npm --prefix client run-script build
