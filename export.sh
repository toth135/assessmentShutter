#!/bin/bash
mongoexport --host localhost:27017 --db shutterdb --collection orders --forceTableScan -o data/orders.json
mongoexport --host localhost:27017 --db shutterdb --collection customers --forceTableScan -o data/customers.json
