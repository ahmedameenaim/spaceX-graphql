const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema')
const cors = require('cors')
const app = express();

const port = process.env.PORT || 5000;

//allow origin policy
app.use(cors())


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))


app.listen(port , () => console.log(`server is running on port ${port}`))