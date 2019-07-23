//https://docs.mongodb.com/manual/reference/operator/query/in/

//{ field: { $in: [<value1>, <value2>, ... <valueN> ] } }

const idsArray = [ '1', '2', '3', '4', '5' ]

const fetchedResults = DAO.find(
SomeModel,
  { status: 'ACTIVE', 
    _id: { $in: idsArray }
  }
)

fetchedResults.then(results => console.log({results}))
