import fs from 'fs';
import path from 'path';
import {graphql, buildSchema}  from 'graphql';
import {introspectionQuery, printSchema} from 'graphql/utilities';

import {schema} from '../data/schema';

/*
function readSchemaFromFile() {
  const schemaFile = './data/schema.base.gql';
  const encoding = 'utf8';
  const contents = fs.readFileSync(schemaFile, encoding);

  const schema = buildSchema(contents);

  return schema;
}
*/

// Assume your schema is in ../data/schema
//import {schema} from '../data/schema';
// const schema = readSchemaFromFile();
const yourSchemaPath = path.join(__dirname, '../data/schema');

// Save JSON of full schema introspection for Babel Relay Plugin to use
graphql(schema, introspectionQuery).then(result => {
  fs.writeFileSync(
    `${yourSchemaPath}.json`,
      JSON.stringify(result, null, 2)
  );
});

// Save user readable type system shorthand of schema
fs.writeFileSync(
  `${yourSchemaPath}.graphql`,
  printSchema(schema)
);
