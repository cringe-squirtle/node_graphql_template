import {graphqlHTTP} from 'express-graphql'
import {buildSchema} from 'graphql'

import { PersonSchema, Person} from './person/person.js';

const schema = buildSchema(`
  ${PersonSchema}

  type Query {
    person:Person
  }
`);

const root = { person:Person };

export const rootGraphqlHTTP = graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })