const express = require('express');
require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const port = process.env.PORT || 4000;
// const port = 4000;

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    // graphiql: process.env.NODE_ENV === 'development',
    graphiql: true,
  })
);

app.listen(4000, console.log(`Server running on port ${port}`));
