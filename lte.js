//https://docs.mongodb.com/manual/reference/operator/query/lte/

db.inventory.update( { "carrier.fee": { $lte: 5 } }, { $set: { price: 9.99 } } )
