const express = require('express')
const app = express()

const path = require('path')
const {graphqlHTTP} = require('express-graphql')

const schema = require('./graphql/schema')
const resolver = require('./graphql/resolver')

const PORT = process.env.PORT || 3000

app.use(express.json())

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue: resolver,
    graphiql: true
}))

// app.use(graphqlHTTP({
//     schema,
//     rootValue: resolver
// }))



function start() {
    app.listen(PORT, () => console.log(`Server has been started on ${PORT}`))
} start()