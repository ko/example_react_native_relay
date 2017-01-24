import express from 'express';
import graphqlHTTP from 'express-graphql';
import fs from 'fs';
import https from 'https';

import {schema} from './data/schema';

let app = express();
let PORT = 3000;

app.use('/graphql', graphqlHTTP(req => {
  return {
    schema,
    pretty: true,
    graphiql: true,
  };
}));

let server = app.listen(PORT, () => {
  let host = server.address().address;
  let port = server.address().port;

  console.log(`Listening on ${host}:${port}`);
});

