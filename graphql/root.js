import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'

import { PersonType, Person, PersonQuery } from './queries/person.js';
import { updateInfoMutation, updateInfo } from './mutations/updateInfo.js';
const schema = buildSchema(`
  ${PersonType}
  ${PersonQuery}
  ${updateInfoMutation}
`);

const root = { person: Person, updateInfo: updateInfo };

export const rootGraphqlHTTP = graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
})